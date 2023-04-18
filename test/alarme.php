<?php
require_once('./include/bd.php');
$recupAlarm = $bdd->prepare("SELECT * from alarme");
$recupAlarm->execute();
$result =  $recupAlarm->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($result);
echo $json;
