//SUJETAR CANVAS
const canvas1 = document.getElementById('Board-One')
const ctx1 = canvas1.getContext('2d')

const canvas2 = document.getElementById('Board-Two')
const ctx2 = canvas2.getContext('2d')

//SEELECTORES START Y CONTINUE
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')

//SELECTOR DE CRONÓMETRO
const time = document.querySelector('#time')

//INSTANCIAS DE LAS CLASES
const boardOne = new Board()
const boardTwo = new Board()

const player1 = new Player1()
const player2 = new Player2()


//VARIABLES AUXILIARES
let frames = 0
let stop = false
let interval
let timer = 30
const events = {
  "87" : false,
  "68": false,
  "38" : false,
  "39" : false
}


let obstaclesCanvas1 = []
let obstaclesCanvas2 = []

let numOfJumps1 = 0
let numOfJumps2 = 0

let coinsCanvas1 = []
let coinsCanvas2 = []

let lives1 = [new Life(500), new Life(550), new Life(600), new Life(650), new Life(700)]
let lives2 = [new Life(500), new Life(550), new Life(600), new Life(650), new Life(700)]

let distance1 = 0
let distance2 = 0

let audioStop = new Audio()
//audioStop.src = 'sounds/wav/smb3/smb3_pause.wav'

let image = new Image()
  image.src = 'ASSETS/BG/BG.png'
  let imagePlayer1 = new Image()
  imagePlayer1.src = 'ASSETS/Character/ChUp.png'
  let imagePlayer2 = new Image()
  imagePlayer2.src = 'ASSETS/Character/ChUpPurple.png'



