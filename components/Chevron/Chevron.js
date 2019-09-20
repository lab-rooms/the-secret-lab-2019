import React from 'react';
import './chevron.scss';

const Chevron = () => {
  const scrollDown = () => {
    let doc = document.documentElement;
    let start = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    let distance = window.innerHeight - start;
    let timeStart;
    let timeElapsed;
    let duration = 400;

    const loop = (time) => {
      timeElapsed = time - timeStart;
      window.scrollTo(0, easeInOutQuad(timeElapsed, start, distance, duration));
      if (timeElapsed < duration) {
        requestAnimationFrame(loop);
      }
    };

    requestAnimationFrame((time) => {
      timeStart = time;
      loop(time);
    });
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  return (
    <div className="chevron" onClick={scrollDown}><div /></div>
  )
}

export default Chevron
