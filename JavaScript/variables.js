const canvas1 = document.getElementById('Board-One')
const ctx1 = canvas1.getContext('2d')

const canvas2 = document.getElementById('Board-Two')
const ctx2 = canvas2.getContext('2d')

const boardOne = new Board()
const boardTwo = new Board()

const player1 = new Player1()
const player2 = new Player2()

let frames = 0
let animateHelper = 0
let interval


