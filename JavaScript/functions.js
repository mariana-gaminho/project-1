function generateObstacles() {
  let rndX = canvas1.width+Math.random()*canvas1.width
  obstacles.push(new Obstacle(rndX)) 
}

function drawObstacles() {
  if(frames % 300 === 0){
    generateObstacles()
  }
  obstacles.forEach(obstacle => {
    obstacle.draw()
  })
}

function checkCollition(player) {
  obstacles.map(obstacle => {
    if(player.isTouching(obstacle)) {
      console.log('Aiuda me está tocando AHHHHH')
      if(score1 === 0){
        player.lives--
      } else {
        score--
      }
    }
  })
}