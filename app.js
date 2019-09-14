const cron = require('node-cron');
const express = require('express');
const speedTest = require('speedtest-net');

const test = speedTest({
  maxTime: 20000,
});

const app = express();

// schedule tasks to be run on the server
cron.schedule('* * * * *', function() {
  console.log('-- task started ----');

  // check speed
  // -------------

  // speedtest successful
  test.on('data', data => {
    console.dir(data);
  });

  // speedtest failed
  test.on('error', err => {
    console.error(err);
  });
});

app.listen(3128);
