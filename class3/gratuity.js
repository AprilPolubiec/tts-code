var billAmount = Math.random() * 101;
console.log('subtotal: ', billAmount.toFixed(2));
function gratuity(amount) {
  return amount * 0.2;
}

function totalWithGrat(amount) {
  return amount + gratuity(amount);
}

console.log(
  'your total including gratuity is: ',
  totalWithGrat(billAmount).toFixed(2)
);
