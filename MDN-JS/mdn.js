

let randonNumber = Math.floor(Math.random() * 100) +1  ;

const guesses = document.getElementById('gueses')
const lastResult = document.getElementById ('lastResult')
const lowOrHi = document.getElementById('lowOrHigt')

const guessField = document.getElementById('guessField')
const guessSubmit = document.getElementById('guessSubmit')

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Intentos anteriores: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randonNumber) {
    lastResult.textContent = '¡Felicidades! ¡Lo adivinaste!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!Fin del juego!!!';
    setGameOver();
  } else {
    lastResult.textContent = '¡Incorrecto!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randonNumber) {
      lowOrHi.textContent = '¡El número es muy bajo!';
    } else if(userGuess > randonNumber) {
      lowOrHi.textContent = '¡El número es muy grande!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Iniciar nuevo juego';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.focus();

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
