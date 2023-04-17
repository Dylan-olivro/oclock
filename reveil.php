<?php require_once('./include/bd.php'); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/reveil.js" defer></script>
    <title>Reveil</title>
</head>

<body>
    <?php require_once('./include/header.php'); ?>
    <div id="time"></div>
    <form action="" method='post'>
        <input type="text" id="text" name="message">
        <input type="time" id="alarme" name="alarme">
        <input type="submit" name="submit">
    </form>
    <?php
    if (isset($_POST['submit'])) {
        $insertAlarm = $bdd->prepare("INSERT INTO alarme(message,reveil) VALUES (?,?)");
        $insertAlarm->execute([$_POST['message'], $_POST['alarme']]);
        header('Location: reveil.php');
    }
    ?>
    <div id="alarmeFini"></div>
    <div id="alarmeAVenir"></div>
    <div id="resultat"></div>
</body>

</html>