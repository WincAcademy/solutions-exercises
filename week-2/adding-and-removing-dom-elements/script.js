console.log("test of mijn javascript werkt");

const animalSpotted = event => {
  console.log("spotted:", event.target.textContent);
  const spottedAnimal = event.target.textContent;
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(spottedAnimal));
  const list = document.getElementById("spotted-animals-list");
  list.appendChild(listItem);
};

const removeFirstItem = () => {
  const firstItem = document.getElementById("spotted-animals-list").firstChild;
  firstItem.remove();
};

const removeAll = () => {
  const spottedAnimalsList = document.getElementById("spotted-animals-list");
  spottedAnimalsList.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", function() {
  const animalButtons = document.querySelectorAll(".big-five-button");
  animalButtons.forEach(function(animalButton) {
    animalButton.addEventListener("click", animalSpotted);
  });

  const removeFirstItemButton = document.getElementById(
    "remove-first-item-button"
  );
  removeFirstItemButton.addEventListener("click", removeFirstItem);

  const removeAllButton = document.getElementById("remove-all-button");
  removeAllButton.addEventListener("click", removeAll);
});
