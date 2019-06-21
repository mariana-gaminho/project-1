
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
  ctx1.clearRect(0,0, canvas1.width, canvas1.height)
  ctx2.clearRect(0,0, canvas1.width, canvas1.height)
  ctx1.drawImage(image, 0, 0)
  ctx2.drawImage(image, 0, 0)

  ctx1.font = "100px Inconsolata";
  ctx2.font = "100px Inconsolata"
  ctx1.fillStyle = "#373737"
  ctx2.fillStyle = "#373737"

  if(timer === 0){

    ctx1.font = "90px Inconsolata";
    ctx1.fillStyle = "#373737"
    ctx1.fillText(`SCORE: ${player1.score}`, 210, 165)
    ctx2.font = "90px Inconsolata";
    ctx2.fillStyle = "#373737"
    ctx2.fillText(`SCORE: ${player2.score}`, 210, 165)

    if(player1.score > player2.score){
      ctx1.globalCompositeOperation = 'source-over'
      ctx1.drawImage(imagePlayer1, 320, 245, 120, 120)
      ctx1.fillText('WINNER', 250, 550)
    } else if(player2.score > player1.score){
      ctx2.globalCompositeOperation = 'source-over'
      ctx2.drawImage(imagePlayer2, 320, 245, 120, 120)
      ctx2.fillText('WINNER',250,550)
    } else {
      ctx1.drawImage(imagePlayer1, 320, 245, 120, 120)
      ctx1.fillText('TIE',310,550)
      ctx2.drawImage(imagePlayer2, 320, 245, 120, 120)
      ctx2.fillText('TIE',310,550)
    }
  } else {
    if(timer <=7) audio7Sec.pause()
    ctx1.font = "90px Inconsolata";
    ctx1.fillStyle = "#373737"
    ctx1.drawImage(heart, 300, 165, 100, 100); ctx1.fillText(`${player1.lives}`, 450, 250)
    ctx2.font = "90px Inconsolata";
    ctx2.fillStyle = "#373737"
    ctx2.drawImage(heart, 300, 165, 100, 100); ctx2.fillText(`${player2.lives}`, 450, 250)

    if(player1.lives === 0 && player2.lives > 0){
      ctx1.globalCompositeOperation = 'source-over'
      ctx2.drawImage(imagePlayer2, 340, 300, 100, 100)
      ctx2.fillText('WINNER', 250, 550)
    } else if(player2.lives === 0 && player1.lives > 0){
      ctx1.globalCompositeOperation = 'source-over'
      ctx1.drawImage(imagePlayer1, 340, 300, 100, 100)
      ctx1.fillText('WINNER',250,550)
    } else if(player1.lives===0&&player2.lives===0){
      ctx1.drawImage(imagePlayer1, 340, 300, 100, 100)
      ctx2.drawImage(imagePlayer2, 340, 300, 100, 100)
      ctx1.fillText('TIE',310,550)
      ctx2.fillText('TIE',310,550)
    }
  }

  // ctx1.font = "90px Inconsolata";
  // ctx1.fillStyle = "#373737"
  // ctx1.fillText(`SCORE: ${player1.score}`, 210, 145)
  // ctx1.drawImage(heart, 300, 175, 100, 100); ctx1.fillText(`${player1.lives}`, 450, 250)

  // ctx2.font = "90px Inconsolata";
  // ctx2.fillStyle = "#373737"
  // ctx2.fillText(`SCORE: ${player2.score}`, 210, 145)
  // ctx2.drawImage(heart, 300, 175, 100, 100); ctx2.fillText(`${player2.lives}`, 450, 250)

  pause.style.display = 'none'
  start.innerHTML = '<b>Press ESC to restart</b>'
  playerOne.style.display = 'none'
  playerTwo.style.display = 'none'
}

function eventExec () {
  for (let event in events){
  if(event === "87" && events["87"]){   
    events["87"] = false

    if(player1.y === 445) numOfJumps1=0
    if(player1.y >= 300 && numOfJumps1 <= 1){
      player1.jump()
      numOfJumps1++
    } else {

      return
    }
  }if(event === "68" && events["68"]){
    player1.moveRight()
  }
  if(event === "38" && events["38"]) {
    events["38"] = false

    if(player2.y === 445) numOfJumps2=0
    if(player2.y >= 300 && numOfJumps2 <= 1){
      player2.jump()
      numOfJumps2++
    } else {
      return
    }
  } if(event === "39" && events["39"]){
    player2.moveRight()
  }
}

}
