const testimoni = [
  {
    img: "./assets/image/testi1.jpg",
    text: "Melali.id sangat membantu saya saat berlibur kebali pada tahun 2020,mereka memberikan layanan yang sangat baik, puas dehh. GoodJob",
    tester: "Novie denira, </br> Jakarta",
  },
  {
    img: "./assets/image/testi2.jpeg",
    text: "Tahun lalu liburan ke Bali, semuanya diakomodir oleh Melali.id, recommended banget deh bagi temen2 yang mau pake jasa mereka",
    tester: "Zagat Indrawana, </br> Surabaya",
  },
];

function renderTestimoni(testimoni) {
  let testimoniHTML = "";
  let testimoniArray = [];
  testimoni.forEach((testi) => {
    testimoniHTML += `
      <h1>TESTIMONI</h1>
      <div class="testimoni-card">
        <div class="col">
          <img src="${testi.img}" alt="" />
        </div>
        <div class="col">
          <p id="testimoni-text">${testi.text}</p>
          <p id="tester">${testi.tester}</p>
        </div>
      </div>
    `;
    testimoniArray.push(testimoniHTML);
    testimoniHTML = "";
  });
  return testimoniArray;
}

function changeTestimoni(testimoni) {
  let testimoniArray = renderTestimoni(testimoni);
  let index = 1;
  setInterval(() => {
    document.querySelector("#testimoni").innerHTML = testimoniArray[index];
    index++;
    if (index >= testimoniArray.length) {
      index = 0;
    }
  }, 6000);
}

changeTestimoni(testimoni);

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  if (!mobileMenu.classList.contains("open")) {
    mobileMenu.classList.add("open");
  } else if (mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
  }
});
