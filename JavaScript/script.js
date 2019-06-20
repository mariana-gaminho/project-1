
window.onload = function() {
  player1.draw()
  player2.draw()
  pause.style.display='none'
  addEventListener('keydown', (event) => {
    if(event.keyCode === 13) {
      startGame()
    } else if(event.keyCode ===32 ) {
      if(!stop){
        clearInterval(interval)
        audioStop.play()
        interval = false
        stop = true
        pause.innerHTML = '<b>Press SPACEBAR to continue</b>'
        return
      }
      stop = false
      pause.innerHTML = '<b>Press SPACEBAR to pause</b>'
      audioStop.play()
      startGame()
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

  displayScore()
  displayScore()

  checkCollitionCoin(player1, coinsCanvas1)
  checkCollitionObstacle(player1, obstaclesCanvas1, lives1)

  checkCollitionCoin(player2, coinsCanvas2)
  checkCollitionObstacle(player2, obstaclesCanvas2, lives2)
}

function startGame() {
  if(interval) return
  interval = setInterval(update, 1000/120)
  start.innerHTML = '<b>Press ESC to exit</b>'
  pause.style.display = ''
}