'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BlogSchema extends Schema {
  up () {
    this.table('blogs', (table) => {
      table.string('time_created')
    })
  }

  down () {
    this.table('blogs', (table) => {
      // reverse alternations
    })
  }
}

module.exports = BlogSchema
