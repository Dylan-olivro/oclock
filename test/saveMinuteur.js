const timerElement = document.getElementById("timer");
const up = document.getElementById("up");
const down = document.getElementById("down");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const number = document.getElementById("number");
const pause = document.getElementById("pause");

let departMinutes = 0;
let temps = departMinutes * 60;
let interval;

timerElement.innerText = "00:00";

function minuteur() {
  let minutes = parseInt(temps / 60, 10);
  let secondes = parseInt(temps % 60, 10);
  // console.log(temps);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;
  timerElement.innerText = `${minutes}:${secondes}`;

  if (temps <= 0) {
    temps = 0;
    departMinutes = 0;
    clearInterval(interval);
    alert("fin");
  } else {
    temps = temps - 1;
  }
}

up.addEventListener("click", () => {
  departMinutes++;
  if (departMinutes >= 10) {
    timerElement.innerText = departMinutes + ":00";
  } else {
    timerElement.innerText = "0" + departMinutes + ":00";
  }
  temps = departMinutes * 60;
});

down.addEventListener("click", () => {
  departMinutes--;

  if (departMinutes >= 10) {
    timerElement.innerText = departMinutes + ":00";
  } else if (departMinutes < 0) {
    departMinutes = 0;
  } else {
    timerElement.innerText = "0" + departMinutes + ":00";
  }

  temps = departMinutes * 60;
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  departMinutes = 0;
  temps = 0;
  number.value = "";
  timerElement.innerText = "0" + departMinutes + ":00";
});

pause.addEventListener("click", () => {
  clearInterval(interval);
});

start.addEventListener("click", () => {
  if (number.value !== "") {
    departMinutes = number.value;
    temps = departMinutes * 60;
    number.value = "";
  }
  clearInterval(interval);
  interval = setInterval(minuteur, 1000);
});
