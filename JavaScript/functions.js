
//OBSTACLES

function generateObstacles1() {
  obstaclesCanvas1.push(new Obstacle())
}

function generateObstacles2() {
  obstaclesCanvas2.push(new Obstacle())
}

function drawObstacles1() {
  if(frames === 90 || frames % 600 === 0 || frames % 1900 === 0){
    generateObstacles1()
  }

  obstaclesCanvas1.forEach(obstacle => {
    obstacle.draw1()
  })
}

function drawObstacles2() {
  if(frames === 120 ||frames % 400 === 0 || frames % 1700 === 0){
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

function checkCollitionObstacle(player, array) {
  array.map((obstacle, index) => {
    if(player.isTouching(obstacle)) {
      if(player.score === 0){
        player.lives--
        array.splice(index,1)
      } else {
        player.score--
      }
    }
  })
}

function checkCollitionCoin(player, array) {
  array.map((coin, index) => {
    if(player.isTouching(coin)) {
        player.score++
        array.splice(index,1)
    }
  })
}