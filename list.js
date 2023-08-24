function ajoutListenerNewList() {
  const btnNewList = document.querySelector(".new-list-btn");
  btnNewList.addEventListener("click", function() {

   const listSection = document.querySelector("#list-section");
   const newListForm = document.createElement("h2");
   newListForm.innerText = "Nouvelle liste";

   listSection.appendChild(newListForm);

  });
}

ajoutListenerNewList();