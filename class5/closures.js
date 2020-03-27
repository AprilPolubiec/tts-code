function add(number1, number2){
  return number1 + number2
}

function multiply(number1, number2){
  return number1 * number2
}

function doMath(operation1, operation2, number1, number2){
  var op1 = operation1(number1, number2)
  return operation2(op1, number2)
}

// var sum = doMath(add, 1, 2)
// console.log(sum)

var product = doMath(add, multiply, 1, 2)
console.log(product)