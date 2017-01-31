
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
	
}

function Forme(){
	var couleur, epaisseur;
	
	this.getCouleur = function(){
		return this.couleur;
	}.bind(this);
	
	this.getEpaisseur = function(){
		return this.epaisseur;
	}.bind(this);	
}

function Rectangle(couleur, epaisseur){
	Forme.call(this, couleur, epaisseur);
	
	
}
Rectangle.prototype = new Forme();

function Ligne(couleur, epaisseur){
	Forme.call(this, couleur, epaisseur);
	
	
}
Ligne.prototype = new Forme();