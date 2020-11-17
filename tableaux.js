"use strict";

/* Exercice 4 : (revoir charAt() dans doc, ainsi que slice() )
Une chaîne de caractères, est considérée en JS, comme un tableau de caractères. Chaque caractère a donc, un indice, qui exprime sa position dans la chaîne.
4.0. Mettre toutes les premières lettres des titres en minuscules (pour ne pas s'embêter avec la saisie)
4.1. A l'aide de la documentation, afficher l'ensemble des premiers caractères du tableau, en Majuscules.
4.2. Afficher cette fois, pour l'ensemble des éléments du tableau, les chaînes de caractères à partir de leur deuxième caractère
4.3 A partir des observations précédentes, modifier chacun des éléments, en reconstituant les chaînes de caractères avec leur première lettre en majuscule. */

// var str = "Bonjour !";
// console.log(str.charAt(0));

var livre = {};

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