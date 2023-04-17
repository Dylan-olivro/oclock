const alarme = document.getElementById("alarme");
const text = document.getElementById("text");
const alarmeFini = document.getElementById("alarmeFini");
const alarmeAVenir = document.getElementById("alarmeAVenir");
const time = document.getElementById("time");

const resultat = document.getElementById("resultat");

function currentHour() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  let reload = setTimeout(currentHour, 1000);
  let actuel = h + ":" + m + ":" + s;
  time.innerHTML = actuel;
  // console.log(actuel);
  return actuel;
}

currentHour();

function updateDisplay(data) {
  let result = data.filter((element) => {
    let f = document.createElement("p");
    let a = document.createElement("p");
    alarmeFini.append(f);
    alarmeAVenir.append(a);

    // Define two time strings
    const time1 = currentHour();
    const time2 = element.reveil;

    // Convert time strings to Date objects
    const date1 = new Date(`2000-01-01T${time1}`);
    const date2 = new Date(`2000-01-01T${time2}`);

    // Calculate time difference in milliseconds
    const timeDiffMs = Math.abs(date2 - date1);

    // Convert time difference from milliseconds to seconds
    const timeDiffSecs = timeDiffMs / 1000;

    // Convert time difference from seconds to hours, minutes, and seconds
    const timeDiffHrs = Math.floor(timeDiffSecs / 3600);
    const timeDiffMins = Math.floor((timeDiffSecs % 3600) / 60);
    const timeDiffSecsRem = Math.round(timeDiffSecs % 60);
    const H = timeDiffHrs < 10 ? "0" + timeDiffHrs : timeDiffHrs;
    const M = timeDiffMins < 10 ? "0" + timeDiffMins : timeDiffMins;
    const S = timeDiffSecsRem < 10 ? "0" + timeDiffSecsRem : timeDiffSecsRem;

    if (element.reveil == currentHour()) {
      alert(element.message);
    }

    if (element.reveil < currentHour()) {
      f.innerText = element.reveil + " Passé";
    } else {
      a.innerText = element.reveil + ` Alarme dans ${H}h${M}m${S}s`;
    }
    // let m = parseInt(element.reveil) - parseInt(currentHour());
    // console.log(element.reveil);
    return element;
  });
}

fetch("alarme.php")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.sort((a, b) => (a.reveil > b.reveil ? 1 : -1));

    updateDisplay(data);
    setInterval(() => {
      alarmeFini.innerHTML = "";
      alarmeAVenir.innerHTML = "";
      updateDisplay(data);
    }, 1000);
  })
  .catch((error) => {
    console.log(error);
  });
