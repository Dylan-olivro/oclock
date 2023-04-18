<!DOCTYPE html>
<html>

<head>
    <title>Réveil</title>
    <script src="./js/reveil.js"></script>
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