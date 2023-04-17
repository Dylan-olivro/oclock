const expiredAlarm = document.getElementById("expiredAlarm");
const newAlarm = document.getElementById("newAlarm");
const time = document.getElementById("time");

function currentHour() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  let currentHours = h + ":" + m + ":" + s;
  time.innerHTML = currentHours;
  return currentHours;
}

function updateDisplay(data) {
  expiredAlarm.innerHTML = "";
  newAlarm.innerHTML = "";
  data.forEach((element) => {
    let isExpired = document.createElement("p");
    let isNew = document.createElement("p");

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
      isExpired.innerHTML = `${element.reveil} Expired <form method="post" class="deleteForm"><button type="submit" name="${element.id}"><i class="fa-solid fa-trash"></i></button></form>`;
      expiredAlarm.appendChild(isExpired);
    } else {
      isNew.innerText = `${element.reveil} Alarme dans ${H}h${M}m${S}s`;
      newAlarm.appendChild(isNew);
    }
  });
}

setInterval(() => {
  currentHour();
  fetch("alarme.php")
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => (a.reveil > b.reveil ? 1 : -1));
      updateDisplay(data);
    })
    .catch((error) => console.log(error));
}, 500);
