<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/chronometre.js" defer></script>
    <title>Document</title>
</head>

<body>
    <?php require_once('header.php'); ?>
    <div class="container">
        <div class="timerDisplay">
            00 : 00 : 00 : 000
        </div>
        <div class="buttons">
            <button id="pauseTimer">Pause</button>
            <button id="startTimer">Start</button>
            <button id="resetTimer">Reset</button>
        </div>
    </div>
</body>

</html>