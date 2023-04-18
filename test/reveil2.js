/////////////
// ALARME //
///////////
// Réalisation d'un réveil. L’utilisateur peut entrer une heure et un texte en input. Lorsque l’horloge atteindra l’heure entrée, une sonnerie retentira et une popup apparaîtra, indiquant le message que l’utilisateur aura rentré. avec un bouton pour fermer le popup et arrêter la sonnerie. De plus, l’utilisateur a la possibilité d’entrer plusieurs alarmes qui seront affichées dans une liste, avec l'heure et mention “passée” si l’heure de l’alarme est passée, et “dans x temps” avec x représentant le temps restant avant la prochaine alarme.

// Chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // Declaration constante
  const ringtone = new Audio("/oclock/assets/audio/alarm-clock.mp3");

  // Declaration des variables
  let alarmInput = document.querySelector("#alarmTime");
  let messageInput = document.querySelector("#alarmMessage");
  let alarmButton = document.querySelector("#alarmButton");
  let comingAlarm = document.querySelector("#comingAlarmList");
  let passedAlarm = document.querySelector("#passedAlarmList");
  let pop = document.querySelector("#popup");
  pop.style.display = "none";
  let close = document.querySelector(".close");

  // fonction pour récupérer l'heure courante
  function getCurrentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return `${hours}:${minutes}`;
  }

  // fonction pour récupérer l'heure de l'alarme
  function getAlarmTime() {
    return alarmInput.value;
  }

  // fonction pour récupérer le message de l'alarme
  function getAlarmMessage() {
    return messageInput.value;
  }

  // fonction pour calculer la différence entre l'heure courante et l'heure de l'alarme
  function compareTime() {
    let actualTime = getCurrentTime();
    let alarmTime = getAlarmTime();
    let alarmMessage = getAlarmMessage();

    console.log(actualTime);
    console.log(alarmTime);
    console.log(alarmMessage);

    if (actualTime >= alarmTime) {
      // create the alarm in the passed alarms list
      let alarm = document.createElement("li");
      alarm.innerHTML = `${alarmInput.value} - ${alarmMessage} - Expirée`;
      passedAlarm.appendChild(alarm);
    } else {
      // create the alarm in the coming alarms list
      let alarm = document.createElement("li");
      alarm.innerHTML = `${
        alarmInput.value
      } - ${alarmMessage} - Dans ${displayRemainingTime()}`;
      comingAlarm.appendChild(alarm);
    }
  }

  // fonction pour récupérer les alarmes futures
  function getComingAlarms() {
    // variable de Selection des alarmes futures
    let comingAlarms = comingAlarm.querySelectorAll("li");
    return comingAlarms;
  }

  // fonction pour afficher le temps restant avant l'alarme
  function displayRemainingTime() {
    alarmHour = parseInt(getAlarmTime().split(":")[0]);
    alarmMinute = parseInt(getAlarmTime().split(":")[1]);
    actualHour = parseInt(getCurrentTime().split(":")[0]);
    actualMinute = parseInt(getCurrentTime().split(":")[1]);
    // Si l'heure de l'alarme et les minutes sont inférieurs à l'heure courante et les minutes
    if (
      alarmHour < actualHour ||
      (alarmHour == actualHour && alarmMinute < actualMinute)
    ) {
      // On ajoute 24h à l'heure de l'alarme et on soustrait l'heure courante
      remainingHour = 24 + alarmHour - actualHour;
      // On ajoute 60min à l'heure de l'alarme et on soustrait l'heure courante
      remainingMinute = 60 + alarmMinute - actualMinute;
    } else {
      // Sinon on soustrait l'heure courante à l'heure de l'alarme
      remainingHour = alarmHour - actualHour;
      // On soustrait les minutes courantes aux minutes de l'alarme
      remainingMinute = alarmMinute - actualMinute;
    }
    // On retourne le temps restant avant l'alarme
    return `${remainingHour}h${remainingMinute}min`;
  }

  // fonction pour faire sonner l'alarme
  function ringAlarm() {
    // récupération de l'heure courante
    let actualTime = getCurrentTime();
    // récupération des alarmes futures
    let comingAlarms = getComingAlarms();

    // On parcourt la liste des alarmes futures
    for (let i = 0; i < comingAlarms.length; i++) {
      // On récupère l'alarme
      let actualTime = getCurrentTime();
      // On récupère les alarmes futures
      let comingAlarms = getComingAlarms();

      // On parcourt la liste des alarmes futures
      for (let i = 0; i < comingAlarms.length; i++) {
        let alarm = comingAlarms[i];
        // On split l'alarme pour récupérer l'heure et le message
        let alarmTime = alarm.innerHTML.split(" - ")[0];
        let alarmMessage = alarm.innerHTML.split(" - ")[1];

        // Si l'heure courante est égale à l'heure de l'alarme
        if (actualTime == alarmTime) {
          // On récupère l'alarme
          alarm.innerHTML = alarmTime + " - " + alarmMessage;
          // On supprime l'alarme de la liste des alarmes futures et on l'ajoute dans la liste des alarmes passées
          passedAlarm.appendChild(alarm);
          // affichage de la popup
          pop.style.display = "block";
          // création du message de l'alarme dans la popup
          let p = document.createElement("p");
          p.innerHTML = alarmTime + " - " + alarmMessage;
          // ajout du message de l'alarme dans la popup
          pop.appendChild(p);
          // Déclenchement du son de l'alarme
          ringtone.play();
        }
      }
    }
  }

  // Ecouteur d'évènement sur le bouton "Ajouter une alarme"
  alarmButton.addEventListener("click", function (event) {
    // annulation de l'action par défaut du bouton
    event.preventDefault();
    getAlarmTime();
    getAlarmMessage();
    // lance la fonction compareTime
    compareTime();
    // lance la fonction displayRemainingTime
    displayRemainingTime();
    // Vider les champs de saisie
    alarmInput.value = "";
    messageInput.value = "";
  });

  // Ecouteur d'évènement sur le bouton "Fermer" de la popup
  close.addEventListener("click", function (event) {
    // annulation de l'action par défaut du bouton
    event.preventDefault();
    // vider le message de l'alarme dans la popup
    pop.innerHTML = "";
    // garder la croix de fermeture de la popup
    pop.appendChild(close);
    // fermeture de la popup
    pop.style.display = "none";
    // suspension du son de l'alarme
    ringtone.pause();
    // Ajouter mention "Expirée" à l'alarme dans la liste des alarmes passées
    passedAlarm.lastElementChild.innerHTML += `Expirée`;
  });

  // lancement des fonctions toutes les secondes
  setInterval(function () {
    // lance la fonction displayCurrentTime
    displayRemainingTime();
    // lance la fonction ringAlarm
    ringAlarm();
    // Interval de 1 seconde
  }, 1000);
});
