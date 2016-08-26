<?php
include 'admin/jsonp/lib/conexao.php';
$consulta = $conn->query("SELECT * FROM config WHERE `id` = 1;");
$linha = $consulta->fetchAll(PDO::FETCH_ASSOC);


$text = array(
    'titulo' => $linha[0]['titulo'],
    'descricao' => 'Desrição do site',
    'titulo_1' => 'Recarga',
    'titulo_2' => 'Plus',
    'ola' => 'Olá',
    'recarga_gratis' => 'Recarga grátis',
    'para_cellar' => 'Para o seu celular',
    'qualquer_lugar' => 'Selecione o seu sistema para iniciar',
    'simples_passos' => 'Basta seguir os 3 passos',
    'simples_passos_2' => 'Veja a seguir como efetuar sua recarga',
    'facil_pratico' => 'Simples e prático',
    'facil_pratico_explicacao' => 'Basta seguir os passos descrito ao lado para efetuar sua recarga',
    'passo_1' => 'Acesse sua conta',
    'passo_1_explicacao' => 'Faça seu login com sua conta do facebook com 1 clique',
    'passo_2' => 'Compartilhe nossa ferramenta',
    'passo_2_explicacao' => 'Mostre para seus amigos a nossa ferramenta para que eles também possam ganhar créditos',
    'passo_3' => 'Informe seu celular',
    'passo_3_explicacao' => 'Basta informar seu celular, operadora e fazer a verificação contra robôs',
    'vamos_comecar' => 'Vamos começar?',
    'acesse_conta' => 'Acesse sua conta',
    'login_facebook' => 'Basta clicar em acessar sua conta pelo facebook, vamos apenas ler o seu nome para criar sua conta caso ainda não exista',
    'login_botao' => 'Login com facebook',
    'compartilhar_botao' => 'Compartilhar',
    'compartilhar_botao2' => 'Compartilhe nossa ferramenta para continuar',
    'error' => 'Alguma coisa deu errado, tente novamente!',
    'recarregue' => 'Recarga online grátis',
    'captcha' => 'Texto descritivo para usar no captcha porque hoje acordei com pouca criatividade',
    'verificacao' => 'Verificação robótica',
    'erro_2' => 'Não foi possível fazer a validação robótica, compartilhe esse link para tentarmos verificar',
    'idioma' => 'Idiomas',
    'idioma_br' => 'Português',
    'idioma_es' => 'Español',
    'idioma_en' => 'English',
    'button_share_url' => 'http://3.bp.blogspot.com/-Qr3EhhBd05w/VRgXO-Fi9GI/AAAAAAAAFes/iukaAIovLDU/s1600/compartilhar-face.png',



    //Page finish


    'informe_celular' => 'Informe o número do seu celular',
    'informe_operadora' => 'Operadora',
    'informe_valor' => 'Valor',
    'start' => 'Inserir recarga',
    'complete' => 'Complete as tarefas a seguir para concluir a recarga'

);
$config = array(
    'link_compartilhar' => $linha[0]['link'],
    'link_compartilhar2' => $linha[0]['link2'],
    'titulo' => $linha[0]['titulo'],
    'link_compartilhar2' => $linha[0]['desc'],
    'char_ddd' => 2,
    'regex_cell' => '000000000'
    );

$captcha = array(
    'p1' =>'Iniciando sistema',
    'p2' =>'Conectando...',
    'p2c' =>'Conectado',
    'p3' =>'Verificando telefone',
    'p3c' =>'Telefone verificado',
    'p4' =>'Autenticando conta...',
    'p4c' =>'Conta autenticada',
    'p5' => 'Verificação anti robô...',
    'p6' => 'Aguardando verificação...',
    );

$operators = array('Vivo', 'Claro', 'Nextel', 'TIM', 'Oi');

$valores = array('R$ 15,00', 'R$ 25,00', 'R$ 40,00');
?>