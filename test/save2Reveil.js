fetch("alarme.php")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Tri des éléments par ordre croissant de l'heure de réveil
    data.sort((a, b) => (a.reveil > b.reveil ? 1 : -1));

    // Récupération des éléments HTML où afficher les alarmes passées et à venir
    const alarmeFini = document.getElementById("alarmeFini");
    const alarmeAVenir = document.getElementById("alarmeAVenir");

    // Parcours de chaque élément et affichage en fonction de l'heure de réveil
    data.forEach((element) => {
      // Création des éléments HTML pour chaque alarme
      let f = document.createElement("p");
      let a = document.createElement("p");
      alarmeFini.append(f);
      alarmeAVenir.append(a);

      setInterval(() => {
        // Définition des deux chaînes de temps
        const time1 = currentHour();
        const time2 = element.reveil;

        // Conversion des chaînes de temps en objets Date
        const date1 = new Date(`2000-01-01T${time1}`);
        const date2 = new Date(`2000-01-01T${time2}`);

        // Calcul de la différence de temps en millisecondes
        const timeDiffMs = Math.abs(date2 - date1);

        // Conversion de la différence de temps de millisecondes en secondes
        const timeDiffSecs = timeDiffMs / 1000;

        // Conversion de la différence de temps de secondes en heures, minutes et secondes
        const timeDiffHrs = Math.floor(timeDiffSecs / 3600);
        const timeDiffMins = Math.floor((timeDiffSecs % 3600) / 60);
        const timeDiffSecsRem = Math.round(timeDiffSecs % 60);
        const H = timeDiffHrs < 10 ? "0" + timeDiffHrs : timeDiffHrs;
        const M = timeDiffMins < 10 ? "0" + timeDiffMins : timeDiffMins;
        const S =
          timeDiffSecsRem < 10 ? "0" + timeDiffSecsRem : timeDiffSecsRem;

        if (element.reveil == currentHour()) {
          alert(element.message);
        }

        if (element.reveil < currentHour()) {
          f.innerText = element.reveil + " Passé";
        } else {
          a.innerText = element.reveil + ` Alarme dans ${H}h${M}m${S}s`;
        }
      }, 1000);
    });
  })
  .catch((error) => {
    console.log(error);
  });
