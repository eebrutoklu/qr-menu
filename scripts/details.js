// url'deki arama parametresine(search-param) erişme
//URLSearchParams id alma

const params = new URLSearchParams(window.location.search);
const paramId = params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("../db.json");
  const data = await res.json();
  console.log(paramId, data);
  const product = data.menu.find((item) => item.id == paramId); //tek bir ürün bulur ve getirir
  console.log(product);
  renderPage(product);
});

const outlet = document.getElementById("outlet");

function renderPage(product) {
  outlet.innerHTML = ` <div class="d-flex justify-content-between align-items-center">
        <a href="/">
          <img src="./images/logo.jpg" alt="" srcset="" style="width: 90px" />
        </a>
        <p style="font-size: 12px" class="mt-3">
          anasayfa / ${product.category} / ${product.title.toLowerCase()} 
        </p>
      </div>
      <div class="mx-3">
        <h3 class="text-center">${product.title}</h3>
        <img
          src="${product.img}"
          alt="oreo"
          class="rounded object-fit-cover shadow"
          style="width: 100%; height: 250px"
        />
        <h5 class="mt-3">
          <span>Product Category: </span>
          <span class="text-success">${product.category} </span>
        </h5>
        <h5 class="mt-2">
          <span>Product Price: </span>
          <span class="text-success"> ${Math.floor(
            product.price * 30
          )}  ₺</span>
        </h5>
        <p class="lead" style="font-size: 18px">
         ${product.bigDesc}  </p>
      </div>`;
}
