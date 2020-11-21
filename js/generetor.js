let content = document.querySelector(".monte-de-seta")

for (var i = 0; i < 50; i++) {
	img = document.createElement('img')
	img.src = './imgs/seta.png'
	img.className = "seta"

	content.appendChild(img)
}