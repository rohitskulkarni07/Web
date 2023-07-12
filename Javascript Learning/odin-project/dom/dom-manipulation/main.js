const container = document.querySelector("#container");

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";
p.classList.add("red-p");
container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
h3.classList.add("blue-heading");
container.appendChild(h3);

const div = document.createElement("div");
div.classList.add("sub-div");
div.style.backgroundColor = "pink";
div.style.border = "4px solid black";

const subH3 = document.createElement("h3");
subH3.textContent = "I\'m in div";


const subP = document.createElement("p");
subP.textContent = "ME TOO!!!";

div.appendChild(subH3);
div.appendChild(subP);

container.appendChild(div);
