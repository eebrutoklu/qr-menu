import { renderButtons, renderMenuItems } from "./scripts/ui.js";
const buttonsArea = document.getElementById("buttons");

let data;
async function fetchMenu() {
  const res = await fetch("./db.json");
  data = await res.json();
}

//menulist

window.addEventListener("DOMContentLoaded", () => {
  renderButtons("All");
  fetchMenu().then(() => renderMenuItems(data.menu));
});

//buttons

buttonsArea.addEventListener("click", (event) => {
  if (event.target.id == "buttons") return; //return koşul sağlanırsa durur.
  renderButtons(event.target.innerText);

  const selectedCategory = event.target.dataset.id;

  if (selectedCategory === "all") {
    renderMenuItems(data.menu);
  } else {
    const filtred = data.menu.filter(
      (item) => item.category === selectedCategory
    );

    renderMenuItems(filtred);
  }
});
