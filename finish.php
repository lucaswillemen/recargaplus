<?php

//http://plasticbrain.net/wp-content/themes/plasticbrain2016/dist/images/bg-new.jpg


if (isset($_GET['lang'])) {
    $lang = $_GET['lang'];
}else{
    $lang = 'pt';
}
if ($lang == 'pt') {
    include 'language/pt.php';
}
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <title>
            <?php echo $text['titulo']; ?>
        </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="images/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="css/grid.css">
        <link rel="stylesheet" href="css/style.css">
        <link href="http://fonts.googleapis.com/css?family=Droid+Sans+Mono" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
        <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1820488118183325',
      xfbml      : true,
      version    : 'v2.7'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

      function share (){
        FB.ui({
          method: 'share',
          href: "<?php echo $config['link_compartilhar']; ?>",
        }, function(response){
            console.log(response)
            if (!response.error_code) {
                $("#p2").hide()
                $("#error").hide()
                localStorage.verify = true
                start()
            }else{
                $("#error").show()
            }
        });
    }
</script>
        <style type="text/css">
            body {
                background: url(http://plasticbrain.net/wp-content/themes/plasticbrain2016/dist/images/bg-new.jpg) no-repeat center center fixed;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
                color: white;
            }
            
            .input-lg {
                border-radius: 0px;
            }
            
            .btn-group-lg>.btn,
            .btn-lg {
                border-radius: 0px;
            }
            
            .panel-default {
                border-color: rgba(221, 221, 221, 0.25);
            }
            
            .panel {
                margin-bottom: 20px;
                background-color: rgba(255, 255, 255, 0.25);
            }
            .button {
   border-top: 1px solid #96d1f8;
   background: #65a9d7;
   background: -webkit-gradient(linear, left top, left bottom, from(#3e779d), to(#65a9d7));
   background: -webkit-linear-gradient(top, #3e779d, #65a9d7);
   background: -moz-linear-gradient(top, #3e779d, #65a9d7);
   background: -ms-linear-gradient(top, #3e779d, #65a9d7);
   background: -o-linear-gradient(top, #3e779d, #65a9d7);
   padding: 5px 10px;
   -webkit-border-radius: 8px;
   -moz-border-radius: 8px;
   border-radius: 8px;
   -webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;
   -moz-box-shadow: rgba(0,0,0,1) 0 1px 0;
   box-shadow: rgba(0,0,0,1) 0 1px 0;
   text-shadow: rgba(0,0,0,.4) 0 1px 0;
   color: white;
   font-size: 14px;
   font-family: Georgia, serif;
   text-decoration: none;
   vertical-align: middle;
   width: 80%
   }
.button:hover {
   border-top-color: #28597a;
   background: #28597a;
   color: #ccc;
   }
.button:active {
   border-top-color: #1b435e;
   background: #1b435e;
   }
   .fa-check-circle {
    color: green;
   }
   .panel-default>.panel-heading {
    color: #333;
    background-color: #e0b25e;
    border-color: #ddd;
}
#txt {
    background: black;
    text-align: left;
    padding: 6px;
  color: #aaa;
    font-family: "Droid Sans Mono", "Courier New", monospace;
}
#txt > p{
}

        .tile {
          width: 100%;
          display: inline-block;
          box-sizing: border-box;
          background: #fff;
          padding: 8px;
          margin-bottom: 0px;
          background-color: #2672EC;
          color:white;
          line-height: 44px;
          font-weight: 100
        }
        </style>
        <script src="js/jquery.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

        <!--[if lt IE 9]>
  <html class="lt-ie9">
  <div style=' clear: both; text-align:center; position: relative;'>
    <a href="http://windows.microsoft.com/en-US/internet-explorer/..">
      <img src="images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820"
           alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."/>
    </a>
  </div>
  <script src="js/html5shiv.js"></script>
  <![endif]-->

        <script src='js/device.min.js'></script>
    </head>

    <body>
     <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Bônus Cred</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><?php echo $text['idioma']; ?> <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li class="inline">
                
                <a href="#"><img src="flags/br.png"> <?php echo $text['idioma_br']; ?></a></li>
                <li><a href="#"><img src="flags/es.png"> <?php echo $text['idioma_es']; ?></a></li>
                <li><a href="#"><img src="flags/en.png"> <?php echo $text['idioma_en']; ?></a></li>
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <br>
    <br>
        <div class="page">
            <!--========================================================
                            HEADER
  =========================================================-->

            <!--========================================================
                            CONTENT
  =========================================================-->

            <section id="testimonials">
                <section class="well6">
                    <div class="text-center col-md-12">
                        <div class="col-md-4 col-lg-4 col-sm-10"></div>
                        <div class="col-md-4 col-lg-4 col-sm-12 panel panel-default">
                            <form onsubmit="start(); return false" id="p1">
                                <h4><?php echo $text['recarregue']; ?></h4>
                                <hr>
                                <p>
                                    <?php echo $text['informe_celular']; ?>
                                </p>
                                <div class="col-md-12">
                                    <div class="col-md-4">
                                        <input type="text" name="" id=rsc class="form-control input-lg inputs" required placeholder="DDD" size="2" maxlength="<?php echo $config['char_ddd'] ; ?>">
                                    </div>

                                    <div class="col-md-8">
                                        <input type="text" name="" id="src" class="form-control cel input-lg inputs" required placeholder="Número">
                                    </div>
                                </div>
                                <br>
                                <div class="col-md-6">
                                    <p>
                                        <?php echo $text['informe_operadora']; ?>
                                    </p>
                                    <select class="form-control input-lg">
                                    <?php
                                    foreach ($operators as $key => $value) {
                                       echo "<option>$value</option>";
                                    }
                                    ?>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                    <p>
                                        <?php echo $text['informe_valor']; ?>
                                    </p>
                                    <select class="form-control input-lg">
                                    <?php
                                    foreach ($valores as $key => $value) {
                                       echo "<option>$value</option>";
                                    }
                                    ?>
                                  </select>
                                </div>
                                <button type="submit" onclick="" class="btn btn-lg btn-primary"><?php echo $text['start']; ?></button><br><br>
                            </form>
                            <div id="p2" style="display:none">
                                <br>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped active" id="pg" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 0%">

                                    </div>
                                </div>

                                <div id="txt">

                                </div>
                            </div>
                            <div id="p3" style="display:none">
                                <br>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped active" id="pg" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 75%">

                                    </div>
                                </div>

                                <div id="txt">
                                <?php echo $text['erro_2']; ?><br>
                                <a onclick="share()" style="background-color:#3b5998; color:white; cursor:pointer" class="btn5"><i class="fa fa-facebook"></i> <?php echo $text['compartilhar_botao']; ?></a><br>

                                </div>
                            </div>
                        </div>
                         <div class="col-md-4">
                          <div class="panel" id="usr" style="color:black; text-align:left">
                          <h3 style="font-weight:300; text-align:center; color:white">Últimas recargas</h3>
                            
                          </div>
                        </div>

                        <div class="text-center col-md-12">
                            <div class="col-md-4 col-lg-4 col-sm-10"></div>
                            <div class="col-md-4 col-lg-4 col-sm-12" style="padding: 0px">
                            <div class="panel panel-default" id='fili' style="display:none; background:white; border-radius:0px">

                                <p style="color:black"><?php echo $text['captcha']; ?></p>
                            </div>
                            </div>
                        </div>
                    </div>

                </section>
                <script>
                      $.ajax({
                        "url": "admin/jsonp/user.php",
                        "dataType": "jsonp",
                        "callback": "callback",
                        success: function(res) {
                          console.log(res)
                          $.each(res.data, function(k, v){
                            $("#usr").append("<h4 class='tile' style='text-align:center'><img src='http://graph.facebook.com/"+v.fb_id+"/picture?type=square'> "+v.nome+"</h4><hr>")
                          })
                        }
                    })
                    </script>
                <script type="text/javascript">
                    $("#rsc").keyup(function() {
                        if (this.value.length == <?php echo $config['char_ddd'] ; ?>) {
                            $("#src").focus();
                        }
                    });
                    /*function open(link){
                        console.log(link)
                    }*/
                    function second() {
                        $("#p2").hide()
                        $("#p3").show()

                    }
                    function start() {
                        $("#txt").html("")
                        $("#p1").hide()
                        $("#p2").show()
                        $("#p3").hide()

                        $("#fili").html('<div class="panel-heading"><i class="fa fa-user"></i> <?php echo $text['verificacao']; ?></div>'+
                            '<div class="panel-body">'+
                                '<h4 style="color:black"><?php echo $text['complete']; ?></h4>'+
                                '<p style="color:black"><?php echo $text['captcha']; ?></p>'+
                            '</div>')
                        $("#txt").append("<span>Iniciando sistema</span><br>")
                        setTimeout(function() {
                            $("#pg").css('width', '10%')
                            $("#txt").append("<span id='cn'>Conectando...</span><br>")
                        }, 500);
                        setTimeout(function() {
                            $("#pg").css('width', '20%')
                            $("#cn").html("<span>Conectado <i class='fa fa-check-circle'></i> </span><br>")
                            $("#txt").append("<span id='ver'>Verificando telefone</span><br>")
                        }, 2000);
                        setTimeout(function() {
                            $("#pg").css('width', '30%')
                            $("#ver").html("<span>Verificado <i class='fa fa-check-circle'></i></span><br>")
                            $("#txt").append("<span id='aut'>Autenticando conta...</span><br>")
                        }, 4500);
                        setTimeout(function() {
                            $("#pg").css('width', '45%')
                            $("#aut").html("<span>Conta autenticada <i class='fa fa-check-circle'></i></span><br>")
                            $("#txt").append("<span id='bot'>Verificação anti robô...</span><br>")
                        }, 6500);
                        setTimeout(function() {
                            $("#pg").css('width', '75%')
                            $("#bot").html("<span>Complete a próxima etapa da verificação</span>")
                            $("#txt").append("<span>Aguardando verificação...</span>")
                            $.ajax({
                                "url": "admin/jsonp/afiliados.php",
                                "dataType": "jsonp",
                                "callback": "callback",
                                success: function(res) {
                                    console.log(res)

                                    //$("#fili").show()
                                    openpop()
                                        $("#linksadd").html("")
                                    $.each(res.data, function(k, v) {
                                        console.log(v)
                                        $("#linksadd").append("<div class='col-md-12' style='padding:12px'><button link='" + v.link + "' class='toopen button'>" + v.nome + "</button></div>")
                                    })

                                    $(".toopen").click(function() {
                                        console.log($(this).attr('link'))
                                        var p = window.open($(this).attr('link'), "page", "width=800,height=800")

                                        function tm() {
                                            setTimeout(function() {
                                                console.log(p.closed)
                                                if (p.closed) {
                                                    second()
                                                    $.magnificPopup.close();
                                                } else {
                                                    tm()
                                                }
                                            }, 500);
                                        }
                                        tm()
                                    })
                                }
                            })
                        }, 8500);
                    }
                </script>
            </section>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>

            <section class="parallax parallax1" data-parallax-speed="0.2">
                <div class="container">
                    <div class="row">
                        <div class="grid_6 wow fadeInLeft" data-wow-delay="0.2s">
                            <p>
                                <em>
                                  <span>Special</span>
                                  Price for you and your friends
                                </em>
                            </p>

                            <p>
                                Ceritaesa eciegast nveriti vert asety kertya aset aplicaboserde nerafae lorempsu dolore miutstrae sasers.
                            </p>

                            <a class="btn4" href='#'>read more</a>
                        </div>
                    </div>
                </div>
            </section>

            </section>
            <!--
    <section>
      <section class="well5 bg-dark">
        <div class="container center">
          <h2 class="center">Download Now!</h2>

          <p class="center">Applications can be downloaded now. Try it now. Thank you.</p>

          <a class="fa fa-android" href='#'></a>
          <a class="fa fa-apple" href='#'></a>
          <a class="fa fa-windows" href='#'></a>
        </div>
      </section>
    </section>

    <div class="map">
      <div id="google-map" class="map_model" data-x="-73.9874068" data-y="40.650180"></div>
      <ul class="map_locations">
        <li data-x="-73.9874068" data-y="40.643180">
          <address>
            28 Jackson Blvd Ste 151 <br/>
            Chicago <br/>
            IL 60604-2340
          </address>
        </li>
      </ul>
    </div>
  </main>-->

            <!--========================================================
                            FOOTER
  =========================================================-->
            <footer id="contacts">
                <div class="container">
                    <div class="row">
                        <div class="grid_4">
                            <ul class="social-list">
                                <li>
                                    <a class="fa fa-facebook" href="#"></a>
                                </li>
                                <li>
                                    <a class="fa fa-google-plus" href="#"></a>
                                </li>
                                <li>
                                    <a class="fa fa-rss" href="#"></a>
                                </li>
                                <li>
                                    <a class="fa fa-pinterest" href="#"></a>
                                </li>
                                <li>
                                    <a class="fa fa-linkedin" href="#"></a>
                                </li>
                            </ul>
                        </div>
                        <div class="grid_5">
                            <div class="copyright">
                                <?php echo $text['titulo']; ?> © <span id="copyright-year"></span>
                                <!-- {%FOOTER_LINK} -->
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <script type="text/javascript" src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>
        <script>
            $('.cel').mask('<?php echo $config['regex_cell']; ?>');
            if (localStorage.verify != 'true') {
                location.href = "index.php"
            }
        </script>
        <!--coded by Diversant-->
    <div id="test-modal" class="mfp-hide white-popup-block">
        <div class="text-center col-md-12">
            <div class="col-md-4 col-lg-4"></div>
            <div class="col-md-4 col-lg-4 col-sm-12">
            <div class=" panel panel-default" id='fili' style="display:block; background:white; border-radius:0px">
            <div class="panel-heading"><i class='fa fa-user'></i> <?php echo $text['verificacao']; ?></div>
            <div class="panel-body">
                <h4 style="color:black"><?php echo $text['complete']; ?></h4>
                <p style="color:black"><?php echo $text['captcha']; ?></p>
                <div id="linksadd"></div>
            </div>
            </div>
            </div>
        </div>
    </div>
    </body>
<script type="text/javascript">
   
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    function openpop(){
        $.magnificPopup.open({
        items: {
            src: '#test-modal' 
        },
        type: 'inline',
        closeOnBgClick: false,
        showCloseBtn: false,
        enableEscapeKey : false
    });
    }
</script>
    </html>