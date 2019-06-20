addEventListener('keydown', event => {
  if(event.keyCode === 87){
    if(player1.y === 445) numOfJumps1=0
    if(player1.y >= 300 && numOfJumps1 <= 1){
      player1.jump()
      numOfJumps1++
    } else {
      return
    }
  }else if(event.keyCode === 68){
    player1.moveRight()
  }
})

addEventListener('keydown', event => {
  if(event.keyCode === 38) {
    if(player2.y === 445) numOfJumps2=0
    if(player2.y >= 300 && numOfJumps2 <= 1){
      player2.jump()
      numOfJumps2++
    } else {
      return
    }
  } else if(event.keyCode === 39){
    player2.moveRight()
  }
})

addEventListener('keyup', event => {
  if(event.keyCode === 27) {
    location.reload(true)
    localStorage.clear()  } 
})

