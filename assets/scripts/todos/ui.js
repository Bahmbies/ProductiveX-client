const store = require('../store')

const createSuccess = (response) => {
    $('#alert-msg').text('Added!')
    store.todo = response.todo
    console.log(response.todo)
    


}

const createFailed = function () {
    $('#alert-msg').text('Whoops! Try Again')
  }


const indexSuccess = (response) => {
  $('form').trigger('reset')
    // show all todos in list format with a delete and update option
        $("#alert-msg").text('Cool! Get To It!!')
        $('#container').show()
        $('#container').html()
        $('#container').data()
        const todos = response.todos
        // console.log(response)
        todos.forEach(function (currentTodo) {
          const todoHTML = (`
          <h1>${currentTodo.text}</h1>
          <p> ID: ${currentTodo._id}</p>
          <br>
            <button id="todo-delete" type="button" data-todo-id=${currentTodo._id}>Delete!</button>
          `)
          console.log('done w foreach')
          $('#container').append(todoHTML)
          $('form').trigger('reset')
        })

    
      }


const indexFailed = () => {
    $('#alert-msg').text('Hmm.. Try Again')
}

const deleteSuccess = (response) => {
    

    $("#alert-msg").text('Todo Deleted')
    
    // $('#container').html()
    // const todos = response.todo
    // console.log(response)
    // todos.forEach(function (todo) {
    //   const todoHTML = (`
    //     <h1>${todo.text}</h1>
    //   `)
    //   $('#container').append(todoHTML)
    // })
  }


const deleteFailed = () => {
$('#alert-msg').text('Hmm.. Try Again')
}

const updateSuccess = (response) => {
  $('#alert-msg').text('Updated!')
  // store.todo = response.todo
  $('form').trigger('reset')
}

const updateFailed = () => {
  $('#alert-msg').text('Failed to Update')
}

  
  module.exports = {
      createSuccess,
      createFailed,
      indexSuccess,
      indexFailed,
      deleteSuccess,
      deleteFailed,
      updateSuccess,
      updateFailed
  }