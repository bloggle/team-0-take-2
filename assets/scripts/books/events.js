const api = require('./api.js')
const ui = require('./ui.js')

const onShowBooks = function () {
  event.preventDefault()
  $('.content').show()
  api.getBooks()
    .then(ui.onGetBooksSuccess)
    .catch(ui.onGetBooksFailure)
}

module.exports = {
  onShowBooks
}
