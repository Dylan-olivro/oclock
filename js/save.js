fetch("alarme.php")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let result = data.filter((element) => {
      let f = document.createElement("p");
      let a = document.createElement("p");
      alarmeFini.append(f);
      alarmeAVenir.append(a);

      setInterval(() => {
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
        // let m = parseInt(element.reveil) - parseInt(currentHour());
        // console.log(element.reveil);
      }, 1000);
      return element;
    });
  })
  .catch((error) => {
    console.log(error);
  });
