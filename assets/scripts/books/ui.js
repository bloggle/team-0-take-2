const showItemsTemplate = require('./../templates/helpers/book-listing.handlebars')

const onGetBooksSuccess = function (data) {
  const showItemsHtml = showItemsTemplate({ books: data.books })
  $('.content').html(showItemsHtml)
  if (data.books.length === 0) {
    $('.messaging').text('Add an item to the list!')
    setTimeout(function () {
      $('.messaging').text('')
    }, 2000)
  }
}

const onGetBooksFailure = function (data) {
  $('.messaging').text('You were unable to find any books')
  setTimeout(function () {
    $('.messaging').text('')
  }, 2000)
}

module.exports = {
  onGetBooksSuccess,
  onGetBooksFailure
}
