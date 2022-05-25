const password = document.querySelector("#password");
const background = document.querySelector(".background");

password.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  let inputLength = inputValue.length;
  let value = 20 - inputLength * 2;
  console.log(value);

  background.style.filter = `blur(${value}px)`;
});
