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

1. Copy `.env.example` to `.env` and edit sample values to your environment.
2. run migration to create the database: `adonis migration:run`

## Usage
