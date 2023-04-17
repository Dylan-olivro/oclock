const tour = document.getElementById("tour");
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timerDisplay");
let interval;
let isPaused = true;

function startTimer() {
  if (isPaused) {
    interval = setInterval(displayTimer, 10);
    isPaused = false;
  } else {
    clearInterval(interval);
    isPaused = true;
  }
}

function resetTimer() {
  clearInterval(interval);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000 ";
  isPaused = true;
  tour.innerHTML = "";
}

function addTour() {
  const p = document.createElement("p");
  let h = hours.toString().padStart(2, "0");
  let m = minutes.toString().padStart(2, "0");
  let s = seconds.toString().padStart(2, "0");
  let ms = milliseconds.toString().padStart(3, "0");
  p.innerText = `${h} : ${m} : ${s} : ${ms}`;
  tour.appendChild(p);
}

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours.toString().padStart(2, "0");
  let m = minutes.toString().padStart(2, "0");
  let s = seconds.toString().padStart(2, "0");
  let ms = milliseconds.toString().padStart(3, "0");
  timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById("startTimer").addEventListener("click", startTimer);
document.getElementById("resetTimer").addEventListener("click", resetTimer);
document.getElementById("tourTimer").addEventListener("click", addTour);
