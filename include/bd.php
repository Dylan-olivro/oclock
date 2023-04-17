<?php
session_start();
$servername = 'localhost';
$username = 'root';
$password = '';
$pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
$pdo_options[PDO::MYSQL_ATTR_INIT_COMMAND] = "SET NAMES utf8";


try {
    $bdd = new PDO("mysql:host=$servername;dbname=oclock", $username, $password, $pdo_options);
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo 'Connexion réussie';
} catch (PDOException $e) {
    // echo "Erreur : " . $e->getMessage();
}
