const tour = document.getElementById("tour");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timerDisplay");
let interval;
let isPaused = true;

document.getElementById("startTimer").addEventListener("click", () => {
  if (isPaused == true) {
    interval = setInterval(displayTimer, 10);
    isPaused = false;
  } else {
    clearInterval(interval);
    isPaused = true;
  }
});

document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(interval);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000 ";
  isPaused = true;
  tour.innerHTML = "";
});

document.getElementById("tourTimer").addEventListener("click", () => {
  // DOUBLON >>>
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;
  // <<<<<<<<<

  const p = document.createElement("p");
  p.innerText = ` ${h} : ${m} : ${s} : ${ms}`;
  tour.appendChild(p);
});

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

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
