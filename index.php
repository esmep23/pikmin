<!DOCTYPE html>
<html>
<head>
	<title>APP PLAYA</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<!-- cdn jquery-->
	<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
	<!-- index.js -->
	<script type="text/javascript" src="js/index.js"></script>
</head>
<body>


<!--
  |================================================================================|
  | MENU															 
  |================================================================================|
	-->
	<section id="menu">
		<header><img src="img/logo.png"></header>
		<div class="contenido">
			<ul>

				<li rel="#registro"><span>Registro<input type="radio" name="menu" ></span></li>
				<li rel="#busqueda"><span>Busqueda<input type="radio" name="menu" ></span></li>
				<li rel="#info"><span>Info<input type="radio" name="menu" ></span></li>
				<li rel="#mapa"><span>Mapa<input type="radio" name="menu" ></span></li>
			</ul>
		</div>
		
	</section>


<!--
  |================================================================================|
  | INICIO															 
  |================================================================================|
	-->
	<section id="home">
		<header><img src="img/logo.png"></header>
		<div class="contenido"></div>
		<footer>
			<div class="boton-entrar">REGISTRO</div>
		</footer>
	</section>

<!--
  |================================================================================|
  | REGISTRO															 
  |================================================================================|
	-->
	<section id="registro">
		<header>
			<div class="main">
				<i class="fa fa-bars" onclick="toggle_visibility('menu');"></i>
				<i class="fa fa-search" onclick="toggle_visibility_search();"></i>
			</div>
			<img src="img/logo.png">
			<form>
				<input type="text" />
			</form>
		</header>
			
		<div class="contenido">
			<form>
				<div class="titulo-form"><h4>CREA TU PERFIL</h4></div>
				<div class="grupo col-md-12">
					<div class="takePick col-sm-6 col-xs-6"><i class="fa fa-camera-retro fa-lg"></i></div>
					<div class="col-sm-6 col-xs-6">
						<select>
						  <option value="volvo">Pais</option>
						  <option value="audi" selected>Paíss</option>
						</select>
						<select>
						  <option value="volvo">1966</option>
						  <option value="audi" selected>2015</option>
						</select>
					</div>
					<input type="text" class="col-sm-12 col-xs-12" placeholder="Nick">
					<input type="text" class="col-sm-12 col-xs-12" placeholder="Email">
				</div>
			</form>
			<h4> LOGIN CON</h4>
			<div class="log_facebook col-sm-6 col-xs-6"><div><i class="fa fa-facebook"></i></div></div>
			<div class="log_google col-sm-6 col-xs-6"><div><i class="fa fa-google"></i></div></div>
		</div>
		<footer>
			<div class="guarda-registro">GUARDAR</div>
		</footer>
	</section>

<!--
  |================================================================================|
  | BUSQUEDA															 
  |================================================================================|
	-->
	<section id="busqueda">
		<header>
			<div class="main">
				<i class="fa fa-bars" onclick="toggle_visibility('menu');"></i>
				<i class="fa fa-search" onclick="toggle_visibility_search();"></i>
			</div>
			<img src="img/logo.png">
			<form>
				<input type="text" />
			</form>
		</header>
		<div class="resultado col-sm-12 col-xs-12"><div>RESULTADOS DE PLAYAS</div></div>
		<div class="contenido">
			<article>
				<figure class="col-sm-4 col-xs-4">
					<figcaption>SALINAS</figcaption>
					<img src="img/playa.jpg" />
				</figure>
				<div class="detalles col-sm-4 col-xs-6">
					<h5>Actividades</h5>
					<div class="mActividades">
						<div class="item item-actividades"><i class="fa fa-car"></i></div>
						<div class="item item-actividades"><i class="fa fa-bug"></i></div>
						<div class="item item-actividades"><i class="fa fa-ambulance"></i></div>
						<div class="item item-actividades"><i class="fa fa-money"></i></div>
						<div class="item item-actividades"><i class="fa fa-twitch"></i></div>
						<div class="item item-actividades"><i class="fa fa-rocket"></i></div>
					</div>
					<h5>Servicios</h5>
					<div class="mServicios">
						<div class="item item-servicios"><i class="fa fa-tree"></i></div>
						<div class="item item-servicios"><i class="fa fa-university"></i></div>
						<div class="item item-servicios"><i class="fa fa-paper-plane"></i></div>
						<div class="item item-servicios"><i class="fa fa-shopping-basket"></i></div>
						<div class="item item-servicios"><i class="fa fa-tint"></i></div>
						<div class="item item-servicios"><i class="fa fa-gavel"></i></div>
					</div>
				</div>
				<div class="rated col-sm-6 col-xs-2">
					<div class="stars"><i class="fa fa-star"></i></div>
					<span>25</span>
				</div>
			</article>
			<article>
				<figure class="col-sm-4 col-xs-4">
					<figcaption>SALINAS</figcaption>
					<img src="img/playa.jpg" />
				</figure>
				<div class="detalles col-sm-4 col-xs-6">
					<h5>Actividades</h5>
					<div class="mActividades">
						<div class="item item-actividades"><i class="fa fa-car"></i></div>
						<div class="item item-actividades"><i class="fa fa-bug"></i></div>
						<div class="item item-actividades"><i class="fa fa-ambulance"></i></div>
						<div class="item item-actividades"><i class="fa fa-money"></i></div>
						<div class="item item-actividades"><i class="fa fa-twitch"></i></div>
						<div class="item item-actividades"><i class="fa fa-rocket"></i></div>
					</div>
					<h5>Servicios</h5>
					<div class="mServicios">
						<div class="item item-servicios"><i class="fa fa-tree"></i></div>
						<div class="item item-servicios"><i class="fa fa-university"></i></div>
						<div class="item item-servicios"><i class="fa fa-paper-plane"></i></div>
						<div class="item item-servicios"><i class="fa fa-shopping-basket"></i></div>
						<div class="item item-servicios"><i class="fa fa-tint"></i></div>
						<div class="item item-servicios"><i class="fa fa-gavel"></i></div>
					</div>
				</div>
				<div class="rated col-sm-6 col-xs-2">
					<div class="stars"><i class="fa fa-star"></i></div>
					<span>25</span>
				</div>
			</article>
			<article>
				<figure class="col-sm-4 col-xs-4">
					<figcaption>SALINAS</figcaption>
					<img src="img/playa.jpg" />
				</figure>
				<div class="detalles col-sm-4 col-xs-6">
					<h5>Actividades</h5>
					<div class="item item-actividades"><i class="fa fa-car"></i></div>
					<div class="item item-actividades"><i class="fa fa-bug"></i></div>
					<div class="item item-actividades"><i class="fa fa-ambulance"></i></div>
					<div class="item item-actividades"><i class="fa fa-money"></i></div>
					<div class="item item-actividades"><i class="fa fa-twitch"></i></div>
					<div class="item item-actividades"><i class="fa fa-rocket"></i></div>
					<h5>Servicios</h5>
					<div class="item item-servicios"><i class="fa fa-tree"></i></div>
					<div class="item item-servicios"><i class="fa fa-university"></i></div>
					<div class="item item-servicios"><i class="fa fa-paper-plane"></i></div>
					<div class="item item-servicios"><i class="fa fa-shopping-basket"></i></div>
					<div class="item item-servicios"><i class="fa fa-tint"></i></div>
					<div class="item item-servicios"><i class="fa fa-gavel"></i></div>
				</div>
				<div class="rated col-sm-6 col-xs-2">
					<div class="stars"><i class="fa fa-star"></i></div>
					<span>25</span>
				</div>
			</article>
		</div>
	</section>

<!--
  |================================================================================|
  | INFO															 
  |================================================================================|
	-->
	<section id="info">
		<header>
			<div class="main">
				<i class="fa fa-bars" onclick="toggle_visibility('menu');"></i>
				<i class="fa fa-search" onclick="toggle_visibility_search();"></i>
			</div>
			<img src="img/logo.png">
			<form>
				<input type="text" />
			</form>
		</header>
		<div class="resultado col-sm-12 col-xs-12"><div>SALINAS</div></div>
		<div class="contenido">
			<article>
				<figure>
					<img src="img/playa.jpg" />
				</figure>
				<div class="rated">
					<span>25</span>
					<div class="stars"><i class="fa fa-star"></i></div>
				</div>
				<div class="detalles">
					<h5>Actividades</h5>
					<div class="mActividades">
						<div class="item item-actividades"><i class="fa fa-car"></i></div>
						<div class="item item-actividades"><i class="fa fa-bug"></i></div>
						<div class="item item-actividades"><i class="fa fa-ambulance"></i></div>
						<div class="item item-actividades"><i class="fa fa-money"></i></div>
						<div class="item item-actividades"><i class="fa fa-twitch"></i></div>
						<div class="item item-actividades"><i class="fa fa-rocket"></i></div>
					</div>
					<h5>Servicios</h5>
					<div class="mServicios">
						<div class="item item-servicios"><i class="fa fa-tree"></i></div>
						<div class="item item-servicios"><i class="fa fa-university"></i></div>
						<div class="item item-servicios"><i class="fa fa-paper-plane"></i></div>
						<div class="item item-servicios"><i class="fa fa-shopping-basket"></i></div>
						<div class="item item-servicios"><i class="fa fa-tint"></i></div>
						<div class="item item-servicios"><i class="fa fa-gavel"></i></div>
					</div>
					<div class="informacion-lugar">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu egestas nibh. Vivamus facilisis orci felis. Mauris ultricies nibh a ligula consequat, et interdum massa dignissim. Phasellus elementum, nisl sit amet semper tincidunt, velit massa imperdiet nunc, in vehicula tortor diam vel tellus. Morbi vitae accumsan ex. Nunc efficitur neque tincidunt eros tincidunt, id bibendum metus pretium. Sed in mauris eleifend, facilisis arcu tristique, aliquet libero. Integer pulvinar felis placerat odio rutrum, eget suscipit odio blandit. Fusce at iaculis risus. Nunc a orci consequat, vehicula lacus quis, dictum ante.
					</div>
				</div>

			</article>
		</div>
	</section>

<!--
  |================================================================================|
  | MAPA															 
  |================================================================================|
	-->
	<section id="mapa">
		<header>
			<div class="main">
				<i class="fa fa-bars" onclick="toggle_visibility('menu');"></i>
				<i class="fa fa-search" onclick="toggle_visibility_search();"></i>
			</div>
			<img src="img/logo.png">
			<form>
				<input type="text" />
			</form>
		</header>
		<div class="resultado col-sm-12 col-xs-12"><div>BUSCAR PLAYAS</div></div>
		<div class="contenido">
			<object>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.960197538635!2d-79.90756268493253!3d-2.1688396378380608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTAnMDcuOCJTIDc5wrA1NCcxOS40Ilc!5e0!3m2!1ses-419!2sec!4v1448903204527" width="300" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
			</object>
		</div>
	</section>
</body>
</html>