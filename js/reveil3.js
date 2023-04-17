// tableau pour stocker les alarmes enregistrées
let alarms = [];

function setAlarm() {
  const alarmTime = document.getElementById("time").value;
  const now = new Date();
  const alarm = new Date(now.toDateString() + " " + alarmTime);

  if (alarm < now) {
    alarm.setDate(alarm.getDate() + 1);
  }

  let timeToAlarm = alarm - now;

  let countdown = setInterval(() => {
    const minutes = Math.floor(timeToAlarm / 60000);
    const seconds = ((timeToAlarm % 60000) / 1000).toFixed(0);
    const timeRemaining = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    console.log(`Temps restant: ${timeRemaining}`);
    if (timeToAlarm <= 0) {
      clearInterval(countdown);
      alert("Réveil !");
    }
    timeToAlarm -= 1000;

    // mettre à jour le temps restant de l'alarme
    const alarmIndex = alarms.findIndex((a) => a.countdown === countdown);
    if (alarmIndex !== -1) {
      alarms[alarmIndex].timeRemaining = timeRemaining;
      updateAlarmsList();
    }
  }, 1000);

  // ajouter l'alarme au tableau
  alarms.push({ time: alarm, countdown, timeRemaining: "" });

  // mettre à jour la liste des alarmes
  updateAlarmsList();
}

function updateAlarmsList() {
  const alarmsList = document.getElementById("alarms-list");

  // vider la liste des alarmes
  alarmsList.innerHTML = "";

  // ajouter chaque alarme à la liste
  alarms.forEach((alarm) => {
    const alarmItem = document.createElement("li");
    const alarmTime = alarm.time.toLocaleTimeString();
    const timeRemaining = alarm.timeRemaining ? `(${alarm.timeRemaining})` : "";
    alarmItem.innerText = `Alarme à ${alarmTime} ${timeRemaining}`;
    alarmsList.appendChild(alarmItem);
  });
}
