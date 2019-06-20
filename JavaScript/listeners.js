addEventListener('keydown', event => {
  if (events.hasOwnProperty(event.keyCode)) events[event.keyCode] =true
})

addEventListener('keyup', event => {
  if(event.keyCode === 68) events["68"] = false
  if(event.keyCode === 39) events["39"] = false
  if(event.keyCode === 27) {
    location.reload(true)
     } 
})

