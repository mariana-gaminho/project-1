
window.onload = function() {
  player1.draw()
  player2.draw()
  addEventListener('keydown', (event) => {
    if(event.keyCode === 13) {
      startGame()
    } else if(event.keyCode ===32) {
      clearInterval(interval)
      interval = false
    }
  })
}

function update() {
  ctx1.clearRect(0,0, canvas1.width, canvas1.height)
  frames++
  boardOne.draw()
  boardOne.drawFloor()

  player1.draw()
  player1.move()
  player2.draw()
  player2.move()
  
  drawObstacles1()
  drawObstacles2()

  drawCoins1()
  drawCoins2()

  lives1.forEach(life => {
    life.draw1()
  })

  lives2.forEach(life => {
    life.draw2()
  })

  checkCollitionObstacle(player1, obstaclesCanvas1)
  checkCollitionObstacle(player2, obstaclesCanvas2)

  checkCollitionCoin(player1, coinsCanvas1)
  checkCollitionCoin(player2, coinsCanvas2)

}

function startGame() {
  if(interval) return
  interval = setInterval(update, 1000/120)
}