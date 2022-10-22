export default function menuBurger(button, menu) {
	button.addEventListener("click", () => {
		let body = document.querySelector("body")
		button.classList.toggle("animate")
		menu.classList.toggle("isShowing")
		body.classList.toggle("isLocked")
	})
}