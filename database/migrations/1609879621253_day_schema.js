'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DaySchema extends Schema {
  up () {
    this.create('days', (table) => {
      table.string('day')
      table.string('description', 100)
    })
  }

  down () {
    this.drop('days')
  }
}

module.exports = DaySchema
