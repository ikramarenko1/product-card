// Change size
const sizes = document.querySelectorAll(".size")

function changeSize() {
	sizes.forEach((el) => el.classList.remove("active"))
	this.classList.add("active")
}

sizes.forEach((el) => el.addEventListener("click", changeSize))


// Change color
let oldColor = "blue"
let animationEnd = true

const colors = document.querySelectorAll(".color")
const shoes = document.querySelectorAll(".shoe")
const gradients = document.querySelectorAll(".gradient")

function changeColor() {
	if (!animationEnd) {
		console.log("Color clicked while animation was running!")
	}

	// ! Change color
	colors.forEach((el) => el.classList.remove("active"))
	this.classList.add("active")

	// ! Change --primary value
	let colorPrimary = this.getAttribute("primary")
	document.documentElement.style.setProperty("--primary", colorPrimary)

	// ! Change shoe's img
	let color = this.getAttribute("color")
	let shoe = document.querySelector(`.shoe[color="${color}"]`)
	shoes.forEach((el) => el.classList.remove("show"))
	shoe.classList.add("show")

	// ! Change gradient
	gradients.forEach((el) => el.classList.remove("first", "second"))
	let gradient = document.querySelector(`.gradient[color="${color}"]`)
	gradient.classList.add("first")

	let prevGradient = document.querySelector(`.gradient[color="${oldColor}"]`)
	prevGradient.classList.add("second")
	oldColor = color

	// ! Animation
	animationEnd = false
	gradient.addEventListener("animationend", () => {
		animationEnd = true
	})
}

colors.forEach((el) => el.addEventListener("click", changeColor))


// Responsive
let windowSize = window.matchMedia("(max-width: 1000px)")
const cardBackground = document.querySelector(".card__background")

function changeHeightScreen() {
	if (windowSize.matches) {
		let shoeHeight = shoes[0] //.offsetHeight
		cardBackground.style.height = `${shoeHeight * 0.9}px`
	} else { 
		cardBackground.style.height = "475px"
	}
}

changeHeightScreen()

window.addEventListener("resize", changeHeightScreen)