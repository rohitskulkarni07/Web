const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World!!!");

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Hello World!!!");
});

function alertFunction() {
  alert("Hello World!!!");
}

const btn5 = document.querySelector("#btn5");
btn5.onclick = alertFunction;

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", alertFunction);

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", (e) => {
  console.log(e); // event object
  console.log(e.target); // target button
  e.target.style.background = 'blue'; //setting blue background after click
}); 