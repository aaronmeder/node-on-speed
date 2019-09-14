'use strict'

const speedTestTool = require('speedtest-net');
const Speedtest = use('App/Models/Speedtest')
const Task = use('Task')


class Testspeed extends Task {
  static get schedule () {
    return '0 */2 * * * *'
  }

  async handle () {
    console.log('-- checking speed ----');

    // check speed
    // -------------

    const test = speedTestTool({
      maxTime: 45000,
    });

    // speedTestTool successful
    test.on('data', data => {

      console.log(`Results: Down: ${data.speeds.download}, Up: ${data.speeds.upload}`);

      // save result to DB
      console.log('Saving result...');
      const newTest = new Speedtest();
      newTest.download = data.speeds.originalDownload;
      newTest.upload = data.speeds.originalUpload;
      if(newTest.save()) {
        console.log('Result saved.');
      }

    });

    // speedTestTool failed
    test.on('error', err => {
      console.error(err);
    });

  }
}

module.exports = Testspeed
