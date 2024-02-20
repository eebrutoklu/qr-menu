import { buttonData } from "./constans.js";
const buttonsArea = document.getElementById("buttons");
//Menu list JavaScript file
const menuList = document.getElementById("menu-list");

export const renderMenuItems = (data) => {
  const cardsHtml = data
    .map(
      (item) => `
      <a
        id="card"
        href="/detail.html?id=${item.id}"
        class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
      >
        <img
          class="rounded shadow img-fluid"
          src="${item.img}"
        />
        <div class="px">
          <div class="d-flex justify-content-between">
            <h5>${item.title} </h5>
            <p class="text-dark fw-bold"> ${Math.floor(item.price * 30)}  ₺</p>
          </div>
          <p class="lead">
           ${item.desc}
          </p>
        </div>
      </a>
      `
    )
    .join(""); // Convert the array to a string using .join
  menuList.innerHTML = cardsHtml;
};

// dynamic menu botton add

export const renderButtons = (activeText) => {
  buttonsArea.innerText = ""; //prevent continuous button pressing

  buttonData.forEach((btn) => {
    const buttonEle = document.createElement("button");
    buttonEle.className = "btn btn-outline-dark";

    if (btn.text === activeText) {
      buttonEle.classList.add("btn-dark", "text-white");
    }
    buttonEle.setAttribute("data-id", btn.value);
    buttonEle.innerText = btn.text;
    buttonsArea.append(buttonEle);
  });
};
