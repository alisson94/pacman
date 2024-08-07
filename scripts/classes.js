class Parede{
    constructor({
        x, y
    }){
        this.tamanho = 30
        this.posicao = {
            x: this.tamanho*x,
            y: this.tamanho*y
        }
    }
    draw() {
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.posicao.x, this.posicao.y, this.tamanho, this.tamanho)
    }
}