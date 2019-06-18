function update() {
  ctx1.clearRect(0,0, canvas1.width, canvas1.height)
  frames++
  boardOne.draw()
  boardOne.drawFloor()
  boardTwo.draw()
  boardTwo.drawFloor()
}

function startGame() {
  if(interval) return
  interval = setInterval(update, 1000/120)
}