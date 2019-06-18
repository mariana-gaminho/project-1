const canvas1 = document.getElementById('Board-One')
const ctx1 = canvas1.getContext('2d')

const canvas2 = document.getElementById('Board-Two')
const ctx2 = canvas2.getContext('2d')

const boardOne = new Board()
const boardTwo = new Board()

let frames = 0
let interval


