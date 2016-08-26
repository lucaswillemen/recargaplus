<?php
$myfile = fopen("lib/conexao.php", "w") or die("Unable to open file!");
$txt = '<?php 
$db = "'.$_GET['db'].'";
$host = "'.$_GET['host'].'"; 
$username = "'.$_GET['user'].'"; 
$password = "'.$_GET['pass'].'";
$conn = new PDO( "mysql:host=$host;dbname=$db", "$username", "$password");
$conn->exec("SET NAMES `utf8`");
?>';
fwrite($myfile, $txt);
fclose($myfile);


$db = $_GET['db'];
$host = $_GET['host']; 
$username = $_GET['user']; 
$password = $_GET['pass'];
//ENTER THE RELEVANT INFO BELOW
$conn = new PDO( "mysql:host=$host;dbname=$db", "$username", "$password");

$sql = file_get_contents('db.sql');

$qr = $conn->exec($sql);



echo "<br>Configuração realizada com sucesso"
?>