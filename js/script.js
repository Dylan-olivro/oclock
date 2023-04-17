const timerElement = document.getElementById("timer");
const up = document.getElementById("up");
const down = document.getElementById("down");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const number = document.getElementById("number");
const pause = document.getElementById("pause");

let departMinutes = 0;
let temps = departMinutes * 60;
let a = true;
let interval;
// let fin = false;

function minuteur() {
  let minutes = parseInt(temps / 60, 10);
  let secondes = parseInt(temps % 60, 10);

  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  //   secondes = secondes < 10 ? "0" + secondes : secondes;
  if (secondes < 10) {
    secondes = "0" + secondes;
  }
  timerElement.innerText = `${minutes}:${secondes}`;
  //   temps = temps <= 0 ? 0 : temps - 1;
  if (temps <= 0) {
    temps = 0;
    // alert("fin");
  } else {
    temps = temps - 1;
  }
}

timerElement.innerText = "00:00";

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
  // departMinutes = 0;
  // timerElement.innerText = "0" + departMinutes + ":00";
  // temps = 0;
  window.location.reload();
});
pause.addEventListener("click", () => {
  clearInterval(interval);
});

start.addEventListener("click", () => {
  console.log(number.value);
  console.log(departMinutes);
  if (number.value !== "") {
    departMinutes = number.value;
  }
  temps = departMinutes * 60;
  console.log(departMinutes);
  // if (a) {
  interval = setInterval(minuteur, 1000);
  // remettre 1000

  // console.log(a);
  // a = false;
  // console.log(a);
  // }
});
