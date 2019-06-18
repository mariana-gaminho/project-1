window.onload = function() {
  addEventListener('keydown', (event) => {
    if(event.keyCode === 13) {
      startGame()
    } else if(event.keyCode ===32) {
      clearInterval(interval)
      interval = false
    }
  })
}