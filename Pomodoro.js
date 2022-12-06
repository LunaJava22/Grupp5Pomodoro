const secondsArea = document.querySelector(".seconds")
const minutesArea = document.querySelector(".minutes")

var seconds = 15;
var minutes = 19;

let secondsTimer = setInterval(secondsCount, 1000);

function secondsCount() {
    
    if (seconds == 0) {
        seconds = 60;
        minutes--;
    }

    seconds--;

    secondsArea.innerText = seconds;
    minutesArea.innerText = minutes;
    
    var mixBut = document.getElementById("mixBut");

mixBut.addEventListener("click", Start);

function Start(){
    console.log("Started");
    mixBut.removeEventListener("click", Start);
    mixBut.addEventListener("click", Stop);
    mixBut.value = "Stop";
}

function Stop(){
    console.log("Stopped");
    mixBut.removeEventListener("click", Stop);
    mixBut.addEventListener("click", Start);
    mixBut.value = "Start";
}
    
<button id="start">start</button>
<button id="stop">stop</button>
    let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
    start.addEventListener('click', function() {
	let i = 0;
	
	let timerId = setInterval(function() {
		console.log('!')
	}, 1000);
});
    start.addEventListener('click', function() {
	let i = 0;
	
	let timerId = setInterval(function() {
		console.log('!')
	}, 1000);
});

// Stopping the timer:
stop.addEventListener('click', function() {
	clearInterval(timerId);
});

