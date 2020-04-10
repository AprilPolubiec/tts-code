//TODO: add a check mark when completed

var todos = document.querySelector('ul#todos')
var input = document.getElementById('add-todo')
var button = document.getElementById('add-btn')
input.focus()
input.select()

function addNewTodo() {
  var newLi = document.createElement('li')
  var value = input.value
  var checkbox = document.createElement('div')
  checkbox.className = 'checkbox'
  newLi.innerText = value
  newLi.prepend(checkbox)
  todos.appendChild(newLi)
  input.value = ''
  newLi.addEventListener('click', function (e) {
    checkbox.innerText = 'X'
    setTimeout(function () {
      newLi.remove()
      newLi.removeEventListener('click', this)
    }, 5000)
  })
}

button.addEventListener('click', function (e) {
  addNewTodo()
})

input.addEventListener('keyup', function (e) {
  if (event.keyCode === 13) {
    button.click()
  }
})
