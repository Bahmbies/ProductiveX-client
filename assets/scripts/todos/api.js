const store = require('../store')
const config = require('../config')

const create = (data) => {
    return $.ajax({
        url: config.apiUrl + '/todos',
        data: data,
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + store.user.token 
        }


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

const deleteTodo = () => {
    return $.ajax({
        url: config.apiUrl + '/todos/' + store.todo._id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        method: 'DELETE'

    })
}

const update = (data) => {
    return $.ajax({
        url: config.apiUrl + '/todos',
        data: data,
        method: 'PATCH',
        headers: {
            Authorization: 'Bearer ' + store.user.token 
        }


    })
}


module.exports = {
    create,
    index,
    deleteTodo,
    update
}