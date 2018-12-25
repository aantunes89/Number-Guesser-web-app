/*
GAME FUNCTION:
- Player must guess a number between a min and a max
- Player gets a certain amount of guesses
- Notiify player of gess remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1 //prompt('Type a number', 1),
    max = 10 //prompt('Type a number', 10),
    winningNum = getRandomNum(min, max), //Math.round(Math.random() * max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
    
// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
})

// Listen or guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  console.log(guess);
  
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum) {
    // Game Over - won :
    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
    guessesLeft -= 1;
    console.log(guessesLeft);

    if(guessesLeft === 0) {
      // Game Over - lost :
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
      
    } else {
      // Game continues - answer wrong:      
      // 1 - Change border color
      guessInput.style.borderColor = 'red';      
      // 2 - Clear input
      guessInput.value = '';
      //3 - Tell user it's the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left `, 'red');
      
    }
  }
})

// Game Over
function gameOver (won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  // 1 - Disable input
  guessInput.disabled = true;
  // 2 - Change border color
  guessInput.style.borderColor = color;
  // 3 - Set messsage
  setMessage(msg, color);

  // Play again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)+ min);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}




// function playAgain() {
//   guessesLeft = 3;
//   guessInput.disabled = false;
//   message.textContent = '';
// }



// } else if(guessesLeft <= 1){
//   setMessage(`YOU LOSE!`, 'red');
//   guessInput.disabled = true;
//   guessBtn.value = 'Play Again';
//   guessBtn.addEventListener('click', playAgain);
//   guessInput.value = '';
//   guessInput.placeholder = '';
// } else {
//   setMessage(`Wrong number, try again!`, 'red');
//   guessesLeft -= 1;
//   console.log(guessesLeft);
//   guessInput.value = '';
// }

// guessInput.value = '';