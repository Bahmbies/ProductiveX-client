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

const index = (data) => {
    return $.ajax({
       url: config.apiUrl + '/todos',
       method: 'GET',
       headers: {
           Authorization: 'Bearer ' + store.user.token
       },
       data: data
    })
}

module.exports = {
    create,
    index
}