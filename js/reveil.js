const alarms = [];

function setAlarm() {
  const inputTime = document.getElementById("alarm-time").value;
  const inputDay = document.getElementById("alarm-day").value;
  let inputMessage = document.getElementById("alarm-message").value; // Récupérer le message de l'alarme
  const alarmTime = new Date(inputDay + " " + inputTime);

  if (inputTime == "") {
    alert("Veuillez indiquer une heure");
  } else if (inputDay == "") {
    alert("Veuillez indiquer une date");
  } else {
    const alarm = {
      time: alarmTime,
      message: inputMessage, // Ajouter le message à l'objet alarme
      isPassed: false,
      timeRemaining: "",
    };

    alarms.push(alarm);

    updateAlarmsList();
  }

  setInterval(updateTimeRemaining, 1000);
}

function updateAlarmsList() {
  const upcomingAlarmsList = document.getElementById("upcoming-alarms-list");
  const passedAlarmsList = document.getElementById("passed-alarms-list");

  upcomingAlarmsList.innerHTML = "";
  passedAlarmsList.innerHTML = "";

  alarms.sort((a, b) => a.time - b.time);

  alarms.forEach((alarm) => {
    const alarmItem = document.createElement("li");
    const alarmTime = alarm.time.toLocaleString();
    let alarmText = `Alarme pour ${alarmTime}`;

    if (alarm.isPassed) {
      alarmItem.classList.add("passed");
      alarmText += " (expirée)";
    } else if (alarm.timeRemaining) {
      alarmText += ` (${alarm.timeRemaining})`;
    }

    alarmItem.innerText = alarmText;

    if (alarm.isPassed) {
      passedAlarmsList.appendChild(alarmItem);
    } else {
      upcomingAlarmsList.appendChild(alarmItem);
    }
  });
}

function updateTimeRemaining() {
  alarms.forEach((alarm) => {
    const now = new Date();
    const timeDiff = alarm.time - now;

    if (timeDiff < 0 && !alarm.isPassed) {
      alarm.isPassed = true;
      alert(alarm.message); // Afficher une alerte avec le message de l'alarme lorsque l'alarme est déclenchée
    }

    if (!alarm.isPassed) {
      const totalSecondsRemaining = Math.floor(timeDiff / 1000);
      const daysRemaining = Math.floor(totalSecondsRemaining / (3600 * 24));
      const hoursRemaining = Math.floor(
        (totalSecondsRemaining % (3600 * 24)) / 3600
      );
      const minutesRemaining = Math.floor((totalSecondsRemaining % 3600) / 60);
      const secondsRemaining = Math.floor(totalSecondsRemaining % 60);
      alarm.timeRemaining = `${daysRemaining}j ${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s`;
    }
  });

  // Mettre à jour les alarmes sur la page
  updateAlarmsList();
}
