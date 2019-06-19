const canvas1 = document.getElementById('Board-One')
const ctx1 = canvas1.getContext('2d')

const canvas2 = document.getElementById('Board-Two')
const ctx2 = canvas2.getContext('2d')

//INSTANCIAS DE LAS CLASES
const boardOne = new Board()
const boardTwo = new Board()

const player1 = new Player1()
const player2 = new Player2()


//VARIABLES AUXILIARES
let frames = 0
let interval

let obstaclesCanvas1 = []
let obstaclesCanvas2 = []

let numOfJumps1 = 0
let numOfJumps2 = 0

let coinsCanvas1 = []
let coinsCanvas2 = []

let lives1 = [new Life(500), new Life(450), new Life(400), new Life(350), new Life(300)]
let lives2 = [new Life(500), new Life(450), new Life(400), new Life(350), new Life(300)]

let distance1 = 0
let distance2 = 0



