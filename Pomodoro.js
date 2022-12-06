const secondsArea = document.querySelector(".seconds")
const minutesArea = document.querySelector(".minutes")
const messageArea = document.querySelector(".message")


var userMinutes = 0;
var seconds = 0;
var minutes = userMinutes;
var isPaused = false;
var isStopped = false;


function startCount() {
    let secondsTimer = setInterval(secondsCount, 1000);     //Set interval timer
    minutes = userMinutes;

    function secondsCount() {

        if (seconds == 0) {     //Minute counter
            seconds = 60;
            minutes--;

            if (minutes < 0) {  //Break time when time is up
                breakTime();
            }

        }

        seconds--;  //Count down seconds

        secondsArea.innerText = seconds;
        minutesArea.innerText = minutes;

        if (isStopped) {    //Stop timer, reset text fields
            clearInterval(secondsTimer);
            isStopped = !isStopped;
            seconds = 0;
            secondsArea.innerText = "";
            minutesArea.innerText = "";
            messageArea.innerText = "";
        }

    }
}

function breakTime() {  //Change timer to 5 minutes for break
    isPaused = !isPaused;

    if (isPaused) {
        messageArea.innerText = "Take a break!"
        seconds = 60;
        minutes = 4;
    } else {
        messageArea.innerText = "Keep on working!"  //Reset timer after break
        seconds = 5;
        minutes = userMinutes;
        
import "./styles.css";

// Select Countdown container
const countContainer = document.getElementById("countdown-number");

// Select action buttons
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Select timeout Audio element
const timeoutAudio = document.getElementById("timeout_audio");

// variable to store count
var remainingTime = 30;

// variable to store time interval
var timer;

// Variable to track whether timer is running or not
var isStopped = true;

// Function to start Timer
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    countContainer.innerHTML = remainingTime;
    timer = setInterval(renderTime, 1000);
  }
};

// Function to stop Timer
const stopTimer = () => {
  isStopped = true;
  if (timer) {
    clearInterval(timer);
  }
};

// Function to reset Timer
const resetTimer = () => {
  isStopped = true;
  clearInterval(timer);
  remainingTime = 60;
  countContainer.innerHTML = remainingTime;
};

// Initialize timeout sound
timeoutAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
timeoutAudio.load();

// Attach onclick event to buttons
startButton.onclick = startTimer;
resetButton.onclick = resetTimer;
stopButton.onclick = stopTimer;

// function to display time
const renderTime = () => {
  // decement time
  remainingTime -= 1;
  // render count on the screen
  countContainer.innerHTML = remainingTime;
  // timeout on zero
  if (remainingTime === 0) {
    isStopped = true;
    clearInterval(timer);
    // Play audio on timeout
    timeoutAudio.play();
    remainingTime = 60;
  }
};
        
     
        
    }
}
