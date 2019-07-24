var wordList = ["plain", "valid", "card", "landowner", "visit", "temple", "reduction", "feminine", "attachment", "capital", "publication", "jury", "silence", "cover", "leaflet", "layer", "margin", "science", "wind", "posture"]
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var answerArray = []
var guessed = []
var guessesLeft = 6
var wins = 0
var secretWord = ""


initializeGame();

// on key event
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("KEY PRESSED", userGuess)
    var isCorrect = false;
    if ((letters.indexOf(userGuess) > -1) && guessed.indexOf(userGuess) === -1 && (guessesLeft > 0)) {
        for (var j = 0; j < secretWord.length; j++) {
            if (secretWord[j] === userGuess) {
                console.log(`${userGuess} correct for position ${j}`)
                answerArray[j] = userGuess;
                isCorrect = true;
            }
        }
        console.log("Letter was in word", isCorrect)
        if (!isCorrect) {
            console.log("isCorrect = " + isCorrect)
            guessed.push(userGuess)
            document.getElementById("guessed").innerHTML = guessed;
            guessesLeft--;
            document.getElementById("guesses-left").innerHTML = guessesLeft;
        }

        document.getElementById("word").innerHTML = answerArray;

        if (guessesLeft === 0) {
            alert("You Lose! Try again :)");
            initializeGame();
        }

        if (secretWord === answerArray.join("")){
            alert("You Win!");
            wins++
            document.getElementById("wins").innerHTML = wins;
            initializeGame();
        }

    } else {
        alert("Please enter a valid letter")
    }


}

function initializeGame() {
    secretWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(secretWord)
    answerArray = [];
    guessed = [];
    guessesLeft = 6;

    for (var i = 0; i < secretWord.length; i++) {
        answerArray[i] = (" _ ");
    }

    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("guessed").innerHTML = guessed;
    document.getElementById("word").innerHTML = answerArray;
}


