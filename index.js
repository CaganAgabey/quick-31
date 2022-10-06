const pepebg = document.getElementById("bg-image")
const firstimg = document.getElementById("img");
const firsttext = document.getElementById("firsttext");
const aftertext = document.getElementById("aftertext");
const leftbutton = document.getElementById("leftbutton");
const rightbutton = document.getElementById("rightbutton");
const pepesection = document.getElementById("pepeSection");
const titletext = document.getElementById("titletext");

function pepeonclick() {
	pepebg.style.transition = "1s"
	pepebg.style.filter = "blur(0px)"
	pepebg.style.width = "550px"
	pepebg.style.height = "550px"
	pepesection.style.cursor = "default"
	firstimg.style.transition = "1s"
	firstimg.style.filter = "blur(50px)"
	firstimg.style.width = "5000px"
	firstimg.style.height = "5000px"
	firstimg.style.opacity = "0"
	leftbutton.style.transition = "1.5s"
	leftbutton.style.left = "53%"
	rightbutton.style.transition = "1.5s"
	rightbutton.style.right = "53%"
	titletext.style.transition = "2s"
	titletext.style.top = "-20%"
	setTimeout(() => {
		pepebg.style.transform = "translate(-50%, -75%)"
		setTimeout(() => {
			aftertext.style.transition = "0.2s"
			aftertext.style.opacity = "1"
			aftertext.style.fontSize = "75px"
			titletext.style.visibility = "hidden"
			pepesection.style.visibility = "hidden"
		}, 500)
	}, 800)
}
