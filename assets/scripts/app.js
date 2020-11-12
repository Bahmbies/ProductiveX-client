'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')
const todoEvents = require('./todos/events')


$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('click', events.onSignOut)
  $('#password-change').on('submit', events.onPasswordChange)
  $('#productive-landing').on('submit', todoEvents.onCreateTodo)
  $('#productive-landing').hide()
  $('#password-change').hide()
  $('#sign-out').hide()
  $('#container').hide()
  $('#productive-landing').on('submit', todoEvents.onIndexTodo)
  $('#update-form').on('submit', todoEvents.onUpdateTodo)
 // $('#delete-btn').on('submit', todoEvents.onDeleteTodo)
  $('body').on('click', '#todo-delete', todoEvents.onDeleteTodo)
})
