var players = [
  { firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32 },
  { firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0 },
  { firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12 },
  { firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8 },
  { firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3 },
  { firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9 },
  { firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2 }
]

var mike = players.filter(function(player){
  return player.firstName === 'Mike'
})
console.log(mike)

var RBs = players.filter(function(player){
  return player.position === 'RB'
})
console.log(RBs)

var lastNames = players.map(function(player){
  return player.lastName
})

console.log(lastNames)

var RBsWithMoreThanFive = RBs.filter(function(player) {
  return player.touchdowns > 5
}).map(function(player){
  return player.firstName + ' ' + player.lastName
})

console.log(RBsWithMoreThanFive)
// console.log(RBs)

var numRBTouchdowns = RBs.reduce(function(sum, current){
  return sum + current.touchdowns
}, 0)

console.log(numRBTouchdowns)