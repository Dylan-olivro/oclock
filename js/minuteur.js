const timerElement = document.getElementById("timer");
const up = document.getElementById("up");
const down = document.getElementById("down");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const number = document.getElementById("number");
const pause = document.getElementById("pause");

let departMinutes = 0;
let departSecondes = 0;
let temps = departMinutes * 60;
let interval;

timerElement.innerHTML = `<span id="minute" class="isActive">00</span>:<span id="seconde" class="isNotActive">00</span>`;

function minuteur() {
  let minutes = parseInt(temps / 60, 10);
  let secondes = parseInt(temps % 60, 10);
  // console.log(temps);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;
  timerElement.innerHTML = `<span id="minute">${minutes}</span>:<span id="seconde">${secondes}</span>`;

  if (temps <= 0) {
    temps = 0;
    departMinutes = 0;
    clearInterval(interval);
    alert("fin");
    timerElement.innerHTML = `<span id="minute" class="isActive">00</span>:<span id="seconde">00</span>`;
  } else {
    temps = temps - 1;
  }
  click();
}

function click() {
  document.getElementById("minute").addEventListener("click", () => {
    document.getElementById("minute").setAttribute("class", "isActive");
    document.getElementById("seconde").setAttribute("class", "isNotActive");
  });
  document.getElementById("seconde").addEventListener("click", () => {
    document.getElementById("seconde").setAttribute("class", "isActive");
    document.getElementById("minute").setAttribute("class", "isNotActive");
  });
}

up.addEventListener("click", () => {
  if (document.getElementById("minute").getAttribute("class") == "isActive") {
    departMinutes++;

    // AFFICHE LE TEMPS + AJOUTE LES 0 SI LE NOMBRE EST > A 9
    timerElement.innerHTML = `<span id="minute" class="isActive">${departMinutes
      .toString()
      .padStart(
        2,
        "0"
      )}</span>:<span id="seconde" class="isNotActive">${departSecondes
      .toString()
      .padStart(2, "0")}</span>`;

    temps = departMinutes * 60 + departSecondes;

    click();
  }

  if (document.getElementById("seconde").getAttribute("class") == "isActive") {
    if (departSecondes >= 60) {
      departMinutes++;
      departSecondes = 0;
    } else {
      departSecondes++;
    }

    // AFFICHE LE TEMPS + AJOUTE LES 0 SI LE NOMBRE EST > A 9
    timerElement.innerHTML = `<span id="minute" class="isNotActive">${departMinutes
      .toString()
      .padStart(
        2,
        "0"
      )}</span>:<span id="seconde" class="isActive">${departSecondes
      .toString()
      .padStart(2, "0")}</span>`;

    temps = departMinutes * 60 + departSecondes;

    click();
  }
});

down.addEventListener("click", () => {
  if (document.getElementById("minute").getAttribute("class") == "isActive") {
    if (departMinutes <= 0) {
      departMinutes = 0;
    } else {
      departMinutes--;
    }

    // AFFICHE LE TEMPS + AJOUTE LES 0 SI LE NOMBRE EST > A 9
    timerElement.innerHTML = `<span id="minute" class="isActive">${departMinutes
      .toString()
      .padStart(
        2,
        "0"
      )}</span>:<span id="seconde" class="isNotActive">${departSecondes
      .toString()
      .padStart(2, "0")}</span>`;

    temps = departMinutes * 60 + departSecondes;

    document.getElementById("seconde").addEventListener("click", () => {
      document.getElementById("seconde").setAttribute("class", "isActive");
      document.getElementById("minute").setAttribute("class", "isNotActive");
    });
  }

  if (document.getElementById("seconde").getAttribute("class") == "isActive") {
    if (departSecondes <= 0) {
      departSecondes = 0;
    } else {
      departSecondes--;
    }

    // AFFICHE LE TEMPS + AJOUTE LES 0 SI LE NOMBRE EST > A 9
    timerElement.innerHTML = `<span id="minute" class="isNotActive">${departMinutes
      .toString()
      .padStart(
        2,
        "0"
      )}</span>:<span id="seconde" class="isActive">${departSecondes
      .toString()
      .padStart(2, "0")}</span>`;

    temps = departMinutes * 60 + departSecondes;

    document.getElementById("minute").addEventListener("click", () => {
      document.getElementById("minute").setAttribute("class", "isActive");
      document.getElementById("seconde").setAttribute("class", "isNotActive");
    });
  }
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  departMinutes = 0;
  departSecondes = 0;
  temps = 0;
  number.value = "";
  timerElement.innerHTML = `<span id="minute" class="isActive">00</span>:<span id="seconde" class="isNotActive">00</span>`;

  click();
});

pause.addEventListener("click", () => {
  clearInterval(interval);
});

start.addEventListener("click", () => {
  if (number.value !== "" && number.value > 0) {
    // console.log(number.value);
    departMinutes = number.value;
    temps = departMinutes * 60;
    number.value = "";
  }
  if (parseInt(number.value, 10) <= 0) {
    alert("Veuillez rentrez un nombre supérieur à 0");
  } else if (timerElement == "00:00") {
    console.log("test");
    alert("valeur 0");
  } else {
    console.log("test2");
    console.log(document.getElementById("minute").textContent);
    clearInterval(interval);
    interval = setInterval(minuteur, 1000);
  }
});

click();
