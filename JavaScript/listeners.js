addEventListener('keydown', event => {
  if(event.keyCode === 87){
    if(player1.y === 445){
      player1.jump()
    } else {
      return
    }
  }
})

addEventListener('keydown', event => {
  if(event.keyCode === 38) {
    if(player2.y === 445){
      player2.jump()
    } else{
      return
    }
  }
})

