'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BlogCommentSchema extends Schema {
  up () {
    this.create('blog_comments', (table) => {
      table.increments()
      table.string('comment', 3000).notNullable()
      table.string('username')
      table.integer('blog_id')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('blog_comments')
  }
}

module.exports = BlogCommentSchema
