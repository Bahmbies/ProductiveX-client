const store = require('../store')
const config = require('../config')
const { data } = require('jquery')

const create = (data) => {
    return $.ajax({
        url: config.apiUrl + '/todos',
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + store.user.token 
        },
        data
    })
}

const index = () => {
    return $.ajax({
       url: config.apiUrl + '/todos',
       method: 'GET',
       headers: {
           Authorization: 'Bearer ' + store.user.token
       }
    })
}

const deleteTodo = (todoId) => {

    
    return $.ajax({
        url: config.apiUrl + '/todos/' + todoId,
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }

    })
}

const update = (data) => {
    return $.ajax({
        url: config.apiUrl + '/todos/' + data.todo.id,
        method: 'PATCH',
        headers: {
            Authorization: 'Bearer ' + store.user.token 
        },
        data
    })
}

// const show = () => {
//     return $.ajax({
//         url: config.apiUrl + '/todos/' + data.todo.id 
//     })
// }


module.exports = {
    create,
    index,
    deleteTodo,
    update
}