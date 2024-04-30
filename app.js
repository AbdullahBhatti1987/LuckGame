var userNumber = document.getElementById("userNumber");
var randomNumber = document.getElementById("randoNumber");
var totalLoss = document.getElementById("totalLoss");
var userTurn = document.getElementById("userTurn");
var userStatus = document.getElementById("userStatus");
var totalWin = document.getElementById("totalWin");

var gameOver = document.getElementById('gameover');
var winner = document.getElementById('winner');

userTurn.innerText = 10;

function userInput(userDefine) {
  var diceNumber = Math.random() * 6;
  diceNumber = Math.ceil(diceNumber);
  randomNumber.innerText = diceNumber;

  userNumber.innerText = userDefine;

  userTurn.innerText = --userTurn.innerText;
  console.log(userTurn.innerText);

  if (randomNumber.innerText == userNumber.innerText) {
    userStatus.style.backgroundColor = "green";
    totalWin.innerText = ++totalWin.innerText;
  } else {
    userStatus.style.backgroundColor = "red";
    totalLoss.innerText = ++totalLoss.innerText;
  }
  if (totalWin.innerText == 3) {
    winner.style.display = 'flex';
    reset();
  }
  else if (userTurn.innerText == -1) {
    gameOver.style.display = 'flex';
    
  reset();
  }
    function reset(){
      userTurn.innerText = 10;
      totalWin.innerText = 0;
      totalLoss.innerText = 0;
      userNumber.innerText = "";
      randomNumber.innerText = "";
      userStatus.style.backgroundColor = "";
  }
}



