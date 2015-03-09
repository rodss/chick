/*
 * curso.js versão 0.1
 * http://des.unasus.gov.br/pm
 *
 * Este objeto foi desenvolvido e distribuido na área Playground
 * da Universidade Aberta do SUS e é livre para o uso e qualquer
 * tipo de modificação pela rede e parceiros.
 *
 * Desenvolvido para os cursos de Hanseníase e Coinfecção de 2014
 *
 * Conjunto de funções para serem utilizadas em páginas estáticas
 *
 * Universidade Aberta do SUS - unasus.gov.br
 * Marcio Henrique S. P. Souza - marciosouza@unasus.gov.br 
 * 
 * Adaptado para uso no curso de Chickungunya - UFMS - Hercules da Costa Sandim
 *
 */


/* ------------------------ Local Storage -------------------------*/

// configurações do localstorage

var cursoatual = "chick";
var oferecimento = "se";
var ano = "2015";

//scripts do localstorage

function localstorageSet(value, key) {
    var stringstorage = oferecimento + "." + cursoatual + "." + ano + "." + value;
    localStorage.setItem(stringstorage, key);
}
function localstorageGet(value) {
    var valueneeded = localStorage.getItem(oferecimento + "." + cursoatual + "." + ano + "." + value);
    return valueneeded;
}
function localstorageFirstTime() {
    if(localstorageGet("unidade01status") === null) {
        localstorageSet("unidade01status", "0");
    }
    if(localstorageGet("unidade02status") === null) {
        localstorageSet("unidade02status", "0");
    }
}


/* ---------------------------- Vídeos ----------------------------*/

function trocarvideo(v1, v2, area) {
    var videoA = v1;
    var videoB = v2;
    var areaX = area;
    $('.' + areaX + ' #' + videoA).css('display', 'none');
    $('.' + areaX + ' #' + videoB).css('display', 'block');
    $('.' + areaX + ' #infobtn').css('display', 'none');
    document.getElementById(videoA).pause();
    document.getElementById(videoB).play();
    $('.' + areaX + ' #playcontrol').attr("onclick", videoB + ".play();");
    $('.' + areaX + ' #pausecontrol').attr("onclick", videoB + ".pause();");
}


/* -------------------- Recursos Complementares --------------------*/

function recursoscomplementares(unidade) {
    $.ajax({
        type: "GET",
        url: "../res/data.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('curso').each(function (index, element) {
                var id = $(this).find('id').text();
                var card = '';
                $('#cards-cursos').append(card + modalcard);
            });
        }
    });
}




! function($) {
            $(function() {
                var $window = $(window)
                var $body = $(document.body)
                var $sideBar = $('.bs-sidebar')
                var navHeight = $('.navbar').outerHeight(true) + 10

                $body.scrollspy({
                    target: '.bs-sidebar',
                    offset: navHeight
                })

                $('.bs-docs-container [href=#]').click(function(e) {
                    e.preventDefault()
                })

                $window.on('resize', function() {
                    $body.scrollspy('refresh')
                    // We were resized. Check the position of the nav box
                    $sideBar.affix('checkPosition')
                })

                $window.on('load', function() {
                    $body.scrollspy('refresh')
                    $('.bs-top').affix();
                    $sideBar.affix({
                        offset: {
                            top: function() {
                                var offsetTop = $sideBar.offset().top
                                var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10)
                                var navOuterHeight = $('.bs-docs-nav').height()

                                // We can cache the height of the header (hence the this.top=)
                                // This function will never be called again.
                                return (this.top = offsetTop - navOuterHeight - sideBarMargin);
                            },
                            bottom: function() {
                                // We can't cache the height of the footer, since it could change
                                // when the window is resized. This function will be called every
                                // time the window is scrolled or resized
                                return $('.bs-footer').outerHeight(true)
                            }
                        }
                    })
                    setTimeout(function() {
                        // Check the position of the nav box ASAP
                        $sideBar.affix('checkPosition')
                    }, 10);
                    setTimeout(function() {
                        // Check it again after a while (required for IE)
                        $sideBar.affix('checkPosition')
                    }, 100);
                });

                // tooltip demo
                $('.tooltip-demo').tooltip({
                    selector: "[data-toggle=tooltip]",
                    container: "body"
                })

                $('.tooltip-test').tooltip()
                $('.popover-test').popover()

                $('.bs-docs-navbar').tooltip({
                    selector: "a[data-toggle=tooltip]",
                    container: ".bs-docs-navbar .nav"
                })
            })
        }(window.jQuery);

        $('a').click(function() {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500);
            return false;
        });


/* --------------- Funções automaticamente executadas --------------*/


localstorageFirstTime();