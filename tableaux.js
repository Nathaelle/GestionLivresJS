"use strict";
/*
Exercice 5 : (que l'on verra demain)
Notre tableau contient, jusqu'à présent, des livres, identifiés par leur titre.
Seulement, nous aimerions représenter notre livre, comme ayant un ensemble de caractéristiques, à savoir : son titre bien évidemment mais aussi son auteur, ainsi que le genre auquel il appartient.
5.1. Je vous demanderai donc de représenter un livre, avec la structure adéquate. */

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
var livre1 = new Livre("Les Misérables", "Victor Hugo", "Classique");
var livre2 = new Livre("Le Petit Prince", "St Exupéry", "Classique");
var livre3 = new Livre("Voyage au bout de la nuit", "Céline", "Classique");


console.log(livre1);

var bibliotheque = [livre1, livre2, livre3];

console.log(bibliotheque[0].auteur);
console.log(bibliotheque[2].titre);

// Mon tableau avec ses valeurs initiales :
var livres = ["les Misérables", "le Petit Prince", "Voyage au bout de la nuit", "le rouge et le noir", "L'écume des jours", "fables", "Le seigneur des anneaux", "Candide", "Voyage au centre de la terre"];


// Appel des fonctions : affichage de la liste "initial"
var len = livres.length;
for(var i = 0; i < len; i++) {
    livres[i] = upperize(livres[i]); // <- On met toutes les premières lettres en majuscules pour faciliter le tri
}
livres.sort(); // <- On trie les données du tableau
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

console.log(livres);

/**
 * Fonction chargée d'afficher la liste triée
 * Modifie le DOM directement
 * Pas de retour
 */
function afficheListe() {
    var html = ""; // <- Contiendra le HTML "reconstitué"
    var len = livres.length; // <- Pour condition d'arrêt de la boucle

    for (var i = 0; i < len; i++) {
        html = html + "<li>" + livres[i] + "</li>"; // On concatène les <li>, on peut aussi faire : html += "<li>" + livres[i] + "</li>";
    }

    document.getElementById("liste").innerHTML = html;// <- On insère la nouvelle liste dans le DOM
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

    var input = document.getElementById("livre"); // On récupère notre ELEMENT input

    livres.push(upperize(input.value)); // <- On ajoute sa PROPRIETE "VALUE" au tableau
    livres.sort(); // <- On retrie les données du tableau

    afficheListe(); // <- On met à jour la liste à chaque affichage

});