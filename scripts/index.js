const canvas = document.querySelector('canvas')
canvas.width = 600
canvas.height = 600

const ctx = canvas.getContext('2d')

const colunas = 7
const mapa = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,1,1,1,1,1,1],]

const paredes = []

for (let i = 0; i < mapa.length; i++) {
    for(let j = 0; j < colunas; j++){
        if(mapa[i][j]){
            const parede = new Parede({
                    x: j,
                    y: i
                })
            paredes.push(parede)

        }
    }
}

window.requestAnimationFrame(loop)
function loop() {
    paredes.forEach(parede =>{
        parede.draw()
        console.log(parede)
    })
}