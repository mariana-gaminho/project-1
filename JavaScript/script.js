
window.onload = function() {
  player1.draw()
  player2.draw()
  pause.style.display='none'
  addEventListener('keydown', (event) => {
    if(event.keyCode === 13) {
      startGame()
    } else if(event.keyCode ===32 ) {
      if(!stop){
        if(timer <= 7) audio7Sec.pause()
        clearInterval(interval)
        interval = false
        stop = true
        pause.innerHTML = '<b>Press SPACEBAR to continue</b>'
        return
      }
      if(timer <= 7) audio7Sec.play()
      stop = false
      pause.innerHTML = '<b>Press SPACEBAR to pause</b>'
      startGame()
    }
  })
}

function update() {
  eventExec()
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
  if (frames%120 ===0) timer--
  time.innerHTML = timer
  if(timer === 7) {
    audio7Sec.play()
  }
 
  if(timer === 0) {
    //audioStarStop.play()
    boardOne.gameOver()
  }
}

function startGame() {
  //audioStarStop.play()
  if(interval) return
  interval = setInterval(update, 1000/120)
  start.innerHTML = '<b>Press ESC to exit</b>'
  pause.style.display = ''
}