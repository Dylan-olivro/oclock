const time = document.getElementById("time");

function Start() {
  let today = new Date();
  let hours = check(today.getHours());
  let minutes = check(today.getMinutes());
  let secondes = check(today.getSeconds());

  time.innerHTML = hours + ":" + minutes + ":" + secondes;

  let reload = setTimeout(Start, 1000);
}

function check(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

Start();
