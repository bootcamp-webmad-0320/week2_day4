// const app = {
//     name: 'Basic drawing App for HTML5 Canvas',
//     author: 'Germán Álvarez',
//     version: '1.0.0',
//     description: 'App para realizar trazados básicos en Canvas',
//     license: undefined,
//     canvasDom: undefined,
//     ctx: undefined,
//     canvasSize: {
//         height: window.innerHeight,
//         width: window.innerWidth
//     },
//     init(id) {
//         this.canvasDom = document.getElementById(id)
//         this.canvasDom.width = this.canvasSize.width
//         this.canvasDom.height = this.canvasSize.height
//         this.ctx = this.canvasDom.getContext('2d')
//     },
//     drawFilledSquare() {
//         this.ctx.fillStyle = 'red'
//         this.ctx.fillRect(this.canvasSize.width / 2 - 150, this.canvasSize.height / 2 - 150, 300, 300)

//         this.ctx.fillStyle = 'blue'
//         this.ctx.fillRect(this.canvasSize.width / 2 - 50, this.canvasSize.height / 2 - 50, 100, 100)
//     },
//     drawLinearSquare() {
//         this.ctx.strokeStyle = 'green'
//         this.ctx.lineWidth = 10
//         this.ctx.strokeRect(this.canvasSize.width / 2 - 250, this.canvasSize.height / 2 - 250, 500, 500)
//     },
//     drwaLine() {
//         this.ctx.strokeStyle = 'green'
//         this.ctx.lineWidth = 10
//         this.ctx.setLineDash([80, 40])
//         this.ctx.beginPath()
//         this.ctx.moveTo(100, this.canvasSize.height / 2)
//         this.ctx.lineTo(this.canvasSize.width - 100, this.canvasSize.height / 2)
//         this.ctx.stroke()
//     },
//     drawMultipleLines() {
//         this.ctx.beginPath()
//         for (let i = 0; i < 10; i++) {
//             this.ctx.moveTo(100, 100 * i)
//             this.ctx.lineTo(this.canvasSize.width - 100, this.canvasSize.height / 2)
//         }
//         this.ctx.stroke()
//     },
//     drawArc() {
//         this.ctx.lineWidth = 30
//         this.ctx.strokeStyle = "green"
//         this.ctx.fillStyle = "red"
//         this.ctx.arc(this.canvasSize.width / 2, this.canvasSize.height / 2, 100, 0, Math.PI)
//         this.ctx.stroke()
//         this.ctx.fill()
//     },
//     writeText(text) {
//         this.ctx.font = '80px sans-serif'
//         this.ctx.fillText(text, 100, 100)
//         // this.ctx.strokeText(text, 100, 100)
//     },
//     drawImage(name) {
//         let image = new Image()
//         image.src = `img/${name}`
//         image.onload = () => this.ctx.drawImage(image, 100, 100)
//     }
// }



// const movingApp = {
//     name: 'Basic drawing App for HTML5 Canvas with movements',
//     author: 'Germán Álvarez',
//     version: '1.0.0',
//     description: 'App para realizar trazados básicos en Canvas y animarlos',
//     license: undefined,
//     canvasDom: undefined,
//     ctx: undefined,
//     balls: [],
//     canvasSize: {
//         height: window.innerHeight,
//         width: window.innerWidth
//     },
//     init(id) {
//         this.canvasDom = document.getElementById(id)
//         this.canvasDom.width = this.canvasSize.width
//         this.canvasDom.height = this.canvasSize.height
//         this.ctx = this.canvasDom.getContext('2d')
//     },
//     clearScreen() {
//         this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
//     },
//     drawMovingBall() {
//         const mayBall1 = new Ball(this.ctx, 10, 100, 100, 100, this.canvasSize)
//         const mayBall2 = new Ball(this.ctx, 100, 300, 150, 150, this.canvasSize)
//         const mayBall3 = new Ball(this.ctx, 200, 600, 100, 100, this.canvasSize)
//         this.balls.push(mayBall1, mayBall2, mayBall3)
//         this.balls.forEach(elm => elm.init())
//         setInterval(() => {
//             this.clearScreen()
//             this.balls.forEach(elm => elm.move())
//         }, 10)
//     }
// }


// class Ball {

//     constructor(ctx, posX, posY, ballW, ballH, canvasSize) {
//         this.ctx = ctx
//         this.posX = posX
//         this.posY = posY
//         this.ballW = ballW
//         this.ballH = ballH
//         this.canvasSize = {
//             width: canvasSize.width,
//             height: canvasSize.height
//         }
//         this.vel = 2
//         this.ball = undefined
//     }

//     init() {
//         this.ball = new Image()
//         this.ball.src = `img/beachball.png`
//         this.ball.onload = () => this.ctx.drawImage(this.ball, this.posX, this.posY, this.ballW, this.ballH)
//     }

//     move() {

//         // if (this.posX >= this.canvasSize.width - this.ballW || this.posX <= 0) {
//         //     this.changeDirection()
//         // }

//         this.posX >= this.canvasSize.width - this.ballW || this.posX <= 0 ? this.changeDirection() : null

//         this.posX += this.vel
//         this.ctx.drawImage(this.ball, this.posX, this.posY, this.ballW, this.ballH)
//     }

//     changeDirection() {
//         this.vel *= -1
//     }
// }









const controlsApp = {
    name: 'Basic controlled App for HTML5 Canvas',
    author: 'Germán Álvarez',
    version: '1.0.0',
    description: 'App para realizar controles básicos en Canvas',
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    ball: undefined,
    canvasSize: {
        height: window.innerHeight,
        width: window.innerWidth
    },
    frames: 0,
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.canvasDom.width = this.canvasSize.width
        this.canvasDom.height = this.canvasSize.height
        this.ctx = this.canvasDom.getContext('2d')
        this.drawBall()
        this.setEventListeners()
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },
    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.ball.move('right') : null
            e.keyCode === 39 ? this.ball.move('left') : null
        }
    },
    drawBall() {
        this.ball = new Ball(this.ctx, 10, 100, 100, 100, this.canvasSize)
        this.ball.init()
        setInterval(() => {
            this.frames++
            this.frames % 50 === 0 ? console.log("OBSTACULOOO") : null
            this.clearScreen()
            this.ball.draw()
        }, 10)
    }
}


class Ball {

    constructor(ctx, posX, posY, ballW, ballH, canvasSize) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.ballW = ballW
        this.ballH = ballH
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
        this.vel = 20
        this.ball = undefined
    }

    init() {
        this.ball = new Image()
        this.ball.src = `img/beachball.png`
        this.ball.onload = () => this.ctx.drawImage(this.ball, this.posX, this.posY, this.ballW, this.ballH)
    }

    move(dir) {
        dir === 'left' ? this.posX += this.vel : null
        dir === 'right' ? this.posX -= this.vel : null
    }

    draw() {
        this.ctx.drawImage(this.ball, this.posX, this.posY, this.ballW, this.ballH)
    }

    changeDirection() {
        this.vel *= -1
    }
}