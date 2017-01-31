
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	var posXinit = 0; // Position horizontale initile de la souris
	var posYinit = 0; // Positions verticale initile de la souris
	var posXfin = 0; // Position horizontale finale de la souris
	var posYfin = 0; // Position verticale finale de la souris
	var presse = false; //Indique la pression sur la souris	

	// Developper les 3 fonctions gérant les événements
	this.presser = function(evt){
		this.presse = true;
		var mousePosition = getMousePosition(canvas, evt);
		this.posXinit = mousePosition.x;
		this.posYinit = mousePosition.y;
		console.log("x0: "+ this.posXinit + "y0: "+ this.posYinit);
	}.bind(this);
	
	this.deplacer = function(evt){
		if(this.presse){
			var mousePosition = getMousePosition(canvas, evt);
			this.posXfin = mousePosition.x;
			this.posYfin = mousePosition.y;
			console.log("xi: "+ this.posXfin + "yi: "+ this.posYfin);
		}
	}.bind(this);
	
	this.relacher = function(evt){
		var mousePosition = getMousePosition(canvas, evt);
		this.posXfin = mousePosition.x;
		this.posYfin = mousePosition.y;
		this.presse = false;
		console.log("xn: "+ this.posXfin + "yn: "+ this.posYfin);
	}.bind(this);
	

	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown', this.presser, false);
	canvas.addEventListener('mousemove', this.deplacer, false);
	canvas.addEventListener('mouseup', this.relacher, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



