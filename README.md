# Boilerplate

This Repo can start as a kickoff point for next js aplications (especially if they are generated statically)

# Setup

Enter your application dir

## Install

to install all of the dependencies 

```bash
yarn
```

## Run Dev

To start development run 

```bash
yarn dev
```

this will start a server for development and hot reloading

## Build / Export

To build a static site from your react code run the comand

```bash
yarn build
```

# Development

## Dot Env

add a `.env` file to the route of your application. In this example we use a kentico id, but you can add whatever you want in here. But **NEVER A SECRET**. all of the env vars will be added to the client so if you dont want users to have data dont put it here.
Any env vars need to be added to the `next.config.js` file under the `env` key.
