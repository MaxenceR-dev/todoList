// Fonction de création du formulaire de création de la liste

function ajoutListenerNewList() {
  const btnNewList = document.querySelector(".new-list-btn");
  btnNewList.addEventListener("click", function () {
    const listSection = document.querySelector("#list-section");
    const newListForm = document.createElement("div");
    newListForm.innerHTML =
      "<input type='text' name='task-name' placeholder='Nouvelle tache' class='task-name'></input><input type='number' name='importance-task' class='importance-task' placeholder='importance de votre tache' min='1' max='5'></input></br><button class='submit-task'>Nouvelle tache</button>";
    listSection.appendChild(newListForm);
  });
}

// Récupération des datas du formulaire + création de la tache
function creationNewTask() {
  const btnNewTask = document.querySelector(".submit-task");
  btnNewTask.addEventListener("click", function (e) {
    e.preventDefault();
    const nameTask = document.querySelector(".task-name");
    const importanceTask = document.querySelector(".importance-task");
    console.log(nameTask.value, importanceTask.value);
  });
}

// Appel des fonctions
ajoutListenerNewList();
creationNewTask();
