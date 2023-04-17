<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/chronometre.js" defer></script>
    <script src="https://kit.fontawesome.com/9a09d189de.js" crossorigin="anonymous" defer></script>

    <title>Chronometre</title>
</head>

<body>
    <?php require_once('./include/header.php'); ?>
    <div class="container">
        <div class="timerDisplay">
            00 : 00 : 00 : 000
        </div>
        <div class="buttons">
            <button id="startTimer"><i class="fa-solid fa-play"></i></button>
            <button id="resetTimer"><i class="fa-solid fa-power-off"></i></button>
            <button id="tourTimer"><i class="fa-solid fa-circle-notch"></i></button>
        </div>
        <div id="tour"></div>
    </div>
</body>

</html>