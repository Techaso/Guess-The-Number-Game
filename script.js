// Variable to store the list of guesses 
let guesses  = [];

// Variable for store the correct random number 
let correctNumber = getRandomNumber();
console.log(correctNumber);

window.onload = function() {
    // calling playGame() function when user is clicking on 'Check' button or pressing ENTER button
    let input = document.getElementById("number-guess");
      input.addEventListener("keyup", function(event) {
        if (event.key == 'Enter' && input.value != ""){
          playGame();
        }
     });

    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}

/**
 * Return a random number between 1 and 100
 */

 function getRandomNumber(){
  let correctNumber = Math.ceil(100*Math.random());
  return correctNumber;

}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  var numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

/**
 * Initialize a new game by resetting all values and content on the page
 */
 function initGame(){
  // Reset correctNumber
  correctNumber = getRandomNumber();
  console.log(correctNumber);

  // Reset guesses
  guesses = [];

  // Reset the input field
  document.getElementById("number-guess").value = null;

  // Reset guess Result
  document.getElementById("result").innerHTML = "";
  
  // Reset guesses History view/dialog boxes
  document.getElementById("history").innerHTML = ""; // OR displayHistory(); as there are no values in guesses array, for loop won' run and won't show any list item

}

/**
 * Save guess history 
 */
 function saveGuessHistory(numberGuess) {
  guesses.push(numberGuess);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * Using while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  
  let list = "<ul class='list-group'>";
  
  for(let index=guesses.length-1; index>=0;index--){
    list+="<li class='list-group-item'> You guessed "+ guesses[index] +"</li>";
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

/**
 * Show the result for if the guess it too high, too low, or correct
 */

function displayResult(numberGuess){
  if(numberGuess == correctNumber){
    console.log('is correct');
    showYouWon();
  }
  else if(numberGuess < correctNumber){
    console.log('too low');
    showNumberBelow();
  }
  else{
    console.log('too high');
    showNumberAbove();
  }
}


/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  let dialog = getDialog("won",text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  let dialog = getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  let dialog = getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
}

