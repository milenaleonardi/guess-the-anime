// variables to store anime titles
let animes = ["demon slayer", "bleach", "one piece", "dragon ball", "naruto"];
// number of guesses
let guesses = 0;
// variable to store the correct answer (index of the array of animes)
let answer = 0;

function init() {
  // variable initialization
  guesses = 0;
  answer = 0;

  // sort anime titles alphabetically
  animes.sort();

  // choose a random anime
  answer = Math.floor(Math.random() * animes.length);

  // print the answer in the console (for testing)
  console.log(animes[answer]);
}

function guess() {
  const value = document.getElementById("answer").value.trim().toLowerCase();
  guesses++;

  const feedback = checkInput(value);
  document.getElementById("feedback").innerHTML = feedback;

  // Clear input after each guess
  document.getElementById("answer").value = "";
}

function checkInput(value) {
  // message to be returned
  let returnMessage = "Sorry, I don't recognize your answer";

  // find if the guessed anime is in the list
  const index = animes.indexOf(value);

  if (index !== -1) {
    // guess is correct
    if (index === answer) {
      returnMessage = `You guessed it right! It took you ${guesses} guesses to finish the game.`;
      document.body.style.backgroundColor = "lightgreen";
      document.getElementById("answer").disabled = true;
    } else {
      // give feedback whether the guess is higher or lower
      returnMessage = `Sorry, your guess is not correct. Your answer is too ${
        index < answer ? "low" : "high"
      } on the list.`;
    }
  }

  return returnMessage;
}

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      // Toggle the active class on click
      this.classList.toggle("active");

      // Remove active class from other boxes
      boxes.forEach((otherBox) => {
        if (otherBox !== this) {
          otherBox.classList.remove("active");
        }
      });
    });
  });
});
