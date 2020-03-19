var shopping_list = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee']
// console.log(shopping_list)

shopping_list.push('fruit loops')
// console.log(shopping_list)

shopping_list.forEach(function(item, index) {
  switch (item) {
    case 'coffee':
      shopping_list[index] = 'fair trade coffee'
      break
    case 'chips':
      shopping_list[index] = 'rice'
      break
    case 'salsa':
      shopping_list[index] = 'beans'
  }
})

// console.log(shopping_list)

var cart = []
cart.push(shopping_list.pop())
// console.log(cart)

cart.push(shopping_list.shift())
// console.log(cart)

while(shopping_list.length > 0) {
  cart.push(shopping_list.pop())
}

cart.reverse(cart.sort())
// console.log(cart)

console.log(cart.toString())