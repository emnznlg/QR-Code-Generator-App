//Selectors
const wrapper = document.querySelector(".wrapper");
const generateBtn = document.querySelector(".wrapper button");
const qrInput = document.querySelector("input");
const qrImage = document.querySelector(".qr-code img");

//Event Listeners

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (qrValue === "") {
    alert("Please type or copy a text...");
  } else {
    wrapper.classList.add("active");
    qrImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  }
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
