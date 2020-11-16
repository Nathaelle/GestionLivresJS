"use strict";

// Mon tableau avec ses valeurs initiales :
var livres = ["Les Misérables", "Le Petit Prince", "Voyage au bout de la nuit", "Le rouge et le noir", "L'écume des jours", "Fables", "Le seigneur des anneaux", "Candide", "Voyage au centre de la terre"];

// Fonction chargée d'afficher la liste triée
function afficheListe() {
    var html = ""; // <- Contiendra le HTML
    var len = livres.length; // <- Pour condition d'arrêt de la boucle

    for (var i = 0; i < len; i++) {
        html = html + "<li>" + livres[i] + "</li>"; // On concatène les <li>, on peut aussi faire : html += "<li>" + livres[i] + "</li>";
    }

    document.getElementById("liste").innerHTML = html;// <- On insère la nouvelle liste dans le DOM
}

livres.sort(); // <- On trie les données du tableau
afficheListe(); // <- On affiche la liste initialement

// Listener + fonction chargée d'ajouter un nouvel élément dans la liste
var form = document.getElementById("form");
form.addEventListener("submit", function (e) { // <- On récupère l'évènement (...)

    e.preventDefault(); // <- (...) et on stoppe son comportement par défaut

    var input = document.getElementById("livre"); // On récupère notre ELEMENT input

    livres.push(input.value); // <- On ajoute sa PROPRIETE "VALUE" au tableau
    livres.sort(); // <- On retrie les données du tableau

    afficheListe(); // <- On met à jour la liste à chaque affichage

});