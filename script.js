let input = document.getElementById("tache");
let bouton = document.getElementById("ajouter");
let liste = document.getElementById("liste");

bouton.addEventListener("click", function(){

    if(input.value === ""){
        alert("Veuillez saisir une tâche !");
        return;
    }

    // Création de la tâche
    let li = document.createElement("li");
    li.textContent = input.value;

    // Création du bouton supprimer
    let supprimer = document.createElement("button");
    supprimer.textContent = "Supprimer";
    supprimer.className = "supprimer";

    // Suppression de la tâche
    supprimer.addEventListener("click", function(){
        li.remove();
    });

    // Ajout du bouton dans le li
    li.appendChild(supprimer);

    // Ajout du li dans la liste
    liste.appendChild(li);

    // Vider le champ
    input.value = "";

});
