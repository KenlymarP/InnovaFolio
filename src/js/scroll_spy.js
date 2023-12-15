const d=document;

export default function scrollSpy() {
const $secciones = d.querySelectorAll('section[data-scroll-spy]'); //Obteniendo todas la secciones


	//Le estoy pasando las secciones como entradas. Para que un elemento se tenga el intersection necesito pasarlo como entradas, luego de que cada entrada (seccion) necesito su id
	const funcionCallback = (entradas) => {
		entradas.forEach((entrada) => {
			const id = entrada.target.getAttribute('id'); //Obteniendo el id de las secciones
			if (entrada.isIntersecting) { //Aqui se pregunta si ya se visualizó la seccion o esta en visualizacion
				
				d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
					'active'
				);
			} else {
				
				d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
			}
		});
	};
	
	const observador = new IntersectionObserver(funcionCallback, {
		
		threshold: [0.15, 0.75], /*La seccion debe verse de 50% a 75% de su contenido*/
		
	});
	/*Le asignanos el observer a las seccion*/
	$secciones.forEach((el) => observador.observe(el));

	
	

}