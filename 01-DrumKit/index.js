function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  key.classList.add('playing')
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')

document.body.addEventListener('keydown', playSound)
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))
