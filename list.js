
// Fonction de création du formulaire de création de la liste

function ajoutListenerNewList() {
  const btnNewList = document.querySelector(".new-list-btn");
  btnNewList.addEventListener("click", function () {
    const listSection = document.querySelector("#list-section");
    const newListForm = document.createElement("div");
    newListForm.innerHTML =
      "<form><input name='task' placeholder='Nouvelle tache'></input></form>";
    listSection.appendChild(newListForm);
  });
}

ajoutListenerNewList();
