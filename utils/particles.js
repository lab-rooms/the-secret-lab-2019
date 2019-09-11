
export default class Particles {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particleCount = 200;
    this.particles = [];
    this.W = window.innerWidth;
    this.H = window.innerHeight;
    this.canvas.width = this.W;
    this.canvas.height = this.H;
    this.ctx.globalCompositeOperation = "lighter";
    this.mouse = {
      x: 0,
      y: 0,
      rx: 0,
      ry: 0,
      speed: 45,
      delta: 0
    };
    this.addEventListeners();
    this.initParticleSystem();
    requestAnimationFrame(() => this.animateParticles());
  }

  addEventListeners() {
    document.addEventListener('mousemove', (e) => {

      this.mouse.x = e.clientX || e.pageX;
      this.mouse.y = e.clientY || e.pageY;
      this.mouse.x -= this.W / 2;
      this.mouse.y -= this.H / 2;

    }, false);
  }

  initParticleSystem() {
    this.createParticles();
    this.drawParticles();
  }

  animateParticles() {
    this.clearCanvas();
    this.setDelta();
    this.update();
    this.drawParticles();
    this.updateParticles();
    requestAnimationFrame(() => this.animateParticles());
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.W, this.H);
  }

  createParticles() {
    for (let i = this.particleCount - 1; i >= 0; i--) {
      const p = new Particle(this);
      this.particles.push(p);
    }
  }

  drawParticles() {
    for (let i = this.particleCount - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.draw();
    }
  }

  updateParticles() {
    for (let i = this.particleCount - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.move();
      p.boundaryCheck();
    }
  }

  setDelta() {
    this.now = (new Date()).getTime();
    this.mouse.delta = (this.now - this.then) / 1000;
    this.then = this.now;
  }

  update() {

    if (isNaN(this.mouse.delta) || this.mouse.delta <= 0) {
      return;
    }

    let distX = this.mouse.x - (this.mouse.rx),
      distY = this.mouse.y - (this.mouse.ry);

    if (distX !== 0 && distY !== 0) {

      this.mouse.rx -= ((this.mouse.rx - this.mouse.x) / this.mouse.speed);
      this.mouse.ry -= ((this.mouse.ry - this.mouse.y) / this.mouse.speed);

    }
  }
}

class Particle {
  constructor(parent) {
    this.parent = parent;
    this.h = parseInt(283);
    this.s = parseInt(2 * Math.random() + 30);
    this.l = parseInt(100 * Math.random() + 30);
    this.a = 0.2 * Math.random();

    this.color = "hsla(" + this.h + "," + this.s + "%," + this.l + "%," + (this.a) + ")";
    this.shadowcolor = "hsla(" + this.h + "," + this.s + "%," + this.l + "%," + parseFloat(this.a - 0.55) + ")";


    this.x = Math.random() * this.parent.W;
    this.y = Math.random() * this.parent.H;
    this.direction = {
      "x": -1 + Math.random() * 2,
      "y": -1 + Math.random() * 2
    };
    //this.radius = 9 * ((Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1)+3);
    this.radius = Particle.randomNorm(0, 4);
    this.scale = 0.8 * Math.random() + 0.5;
    this.rotation = Math.PI / 4 * Math.random();

    this.grad = this.parent.ctx.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, 0);
    this.grad.addColorStop(0, this.color);
    this.grad.addColorStop(1, this.shadowcolor);

    this.vx = (2 * Math.random() + 4) * .01 * this.radius;
    this.vy = (2 * Math.random() + 4) * .01 * this.radius;

    this.valpha = 0.01 * Math.random() - 0.02;
  }

  static randomNorm(mean, stdev) {
    return Math.abs(Math.round((Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1)) * stdev) + mean;
  }
  //using hsl is easier when we need particles with similar colors
  move() {
    this.x += this.vx * this.direction.x;
    this.y += this.vy * this.direction.y;
    this.rotation += this.valpha;
    //this.radius*= Math.abs((this.valpha*0.01+1));
  };

  changeDirection (axis) {
    this.direction[axis] *= -1;
    this.valpha *= -1;
  };
  draw () {
    this.parent.ctx.save();
    this.parent.ctx.translate(this.x + this.parent.mouse.rx / -20 * this.radius, this.y + this.parent.mouse.ry / -20 * this.radius);
    this.parent.ctx.rotate(this.rotation);
    this.parent.ctx.scale(1, this.scale);

    this.grad = this.parent.ctx.createRadialGradient(0, 0, this.radius, 0, 0, 0);
    this.grad.addColorStop(1, this.color);
    this.grad.addColorStop(0, this.shadowcolor);
    this.parent.ctx.beginPath();
    this.parent.ctx.fillStyle = this.grad;
    this.parent.ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false);
    this.parent.ctx.fill();
    this.parent.ctx.restore();


  };

  boundaryCheck () {
    if (this.x >= this.parent.W * 1.2) {
      this.x = this.parent.W * 1.2;
      this.changeDirection("x");
    } else if (this.x <= -this.parent.W * 0.2) {
      this.x = -this.parent.W * 0.2;
      this.changeDirection("x");
    }
    if (this.y >= this.parent.H * 1.2) {
      this.y = this.parent.H * 1.2;
      this.changeDirection("y");
    } else if (this.y <= -this.parent.H * 0.2) {
      this.y = -this.parent.H * 0.2;
      this.changeDirection("y");
    }
  };
}
