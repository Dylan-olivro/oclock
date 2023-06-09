const time = document.getElementById("time");

setInterval(() => {
  let today = new Date();
  let hours = check(today.getHours());
  let minutes = check(today.getMinutes());
  let seconds = check(today.getSeconds());

  time.innerHTML = `<span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span>`;
}, 100);

function check(i) {
  return i < 10 ? `0${i}` : i;
}
