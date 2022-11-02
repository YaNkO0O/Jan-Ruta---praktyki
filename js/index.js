const p = document.querySelector("p");
const btn = document.querySelector(".btn");

function changeColor() {
	p.classList.toggle("changeColor");
}

btn.addEventListener("click", changeColor);
wdad