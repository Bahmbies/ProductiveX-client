const ui = require('./ui')
const api = require('./api')
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

    api.index()
         .then(ui.indexSuccess)
         .catch(ui.indexFailed)
}

const onDeleteTodo = (event) => {
    event.preventDefault()

    api.delete(data)
         .then(ui.deleteSuccess)
        .catch(ui.deleteFailed)
}

const onUpdateTodo = (event) => {
    event.preventDefault()

    const form = event.target
    const data = getFormFields(form)

    api.update(data)
         .then(ui.updateSuccess)
        .catch(ui.updateFailed)

}

module.exports = {
    onCreateTodo,
    onIndexTodo,
    onDeleteTodo,
    onUpdateTodo
}
