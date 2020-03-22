var player_1 = {
  name: 'Anthony',
  wins: 0
};

var player_2 = {
  name: 'April',
  wins: 0
};

var rounds = 0

function getHand() {
  const hands = ['rock', 'paper', 'scissors'];
  return hands[parseInt(Math.random() * 10) % 3];
}

function playRound(p1, p2){
  rounds += 1
  console.log(`--------------ROUND ${rounds}--------------`)
  var p1_hand = getHand()
  var p2_hand = getHand()
  var winner = {}
  console.log(`${p1.name} played...\t${p2.name} played...\n${p1_hand.toUpperCase().padEnd(20)}\t${p2_hand.toUpperCase()}`)
  switch(p1_hand){
    case 'rock':
      if (p2_hand === 'scissors'){
        p1.wins += 1;
        winner = p1;
      } else if (p2_hand === 'paper'){
        p2.wins += 1;
        winner = p2;
      }
    break;
    case 'paper':
      if (p2_hand === 'rock'){
        p1.wins += 1;
        winner = p1;
      } else if (p2_hand === 'scissors'){
        p2.wins += 1;
        winner = p2;
      }
      break;
    case 'scissors':
      if (p2_hand === 'paper'){
        p1.wins += 1;
        winner = p1;
      } else if (p2_hand === 'rock'){
        p2.wins += 1;
        winner = p2;
      }
      break;
 }
 if(p1_hand === p2_hand){
  console.log(`It's a tie!`.padStart(25));
 } else {
  console.log(`Winner: ${winner.name}`.padStart(25));
 }
}

function displayScoreboard(p1, p2){
  console.log(`==========SCOREBOARD===========`)
  console.log(`\t${p1.name.padEnd(9)}${p2.name}`)
  console.log(`\t _____\t _____`)
  console.log(`\t|     |\t|     |`)
  console.log(`\t| ${p1.wins.toString().padStart(2)}  |\t| ${p2.wins.toString().padStart(2)}  |`)
  console.log(`\t|     |\t|     |`)
  console.log(`\t -----\t -----`)

}

function playGame(p1, p2, playUntil){
  while(p1.wins < playUntil && p2.wins < playUntil){
    playRound(p1, p2);
    displayScoreboard(p1, p2)
  }
}

playGame(player_1, player_2, 5)