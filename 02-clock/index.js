const secHand = document.querySelector('.hand-sec')
const minHand = document.querySelector('.hand-min')
const hourHand = document.querySelector('.hand-hour')

function setDate() {
  const now = new Date()

  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360 + 90
  secondsDegrees === 360
    ? (secHand.style.transition = `none`)
    : (secHand.style.transition = `inherit`)
  secHand.style.transform = `rotate(${secondsDegrees}deg)`

  const minutes = now.getMinutes()
  const minutesDegrees = (minutes / 60) * 360 + 90
  minutesDegrees === 360
    ? (minHand.style.transition = `none`)
    : (minHand.style.transition = `inherit`)
  minHand.style.transform = `rotate(${minutesDegrees}deg)`

  const hours = now.getHours()
  const hoursDegrees = (hours / 12) * 360 + 90
  hoursDegrees === 360
    ? (hourHand.style.transition = `none`)
    : (hourHand.style.transition = `inherit`)
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)
