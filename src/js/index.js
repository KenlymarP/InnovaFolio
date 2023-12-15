import hamburgerMenu from './menu_hamburguesa.js';
import scrollTopButton from './scroll_top_button.js';
import scrollSpy from './scroll_spy.js';
/* import {relojDigital, alarma} from './reloj_y_alarma.js';
import {moveBall, shortcuts} from './eventos_de_teclado.js';
import countdown from './cuenta_regresiva.js';
import scrollTopButton from './scroll_top_button.js';
import darkMode from './dark_mode.js';
import multimediaResponsiva from './multimedia_responsiva.js';
import responsiveTester from './prueba_responsive.js';
import userDeviceInfo from './user_agent.js';
import estadoRed from './estado_red.js';
import webCam from './web_cam.js';
import obtenerGeolocalizacion from './geolocalizacion.js';
import filtroBusqueda from './filtro_de_busqueda.js';
import draw from './sorteo.js';
import slider from './carrusel.js';
import smartVideo from './smart_video.js';

import formValidations from './validacion_de_formulario.js';
import speechReader from './narrador.js'; */
const d=document;
d.addEventListener('DOMContentLoaded', e=>{
	hamburgerMenu(".panel-btn", ".panel", ".menu a");
	scrollTopButton('.scroll-top-btn');
	scrollSpy();
/* 	relojDigital("#reloj", "#activar-reloj", "#desactivar-reloj");
	alarma('./sonido/alarma.mp3', "#activar-alarma", "#desactivar-alarma");
	countdown('countdown', 'Jan 01, 2023 24:00:00', '🎉 🎊 Feliz y Prospero Año Nuevo 🎊 🎉');
	scrollTopButton('.scroll-top-btn');
	multimediaResponsiva('youtube', 
		'(min-width: 1024px)', 
		`<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91" target="_blank" rel="noopener">Ver Video</a>`, 
		`<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
	responsiveTester('response-tester');
	userDeviceInfo('user-agent');
	webCam('webcam');
	obtenerGeolocalizacion('geolocalizacion');
	filtroBusqueda('.card-filter', '.card', 'mensaje');
	draw('#btn-winner', '.player');
	slider();
	smartVideo();
	
	formValidations();
}) */


});

/*d.addEventListener('keydown', (e)=>{
	shortcuts(e);
	moveBall(e, '.ball', '.stage');

darkMode('.dark-theme-btn', 'dark-mode');
 estadoRed();
speechReader(); */