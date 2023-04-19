<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/reveil.js" defer></script>
    <script src="https://kit.fontawesome.com/9a09d189de.js" crossorigin="anonymous" defer></script>
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/reveil.css">
    <link rel="shortcut icon" href="#">
    <title>Réveil</title>
</head>

<body>
    <?php require_once('./include/header.php'); ?>
    <h1>Réveil</h1>
    <label for="alarm-time">Heure :</label>
    <input type="time" id="alarm-time">
    <br>
    <label for="alarm-day">Jour :</label>
    <input type="date" id="alarm-day">
    <br>
    <label for="alarm-message">Message :</label>
    <input type="text" id="alarm-message">
    <br>
    <button onclick="setAlarm()">Définir l'alarme</button>

    <h2>Alarmes à venir</h2>
    <ul id="upcoming-alarms-list"></ul>

    <h2>Alarmes passées</h2>
    <ul id="passed-alarms-list"></ul>


</body>

</html>