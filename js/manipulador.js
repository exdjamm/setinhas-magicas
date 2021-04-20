let setas = document.querySelectorAll('.seta')
let offsetY = 0
let offsetX = 0

function regularImagem(event){
	var x = event.clientX - offsetX
	var y = event.clientY - offsetY

	setas.forEach(
		seta => {
			var Sx = seta.x
			var Sy = seta.y


			var deltaX = x - Sx
			var deltaY = y - Sy

			var D = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))/1380
			var escala = (1-D)
			var angulo =  Math.atan2(deltaY, deltaX) //+ Math.PI 

			// console.log(angulo)
			// Não é essa a matematica
			/*var consenoA = (x*Sx + y*Sy)/Math.sqrt(  ((Math.pow(x, 2) + Math.pow(y, 2)) * (Math.pow(Sx, 2) + Math.pow(Sy, 2))))
			var angulo = Math.acos(consenoA)
			// console.log(angulo)
			angulo = 3.14 - angulo*/

			// è essa daqui

			seta.style = `transform: rotate(${angulo}rad) scale(${escala});`

		}

	)
}

const setOffSet = e => {
       offsetY = e.pageY
       offsetX = e.pageX
}

function regularImagemTouch(event){
	touch = event.changedTouches[0]
	regularImagem(touch)
}

document.querySelector('.monte-de-seta').addEventListener("mousemove", regularImagem)
document.querySelector('.monte-de-seta').addEventListener("touchstart", setOffSet)
document.querySelector('.monte-de-seta').addEventListener("touchmove", regularImagemTouch)
