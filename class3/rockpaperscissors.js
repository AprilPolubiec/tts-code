const hands = ['rock', 'paper', 'scissors'];

function getHand(hands) {
  return hands[parseInt(Math.random() * 10) % 3];
}

var player_1 = {
  name: 'Anthony',
  hand: getHand(hands)
}

// var player_2 = {
//   name: 'April',
//   getHand: getHand
// }

console.log(player_1.hand)
console.log(player_1.hand)
console.log(player_1.hand)


var playRound = function(player1, player2){
  var player1_hand = player1.getHand(hands);
  var player2_hand = player2.getHand(hands);
  var winner = null;
  switch(player1_hand){
    case 'rock':
      if (player2_hand === 'scissors'){
        winner = player1;
      } else if (player2_hand === 'paper'){
        winner = player2;
      }
    break;
    case 'paper':
      if (player2_hand === 'rock'){
        winner = player1;
      } else if (player2_hand === 'scissors'){
        winner = player2;
      }
      break;
    case 'scissors':
      if (player2_hand === 'paper'){
        winner = player1;
      } else if (player2_hand === 'rock'){
        winner = player2;
      }
      break;
  }
  console.log(`${player1.name}: ${player1_hand}\n${player2.name}: ${player2_hand}`);
  if(winner){
    console.log(`Winner: ${winner.name}`);
  } else {
    console.log(`It's a tie!`);
  }
  return winner;
}


var playGame = function(player1, player2, playUntil){
    var player1_wins = 0;
    var player2_wins = 0;
    while(player1_wins < playUntil && player2_wins < playUntil){
      var winner = playRound(player1, player2);
      if (winner.name === 'Anthony'){
        player1_wins += 1;
      } else if (winner.name === 'April'){
        player2_wins += 1;
      }
    }
    if (player1_wins > player2_wins){
      return player1;
    } else {
      return player2;
    }
}

// playGame(player_1, player_2, 5)