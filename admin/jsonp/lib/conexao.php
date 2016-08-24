<?php 
$k = 2;
date_default_timezone_set("America/Sao_Paulo");
$db = "recargaplus";
switch ($k) {
	case 1:
$host = "localhost"; 
$username = "vecto934_vector"; 
$password = "cpdvgs90";
		break;
	
	case 2:
$host = "localhost"; 
$username = "root"; 
$password = "Cpdnf@2016";
		break;
	
	case 3:
$host = "vectorgray.com.br"; 
$username = "vecto934_vector"; 
$password = "cpdvgs90";
		break;
}
$conn = new PDO( "mysql:host=$host;dbname=$db", "$username", "$password");
$conn->exec("SET NAMES 'utf8'");



?>
