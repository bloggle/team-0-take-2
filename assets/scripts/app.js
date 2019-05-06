'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const books = require('./books/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  ('#get-book-button').on('submit', books.onShowBooks)
})
