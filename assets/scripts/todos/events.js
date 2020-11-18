const ui = require('./ui')
const api = require('./api')
const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')

const onCreateTodo = (event) => {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)

    api.create(data)
        .then(ui.createSuccess)
        .catch(ui.createFailed)
}

const onIndexTodo = (event) => {
    event.preventDefault()

    

    console.log('im Indexing...')

    api.index()
         .then(ui.indexSuccess)
         .catch(ui.indexFailed)
}

const showTodo = (event) => {
    event.preventDefault
    
    api.show()
    .then(ui.showSuccess)
    .catch(ui.showFailed)
}

const onDeleteTodo = (event) => {

    const todoId = $(event.target).data('todo-id')
    
    $('#container').empty(todoId)



    api.deleteTodo(todoId)
         .then(ui.deleteSuccess)
        .catch(ui.deleteFailed)
  
}

const onUpdateTodo = (event) => {
    event.preventDefault()

    const data = getFormFields(event.target)

     const todoId = $(event.target).data('todo-id')

    api.update(data)
         .then(ui.updateSuccess)
        .catch(ui.updateFailed)

}

module.exports = {
    onCreateTodo,
    onIndexTodo,
    onDeleteTodo,
    onUpdateTodo,
    showTodo
}
