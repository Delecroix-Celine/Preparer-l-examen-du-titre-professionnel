console.log("Application chargée");

// Gestion du formulaire d'ajout de tâche
const taskForm = document.getElementById("taskForm");
if (taskForm) {
  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    if(title.trim() === "") {
      alert("Le titre est obligatoire !");
      return;
    }

    // Simulation de l'ajout de tâche (API à implémenter côté back-end)
    alert(`Tâche ajoutée : ${title}`);
    
    // Réinitialiser le formulaire
    taskForm.reset();
  });
}

// Gestion des boutons modifier / supprimer sur le Dashboard
const taskList = document.querySelector("#task-list ul");
if (taskList) {
  taskList.addEventListener("click", function(event) {
    if(event.target.classList.contains("delete")) {
      const li = event.target.closest("li");
      li.remove();
      alert("Tâche supprimée !");
    }
    if(event.target.classList.contains("edit")) {
      const li = event.target.closest("li");
      const newTitle = prompt("Modifier le titre de la tâche :", li.firstChild.textContent.trim());
      if(newTitle) {
        li.firstChild.textContent = newTitle + " ";
        alert("Tâche modifiée !");
      }
    }
  });
}