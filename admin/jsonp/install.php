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
echo "Configuração realizada com sucesso"
?>