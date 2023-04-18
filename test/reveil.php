<?php
require_once('./include/bd.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/reveil.js" defer></script>
    <link rel="stylesheet" href="./css/reveil.css">
    <title>Reveil</title>
</head>

<body>
    <?php require_once('./include/header.php'); ?>
    <div id="time"></div>
    <form action="" method='post'>
        <input type="text" name="message">
        <input type="time" name="alarme">
        <button type="submit" name="submit"><i class="fa-solid fa-check"></i></button>
    </form>
    <?php
    if (isset($_POST['submit'])) {
        $insertAlarm = $bdd->prepare("INSERT INTO alarme(message,reveil) VALUES (?,?)");
        $insertAlarm->execute([$_POST['message'], $_POST['alarme']]);
        header('Location: reveil.php');
    }

    $recupAlarm2 = $bdd->prepare("SELECT * from alarme");
    $recupAlarm2->execute();
    $result2 =  $recupAlarm2->fetchAll(PDO::FETCH_ASSOC);

    foreach ($result2 as $key) {
        if (isset($_POST[$key['id']])) {
            $deleteAlarm = $bdd->prepare("DELETE FROM alarme WHERE id = ?");
            $deleteAlarm->execute([$key["id"]]);
        }
    }
    ?>
    <div id="expiredAlarm"></div>
    <div id="newAlarm"></div>
</body>
<script src="https://kit.fontawesome.com/9a09d189de.js" crossorigin="anonymous"></script>

</html>