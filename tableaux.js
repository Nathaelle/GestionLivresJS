"use strict";

/* var livre1 = {
    auteur: "Victor Hugo",
    titre: "Les Misérables",
    genre: "Classique"
} */

/**
 * Prototype représentant un Livre (comme un ensemble de caractéristiques communes à tout Livre)
 * (Première lettre en Majuscule par convention)
 * @param {string} titre : Titre du livre
 * @param {string} auteur : Auteur du livre
 * @param {string} genre : Genre littéraire
 */
var Livre = function (titre, auteur, genre) {
    this.titre = titre;
    this.auteur = auteur;
    this.genre = genre;
};

// Création de nos objets type Livre (objets concrets, c'est à dire avec des valeurs renseignées)
var livre1 = new Livre("les Misérables", "Victor Hugo", "Classique");
var livre2 = new Livre("Le Petit Prince", "St Exupéry", "Classique");
var livre3 = new Livre("Voyage au bout de la nuit", "Céline", "Classique");
var livre4 = new Livre("le rouge et le noir", "Stendhal", "Classique");
var livre5 = new Livre("L'écume des jours", "Boris Vian", "Classique");
var livre6 = new Livre("Fables", "Jean de la Fontaine", "Classique");
var livre7 = new Livre("Le seigneur des anneaux", "J.R.R Tolkien", "Fantasy");
var livre8 = new Livre("Candide", "Voltaire", "Classique");
var livre9 = new Livre("Voyage au centre de la terre", "Jules Verne", "Classique");

// bibliotheque est un TABLEAU
// chaque élément est un OBJET
var bibliotheque = [livre1, livre2, livre3, livre4, livre5, livre6, livre7, livre8, livre9];

// Pour rappel...
console.log(bibliotheque[0].auteur);
console.log(bibliotheque[2].titre);

// Mon tableau avec ses valeurs initiales :
//var livres = ["les Misérables", "le Petit Prince", "Voyage au bout de la nuit", "le rouge et le noir", "L'écume des jours", "fables", "Le seigneur des anneaux", "Candide", "Voyage au centre de la terre"];


// Appel des fonctions : affichage de la liste "initial"
var len = bibliotheque.length;
for(var i = 0; i < len; i++) {
    bibliotheque[i].titre = upperize(bibliotheque[i].titre); // <- On met toutes les premières lettres en majuscules pour faciliter le tri
    bibliotheque[i].auteur = upperize(bibliotheque[i].auteur);
    bibliotheque[i].genre = upperize(bibliotheque[i].genre);
}
bibliotheque.sort(function compare(a, b) {
    if (a.titre < b.titre) {
        return -1;
    } else if (a.titre > b.titre) {
        return 1;
    } else {
        return 0;
    }
}); // <- On trie les données du tableau sur le critère de la propriété titre de nos objets
  
afficheListe(); // <- On affiche la liste initialement


/**
 * Renvoie la chaîne de caractère avec sa première lettre en Majuscule
 * @param {string} str : Une variable DE TYPE "STRING"
 * @returns {string} : La chaîne modifiée
 */
function upperize(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

/**
 * Fonction chargée d'afficher la liste triée
 * Modifie le DOM directement
 * Pas de retour, mais attention, on utilise bibliotheque qui est globale (même si, à terme, ce n'est pas conseillé..)
 */
function afficheListe() {
    var html = ""; // <- Contiendra le HTML "reconstitué"
    var len = bibliotheque.length; // <- Pour condition d'arrêt de la boucle

    for (var i = 0; i < len; i++) {
        html = html + "<li>" + bibliotheque[i].titre + "</li>"; // On concatène les <li>, on peut aussi faire : html += "<li>" + livres[i] + "</li>";
    }

    document.getElementById("liste").innerHTML = html;// <- On insère la nouvelle liste dans le DOM
    console.log(bibliotheque);
}


// Récupération du formulaire sous la forme d'un élément HTML
var form = document.getElementById("form");
/**
 * Listener sur l'event "submit" du formulaire d'ajout (form)
 * @callback {function} : 
 * Récupère la valeur saisie par l'utilisateur à partir d'un élément input
 * Réorganise le tableau
 * Rappelle l'affichage
 * @param {Event} e : Evènement récupéré sous forme d'objet Event
 */
form.addEventListener("submit", function (e) { // <- On récupère l'évènement (...)

    e.preventDefault(); // <- (...) et on stoppe son comportement par défaut

    var inputTitre = document.getElementById("titre"); // On récupère notre ELEMENT input
    var inputAuteur = document.getElementById("auteur"); // On récupère notre ELEMENT input
    var inputGenre = document.getElementById("genre"); // On récupère notre ELEMENT input

    var livre = new Livre(upperize(inputTitre.value), upperize(inputAuteur.value), upperize(inputGenre.value));

    bibliotheque.push(livre); // <- On ajoute sa PROPRIETE "VALUE" au tableau
    bibliotheque.sort(function compare(a, b) {
        if (a.titre < b.titre) {
            return -1;
        } else if (a.titre > b.titre) {
            return 1;
        } else {
            return 0;
        }
    }); // <- On retrie les données du tableau

    afficheListe(); // <- On met à jour la liste à chaque affichage

});

