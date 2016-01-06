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

var direccion = "http://pocket.ec/dev/beach_593/";

$( document ).ready(function() {
    $('section').css('height',$(window).height());
    $('#busqueda .contenido').css('height',$(window).height()-150);
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


    getPlayas();

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

/************************************************************************************************/
/************************************************************************************************/
/************************************************************************************************/

/****************************************************************/
/*   FUNCIONES   */
/****************************************************************/


function getPlayas() {  
    $.ajax({
      url: direccion+'actions/593_getInfo.php',
      type: "POST",
      cache: false,
      dataType: "json",
      success: function(response){  
        $('#busqueda .contenido').empty();
        //$('#busqueda .contenido').css('overflow-y','scroll');
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            id_playa = value.id_playa;
            nombre = value.nombre;
            slug = value.slug;
            pais = value.pais;
            nombrePais = value.nombre_pais;
            ciudad = value.ciudad;
            nombreCiudad = value.nombre_ciudad;
            provincia  = value.provincia ;
            nombreProvincia = value.nombre_provincia;
            calle = value.calle;
            mapa = value.mapa;
            status = value.status;
            descripcion = value.descripcion;
            foto = value.foto;

            $('#busqueda .contenido').append('<article class="playa-'+id_playa+'"><div onclick="cargoDetalle('+id_playa+');"><figure class="col-sm-4 col-xs-4"><figcaption>'+nombre+'</figcaption><img src="img/playa.jpg" /></figure>'+nombrePais+' -  '+nombreCiudad+' -  '+nombreProvincia+'<div class="detalles col-sm-4 col-xs-6"><h5>Actividades</h5><div class="mActividades"></div><h5>Servicios</h5><div class="mServicios"></div></div><div class="rated col-sm-6 col-xs-2"><div class="stars"><i lass="fa fa-star"></i></div><span>25</span></div></div></article>');
            cargoActividades(id_playa);
            cargoServicios(id_playa);            
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });     
}

function cargoDetalle(idPlaya){
    //cambio pantalla
    cambioPantalla($('#info'));

    var datos ={
    'playa': idPlaya
    }

    $.ajax({
      url: direccion+'actions/593_getInfobyID.php',
      type: "POST",
      cache: false,
      dataType: "json",
      data: datos,
      success: function(response){  
        $('#busqueda .contenido').empty();
        $('#busqueda .contenido').css('overflow-y','scroll');
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            id_playa = value.id_playa;
            nombre = value.nombre;
            slug = value.slug;
            pais = value.pais;
            nombrePais = value.nombre_pais;
            ciudad = value.ciudad;
            nombreCiudad = value.nombre_ciudad;
            provincia  = value.provincia ;
            nombreProvincia = value.nombre_provincia;
            calle = value.calle;
            mapa = value.mapa;
            status = value.status;
            descripcion = value.descripcion;
            foto = value.foto;

            $('#info .resultado > div').empty();
            $('#info .informacion-lugar').empty();

            $('#info .resultado > div').append(nombre);
            $('#info .informacion-lugar').append(descripcion);

            cargoActividades(id_playa);
            cargoServicios(id_playa);
           // $('#busqueda .contenido').append('<article><div onclick="cargoDetalle('+id_playa+');"><figure class="col-sm-4 col-xs-4"><figcaption>'+nombre+'</figcaption><img src="img/playa.jpg" /></figure>'+nombrePais+' -  '+nombreCiudad+' -  '+nombreProvincia+'<div class="detalles col-sm-4 col-xs-6"><h5>Actividades</h5><div class="item item-actividades"><i class="fa fa-car"></i></div><div class="item item-actividades"><i class="fa fa-bug"></i></div><div class="item item-actividades"><i class="fa fa-ambulance"></i></div><div class="item item-actividades"><i class="fa fa-money"></i></div><div class="item item-actividades"><i class="fa fa-twitch"></i></div><div class="item item-actividades"><i class="fa fa-rocket"></i></div><h5>Servicios</h5><div class="item item-servicios"><i class="fa fa-tree"></i></div><div class="item item-servicios"><i class="fa fa-university"></i></div><div class="item item-servicios"><i class="fa fa-paper-plane"></i></div><div class="item item-servicios"><i class="fa fa-shopping-basket"></i></div><div class="item item-servicios"><i class="fa fa-tint"></i></div><div class="item item-servicios"><i class="fa fa-gavel"></i></div></div><div class="rated col-sm-6 col-xs-2"><div class="stars"><i lass="fa fa-star"></i></div><span>25</span></div></div></article>');
            
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });
}

function cargoActividades(id_playa){
    $('#info .mActividades').empty();
    var datos ={
    'id_playa': id_playa
    }

    $.ajax({
      url: direccion+'actions/593_getActividades.php',
      type: "POST",
      cache: false,
      dataType: "json",
      data: datos,
      success: function(response){  
        if(response!=null && response!='' && response!='[]'){ 
            $.each(response,function(key,value){ 
                playa = value.playa;
                actividades = value.actividades;
                nombreActividad = value.nombreActividad;
                icono = value.icono;
                $('#busqueda .playa-'+playa+' .mActividades').append('<div class="item item-actividades"><i class="fa '+icono+'"></i></div>');
                $('#info .mActividades').append('<div class="item item-actividades"><i class="fa '+icono+'"></i></div>');
            });
        }              
      },
      error : function(error){     
          console.log(error);
      }
    });
}

function cargoServicios(id_playa){
    $('#info .mServicios').empty();
    var datos ={
    'id_playa': id_playa
    }
    $.ajax({
      url: direccion+'actions/593_getServicios.php',
      type: "POST",
      cache: false,
      dataType: "json",
      data: datos,
      success: function(response){  
        if(response!=null && response!='' && response!='[]'){ 
            $.each(response,function(key,value){ 
                playa = value.playa;
                servicios = value.servicios;
                nombreServicio = value.nombreServicio;
                icono = value.icono;
                
                $('#busqueda .playa-'+playa+' .mServicios').append('<div class="item item-servicios"><i class="fa '+icono+'"></i></div>');
                $('#info .mServicios').append('<div class="item item-servicios"><i class="fa '+icono+'"></i></div>');
            });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });
}

function search_by_text(argument){

}