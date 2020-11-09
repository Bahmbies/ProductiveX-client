const store = require('../store')

const createSuccess = (response) => {
    $('#alert-msg').text('Added!')
    store.todo = response.todo


}

const createFailed = function () {
    $('#alert-msg').text('Whoops! Try Again')
  }


const indexSuccess = (response) => {
    response.todos
    $('#alert-msg').text()
}

const indexFailed = () => {
    $('#alert-msg').text('Hmm.. Try Again')
}

  
  module.exports = {
      createSuccess,
      createFailed,
      indexSuccess,
      indexFailed
  }