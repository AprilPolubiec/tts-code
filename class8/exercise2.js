var ulEl = document.querySelector('ul')
var liEls = {}
Array.from(ulEl.children).forEach(function (el) {
  liEls[el.innerText.toLowerCase()] = el
})

liEls.coffee.innerText = 'Fair Trade Coffee'
liEls.twinkies.remove()

var cheeseWhizLi = document.createElement('li')
cheeseWhizLi.innerText = 'Cheese Whiz'
liEls[cheeseWhizLi.innerText] = cheeseWhizLi
ulEl.appendChild(cheeseWhizLi)

Object.values(liEls).forEach(function (el) {
  el.remove()
})

var newList = ['protein powder', 'muscle milk', 'power bars']

newList.forEach(function(item){
  var newLi = document.createElement('li')
  newLi.innerText = item
  liEls[newLi.innerText] = newLi
  ulEl.appendChild(newLi)
})

liEls['muscle milk'].className = 'important'
