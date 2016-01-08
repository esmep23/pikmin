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


    //localStorage.clear();

    $('section').css('height',$(window).height());
    $('#busqueda .contenido').css('height',$(window).height()-150);
    $('#_info .contenido').css('height',$(window).height()-150);
    $('section').hide();
    pantallaActual = $('#home');
    pantallaActual.show();
    $('header form').hide();

    //TweenLite.to($('header form'), 1, { alpha:0 });
    
    //BOTONES
    $('.boton-entrar').click(function(){
      var value = localStorage.getItem('token');
      //alert(value);
      if(value){

       cambioPantalla($('#busqueda')); 

      }else{

        cambioPantalla($('#registro'));
      }

    });

    $('.guarda-registro').click(function(){
        cambioPantalla($('#busqueda'));
    });

    $('article').click(function(){

        cambioPantalla($('#_info'));
    });

    $('li[rel]').click(function(){
        var target = $(this).attr('rel');
        onMenu = true;
        toggle_visibility();
        cambioPantalla($(target));
    });


    /*********************************************************************************************/
    /*********************************************************************************************/

    $("#chooseFile").click(function(e){
      e.preventDefault();
      $("input[type=file]").trigger("click");
    });

    $("input[type=file]").change(function(){
      var file = $("input[type=file]")[0].files[0];            
      $("#preview").empty();
      $("button#chooseFile").css('display','none');
      $(".takePick #info").css('display','none');
      displayAsImage3(file, "preview");
      
      $info = $(".takePick #info");
      $info.empty();
      if (file && file.name) {
        $info.append("<li>name:<span>" + file.name + "</span></li>");
      }
      if (file && file.type) {
        $info.append("<li>size:<span>" + file.type + " bytes</span></li>");
      }
      if (file && file.size) {
        $info.append("<li>size:<span>" + file.size + " bytes</span></li>");
      }
      if (file && file.lastModifiedDate) {
        $info.append("<li>lastModifiedDate:<span>" + file.lastModifiedDate + " bytes</span></li>");
      }
      $info.listview("refresh");
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
        //alert(1);

        pantallaActual.hide();
        //alert(2);
        limpiar(argument);

        //alert(3);
        argument.show();
        //alert(4);
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


 function displayAsImage3(file, containerid) {
    if (typeof FileReader !== "undefined") {
      var container = document.getElementById(containerid),
          img = document.createElement("img"),
          reader;
      container.appendChild(img);
      reader = new FileReader();
      reader.onload = (function (theImg) {
        return function (evt) {
          theImg.src = evt.target.result;
        };
      }(img));
      reader.readAsDataURL(file);
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

        cambioPantalla($('#_info'));

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

            $('#_info .resultado > div').empty();
            $('#_info .informacion-lugar').empty();

            $('#_info .resultado > div').append(nombre+'</div><div onclick="cargoMapa('+mapa+')">VER MAPA');
            $('#_info .informacion-lugar').append(descripcion);

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

function cargoActividades(id_playa){
    $('#_info .mActividades').empty();
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
                $('#_info .mActividades').append('<div class="item item-actividades"><i class="fa '+icono+'"></i></div>');
            });
        }              
      },
      error : function(error){     
          console.log(error);
      }
    });
}

function cargoServicios(id_playa){
    $('#_info .mServicios').empty();
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
                $('#_info .mServicios').append('<div class="item item-servicios"><i class="fa '+icono+'"></i></div>');
            });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });
}


function cargoMapa(argument1, argument2){
  //alert(argument1 +' - '+argument2);
  cambioPantalla($('#mapa'));
  $('#mapa .contenido').empty();
  $('#mapa .contenido').append('<iframe src = "https://maps.google.com/maps?q='+argument1+','+argument2+'&hl=es;z=8&amp;output=embed" style="width:100%; height: 500px"></iframe>');
}


function guardoDatos(){
  nick = $('#nick').val();
  email = $('#email').val();
  pais = $('#pais').val();
  anio = $('#anio').val();
  
  var datos ={
      'nick': nick,
      'email': email,
      'pais': pais,
      'anio': anio
    }
    $.ajax({
      url: direccion+'actions/guardoRegistro.php',
      type: "POST",
      cache: true,
      dataType: "json",
      data: datos,
      success: function(response){  
        //alert(response); 

        var obj = response;
        localStorage.setItem('token', obj);

        cambioPantalla($('#busqueda'));
      },
      error : function(error){     
          //alert(error);
      }

    }); 
}
