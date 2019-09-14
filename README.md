# node-on-speed ⚡

Ongoing internet connection speedtest running on node.js

## Status

Very basic and not robust.

Does a speedtest every thirty minutes and saves the result to database.

## Stack

- Adonis.js framework for node
- speedtest.net for speedtests
- Saves to a sqlite DB per default

## Setup project

<<<<<<< HEAD
1. Install Adonis globally using `npm i -g @adonisjs/cli`
2. Install needed project dependencies using `npm install`
=======
1. Install Adonis `npm install -g @adonisjs/cli`
2. Install needed dependencies using `npm install`
>>>>>>> Add adonis install instructions to Readme
3. Copy `.env.example` to `.env` and edit sample values to your environment.
4. Run migration to create the database: `adonis migration:run`
5. Install forever to run processes in background: `npm install -g forever`

## Dev Usage

1. Start speedtest cronjob using `npm run scheduler`
2. Start dashboard using `npm run dev`

## Letting it run (production)

I sugget using the "forever" tool to run and watch the processes in background:

- Run `npm run forever` to run both the scheduler and dashboard in the background
- Access dasboardboard on [http://localhost:3333](http://localhost:3333)

**Managing background processes:**

- List all running processes with `forever list`
- Restart all running processes with `forever restartall`
- Stop all running processes with `forever stopall`
- Show logs using `forever logs` --> `forever logs [index]`
