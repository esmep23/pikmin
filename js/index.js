/*
EPS - APP PLAYAS
Autor: Estefania Pulgar Sampedro
Agencia: Keyframe
*/

//detecto screen de pantalla.
var pantallaActual;
var anchoPantalla = $(window).width();
var onMenu = false; //toggle
var onSearch = false; //toggle

$( document ).ready(function() {
    $('section').css('height',$(window).height());
    $('#info .contenido').css('height',$(window).height()-150);
    $('section').hide();
    pantallaActual = $('#home');
    pantallaActual.show();
    $('header form').hide();

    //TweenLite.to($('header form'), 1, { alpha:0 });
    
    //BOTONES
    $('.boton-entrar').click(function(){
        cambioPantalla($('#registro'));
    });

    $('.guarda-registro').click(function(){
        cambioPantalla($('#busqueda'));
    });

    $('article').click(function(){
        cambioPantalla($('#info'));
    });

    $('li[rel]').click(function(){
        var target = $(this).attr('rel');
        onMenu = true;
        toggle_visibility();
        cambioPantalla($(target));
    });


    /*********************************************************************************************/
    /*********************************************************************************************/


}); // document ready


function cambioPantalla(argument){
    if(argument.selector == pantallaActual.selector){
        //alert(1);
    } else {
        console.log( 'nuevo' + argument.selector );
        console.log( 'actual' + pantallaActual.selector );


        pantallaActual.hide();
        limpiar(argument);
        //TweenLite.to(pantallaActual, 0.5, {x:-anchoPantalla, alpha:1, onComplete:limpiar(argument)});
        argument.show();
        
        /*TweenLite.to(argument, 0.0, {x:anchoPantalla, alpha:1, onComplete:function(){ 
            TweenLite.to(argument, 0.5, {x:0});

        } });*/
    }
}

function limpiar(argument){
    pantallaActual = argument;
    //argument.hide();
    pantallaActual.show();
}

function toggle_visibility(id) {
    $('#menu').show();
    
    onMenu = !onMenu;
    if(onMenu){
        $('#menu').show();
        /*TweenLite.to(pantallaActual, 1, { css: { '-webkit-filter': 'brightness(0.8)' } });
        TweenLite.to(pantallaActual, 0.5, {x:200});
        TweenLite.to($('#menu'), 0.5, {x:0});*/
    }else{
        $('#menu').hide();
        /*TweenLite.to(pantallaActual, 1, { css: { '-webkit-filter': 'brightness(1)' } });
        TweenLite.to(pantallaActual, 0.5, {x:0});
        TweenLite.to($('#menu'), 0.5, {x:-200});            */
    } 
}

function toggle_visibility_search() {
     onSearch = !onSearch;
    
    if(onSearch){
        $('header form').show();
       //TweenLite.to($('header form'), 1, { alpha:1 });
    }else{
        $('header form').hide();
       //TweenLite.to($('header form'), 1, { alpha:0 });
    } 
}