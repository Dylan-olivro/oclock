<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php include './include/header.php'; ?>
    <div class="container">

        <div id="clockDisplay" class="horloge auto"></div>

        <div class="col">

            <form action="">
                <div class="row center">
                    <div class="col ">
                        <label for="alarmTime" class="center">Heure de l'alarme</label>
                        <input type="time" class="center" name="timeinput" id="alarmTime" required>
                    </div>
                </div> <!--/row-->

                <div class="row center">
                    <div class="col ">
                        <label for="alarmMessage" class="center">Message</label>
                        <input type="text" class="center" name="messageinput" id="alarmMessage" required>
                    </div>
                </div> <!--/row-->

                <button id="alarmButton" type="submit" name="submitalarm" class="alarmButton">Ajouter une alarme</button>

            </form>

            <div class="row center">
                <div id="comingAlarm" class="col">
                    <h3 class="p border">Alarmes programées</h3>
                    <ul id="comingAlarmList"></ul>
                </div>
                <div class="col">&nbsp;&nbsp;</div>
                <div id="passedAlarm" class="col">
                    <h3 class="p border">Alarmes terminées</h3>
                    <ul id="passedAlarmList"></ul>
                </div>
            </div> <!--/row-->

            <div id="popup" class="center">
                <span class="close">&times;</span>
            </div>
        </div>

    </div>
    <!-- <script src="./js/horloge.js"></script> -->
    <script src="./js/reveil2.js"></script>
</body>

</html>