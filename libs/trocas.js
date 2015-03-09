/*
 * trocas.js versão 1.0
 * http://des.unasus.gov.br/pm
 *
 * Este objeto foi desenvolvido e distribuido na área Playground
 * da Universidade Aberta do SUS e é livre para o uso e qualquer
 * tipo de modificação pela rede e parceiros.
 *
 * Universidade Aberta do SUS - unasus.gov.br
 * Marcio Henrique S. P. Souza - marciosouza@unasus.gov.br 
 * 
 */

/* ------------------ Titulos, barras e menus -------------------*/

// configurações do curso

var curso = 'Chikungunya';
var producao = 'Secretaria Executiva da Universidade Aberta do SUS'

// scripts

function menu() {
    var e = '<div class="menufloat" data-spy="affix" data-offset-top="97" data-offset-bottom="1"><div class="container"><div class="navbar-header"><button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse"><span class="sr-only">Navegação Mobile</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="/chick/index.html" class="navbar-brand">Chikungunya</a></div><nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation"><ul class="nav navbar-nav"><li><a href="/chick/u1.html">Unidade Geral: Introdução</a></li><li><a href="/chick/u2.html">Unidade Médica</a></li></ul><ul class="nav navbar-nav pull-right"><li><a target="_blank" href="http://portalsaude.ufms.br/contacts?s=6&course=14"><i class="glyphicon glyphicon-question-sign"></i> Suporte</a></li></ul></nav></div></div>';
    n = document.getElementById("menudocurso");
    n.innerHTML = e;
}
function titulodocurso() {
    var e = curso + '<span>' + producao + '</span>';
    n = document.getElementById("titulodocurso");
    n.innerHTML = e;
}
function footer() {
    var e = '<button class="unasus"></button><button class="ufms"></button><button class="fiocruz"></button><button class="segets"></button><button class="ministeriosaude"></button><button class="governo"></button>';
    n = document.getElementById("footer");
    n.innerHTML = e;
}

document.title = curso + " - " + producao;

/* --------------- Funções automaticamente executadas --------------*/

footer();
titulodocurso();
menu();