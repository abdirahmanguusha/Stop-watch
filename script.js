const clock = document.querySelector(".clock-wrapper h4");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let intervalId;

// Function to start the clock
function start() {
  startBtn.disabled = true;
  intervalId = setInterval(() => {
    millisecond++;
    if (millisecond === 100) {
      millisecond = 0;
      second++;
      if (second === 60) {
        second = 0;
        minute++;
        if (minute === 60) {
          minute = 0;
          hour++;
        }
      }
    }
    updateClockDisplay();
  }, 10);
}

// Stops the clock
function stop() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}

// Resets the clock
function reset() {
  clearInterval(intervalId);
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  updateClockDisplay();
  startBtn.disabled = false;
}

// Updates the clock display
function updateClockDisplay() {
  clock.textContent = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(
    second
  )}:${formatTime(millisecond)}`;
}

// Formats time values to always display two digits
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Event listener for start button
startBtn.addEventListener("click", start);

// Event listener for stop button
stopBtn.addEventListener("click", stop);

// Event listener for reset button
resetBtn.addEventListener("click", reset);
