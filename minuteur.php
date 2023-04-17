<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/minuteur.js" defer></script>
    <title>Minuteur</title>
</head>

<body>
    <?php require_once('header.php'); ?>
    <main>
        <div id="timer"></div>
        <div>
            <button id="down">down</button>
            <button id="up">up</button>
            <input type="number" id="number">
            <button id="start">Start</button>
            <button id="reset">Reset</button>
            <button id="pause">Pause</button>
        </div>
    </main>

</body>

</html>