<?php 
$db = "bonuscred";
$host = "localhost"; 
$username = "root"; 
$password = "";
$conn = new PDO( "mysql:host=$host;dbname=$db", "$username", "$password");
$conn->exec("SET NAMES `utf8`");
?>