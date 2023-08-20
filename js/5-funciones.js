document.write('<img id="semaforo-img" src="./images/ROJO.png" width="180" alt="semaforo"></img>');

let COLORES = ['ROJO', 'AMARILLO', 'VERDE']
const semaforoImg = document.querySelector('#semaforo-img')

function semaforoLuz() {
    const color = COLORES.pop()
    console.log(color)
    if (!COLORES.length)
        COLORES = ['ROJO', 'AMARILLO', 'VERDE']

    console.log("./images/"+color+".png")
    semaforoImg.src = "./images/"+color+".png"
    return color
}

const intervalID = setInterval(semaforoLuz, 3500)
