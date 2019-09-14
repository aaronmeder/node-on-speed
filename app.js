const cron = require('node-cron');
const express = require('express');
const speedTest = require('speedtest-net');
const sqlite3 = require('sqlite3').verbose();

const test = speedTest({
  maxTime: 90000,
});

const app = express();

// schedule tasks to be run on the server
cron.schedule('*/5 * * * *', function() {
  console.log('-- checking speed ----');

  // check speed
  // -------------

  // speedtest successful
  test.on('data', data => {
    // save result to db

    // connect to db
    const db = new sqlite3.Database(
      './data/speedtests.db',
      sqlite3.OPEN_READWRITE,
      err => {
        if (err) {
          console.error(err.message);
        }
        console.log('Connected to the database.');
      }
    );

    // insert result into db
    db.run(
      `INSERT INTO results(datetime, download, upload) VALUES(datetime('now', 'localtime'), ${data.speeds.originalDownload}, ${data.speeds.originalUpload})`,
      function(err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      }
    );

    db.close(err => {
      if (err) {
        console.error(err.message);
      }
      console.log('Closed the database connection.');
    });
  });

  // speedtest failed
  test.on('error', err => {
    console.error(err);
  });
});

app.listen(3128);
