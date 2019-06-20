
//OBSTACLES

function generateObstacles1() {
  obstaclesCanvas1.push(new Obstacle())
}

function generateObstacles2() {
  obstaclesCanvas2.push(new Obstacle())
}

function drawObstacles1() {
  if(frames === 90 || frames % 500 === 0 || frames % 1900 === 0){
    generateObstacles1()
  }

  obstaclesCanvas1.forEach(obstacle => {
    obstacle.draw1()
  })
}

function drawObstacles2() {
  if(frames === 50 ||frames % 600 === 0 || frames % 1700 === 0){
    generateObstacles2()
  }

  obstaclesCanvas2.forEach(obstacle => {
    obstacle.draw2()
  })
}

//COINS

function generateCoins1() {
  rndX = Math.floor(Math.random()* (1000-800) + 800)
  rndY = Math.floor(Math.random() * (300 - 250) + 250)
  coinsCanvas1.push(new Coin(rndX, rndY))
}

function generateCoins2() {
  rndX = Math.floor(Math.random()* (1000-800) + 800)
  rndY = Math.floor(Math.random() * (300 - 250) + 250)
  coinsCanvas2.push(new Coin(rndX, rndY))
}

function drawCoins1() {
  if(frames % 400 === 0 || frames % 900 ===0){
    generateCoins1()
  }
  coinsCanvas1.forEach(coin => {
    coin.draw1()
  })
}

function drawCoins2() {
  if(frames % 400 === 0 || frames % 900 ===0){
    generateCoins2()
  }
  coinsCanvas2.forEach(coin => {
    coin.draw2()
  })
}

//COLLITIONS

function checkCollitionObstacle(player, array, lives) {
  let touchIndex
  array.map((obstacle, index) => {
    if(player.isTouching(obstacle)) {
      obstacle.audio.play()
        touchIndex = index
        player.lives--
        lives.shift()
        if(player.lives <= 0){
          setTimeout(()=>{
            boardOne.gameOver()
            boardTwo.gameOver()
          },200)
        }
    }
  }) 
  if(touchIndex!== undefined)array.splice(touchIndex,1)
}

function checkCollitionCoin(player, array) {
  array.map((coin, index) => {
    if(player.isTouching(coin)) {
        player.score++
        console.log(player.score)
        array.splice(index,1)
        coin.audio.play()
    }
  })
}

//DRAW SCORES
function displayScore(){
  ctx1.fillStyle = '#000000'
  ctx1.font = '48px Inconsolata'
  ctx1.fillText(`Score: ${player1.score}`, 40, 93)

  ctx2.fillStyle = '#000000'
  ctx2.font = '48px Inconsolata'
  ctx2.fillText(`Score: ${player2.score}`, 40, 93)
}

function displayFinalScores(){
  let image = new Image()
  image.src = 'ASSETS/BG/BG.png'
  let imagePlayer1 = new Image()
  imagePlayer1.src = 'ASSETS/Character/ChUp.png'
  let imagePlayer2 = new Image()
  imagePlayer2.src = 'ASSETS/Character/ChUpPurple.png'
  ctx1.clearRect(0,0, canvas1.width, canvas1.height)
  ctx2.clearRect(0,0, canvas1.width, canvas1.height)
  ctx1.drawImage(image, 0, 0)
  ctx2.drawImage(image, 0, 0)

  ctx1.font = "100px Inconsolata";
  ctx2.font = "100px Inconsolata"
  ctx1.fillStyle = "#373737"
  ctx2.fillStyle = "#373737"
  if(player1.score > player2.score){
    ctx1.globalCompositeOperation = 'source-over'
    ctx1.drawImage(imagePlayer1, 380, 250, 100, 100)
    ctx1.fillText('WINNER', 280, 500)
  } else if(player1.score < player2.score){
    ctx2.globalCompositeOperation = 'source-over'
    ctx2.drawImage(imagePlayer2, 380, 250, 100, 100)
    ctx2.fillText('WINNER',280,500)
  } else {
    ctx1.fillText('TIE',280,500)
    ctx2.fillText('TIE',280,500)
  }

  ctx1.font = "100px Inconsolata";
  ctx1.fillStyle = "#373737"
  ctx1.fillText(`SCORE: ${player1.score}`, 200, 200)

  ctx2.font = "100px Inconsolata";
  ctx2.fillStyle = "#373737"
  ctx2.fillText(`SCORE: ${player2.score}`, 200, 200)

  pause.style.display = 'none'
  start.innerHTML = '<b>Press ESC to restart</b>'
  playerOne.style.display = 'none'
  playerTwo.style.display = 'none'
}
