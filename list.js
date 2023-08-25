// Fonction de création du formulaire de création de la liste

function ajoutListenerNewList() {
  const btnNewList = document.querySelector(".new-list-btn");
  btnNewList.addEventListener("click", function () {
    const listSection = document.querySelector("#list-section");
    const newListForm = document.createElement("div");
    newListForm.innerHTML =
      "<form class='task-form'><input name='task' placeholder='Nouvelle tache' class='task-name'></input><input type='number' name='importance-task' placeholder='importance de votre tache' min='1' max='5'></input></br><button class='submit-task'>Nouvelle tache</button></form>";
    listSection.appendChild(newListForm);
  });
}

// Récupération des datas du formulaire + création de la tache
function creationNewTask() {
  const btnNewTask = document.querySelector(".submit-task");
  btnNewTask.addEventListener("click", function () {
    const nameTask = document.querySelector(".task-name");
    const importanceTask = document.querySelector(".importance-task");
    console.log(nameTask.value, importanceTask.value);
  });
}

// Appel des fonctions
ajoutListenerNewList();
creationNewTask();
