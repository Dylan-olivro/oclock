<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/chronometre.js" defer></script>
    <script src="https://kit.fontawesome.com/9a09d189de.js" crossorigin="anonymous" defer></script>
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/chronometre.css">
    <link rel="shortcut icon" href="#">
    <title>Chronomètre</title>
</head>

<body>
    <?php require_once('./include/header.php'); ?>
    <main>
        <div class="container">
            <div class="buttons">
                <button id="startTimer" class="input"><i class="fa-solid fa-play"></i></button>
                <button id="resetTimer" class="input"><i class="fa-solid fa-power-off"></i></button>
                <button id="tourTimer" class="input"><i class="fa-solid fa-circle-notch"></i></button>
            </div>
            <div class="timerDisplay">
                <span>00</span>:
                <span>00</span>:
                <span>00</span>:
                <span id="last">000</span>
            </div>
        </div>
        <div id="tour"></div>
    </main>
</body>

</html>