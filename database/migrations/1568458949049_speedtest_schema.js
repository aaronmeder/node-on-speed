'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpeedtestSchema extends Schema {
  up () {
    this.create('speedtests', (table) => {
      table.increments()
      table.timestamps()
      
      table.string("upload");
      table.string("download");
    })
  }

  down () {
    this.drop('speedtests')
  }
}

module.exports = SpeedtestSchema
