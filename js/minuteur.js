const timerElement = document.getElementById("timer");
const up = document.getElementById("up");
const down = document.getElementById("down");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const number = document.getElementById("number");
const pause = document.getElementById("pause");

let departMinutes = 0;
let temps = departMinutes * 60;
let interval = null;

function minuteur() {
  let minutes = parseInt(temps / 60, 10);
  let secondes = parseInt(temps % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;
  timerElement.innerText = `${minutes}:${secondes}`;

  if (temps <= 0) {
    clearInterval(interval);
    alert("Fin du compte à rebours !");
  } else {
    temps--;
  }
}

up.addEventListener("click", () => {
  departMinutes++;
  updateTimer();
});
down.addEventListener("click", () => {
  if (departMinutes > 0) {
    departMinutes--;
    updateTimer();
  }
});
reset.addEventListener("click", () => {
  clearInterval(interval);
  departMinutes = 0;
  temps = 0;
  updateTimer();
});
pause.addEventListener("click", () => {
  clearInterval(interval);
});

start.addEventListener("click", () => {
  if (!interval) {
    if (number.value !== "") {
      departMinutes = parseInt(number.value, 10);
    }
    temps = departMinutes * 60;
    interval = setInterval(minuteur, 1000);
  }
});

function updateTimer() {
  let minutes = departMinutes < 10 ? "0" + departMinutes : departMinutes;
  timerElement.innerText = `${minutes}:00`;
  temps = departMinutes * 60;
  clearInterval(interval);
  interval = null;
}

updateTimer();
