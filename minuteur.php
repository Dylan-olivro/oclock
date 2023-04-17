<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/minuteur.js" defer></script>
    <script src="https://kit.fontawesome.com/9a09d189de.js" crossorigin="anonymous" defer></script>
    <title>Minuteur</title>
</head>

<body>
    <?php require_once('./include/header.php'); ?>
    <main>
        <div id="timer"></div>
        <div>
            <button id="down"><i class="fa-solid fa-arrow-down"></i></button>
            <button id="up"><i class="fa-solid fa-arrow-up"></i></button>
            <input type="number" id="number">
            <button id="start"><i class="fa-solid fa-play"></i></button>
            <button id="reset"><i class="fa-solid fa-power-off"></i></button>
            <button id="pause"><i class="fa-solid fa-pause"></i></button>
        </div>
    </main>

</body>

</html>