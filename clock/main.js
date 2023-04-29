setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds()*360 / 60
  const minutesRatio = (  secondsRatio+currentDate.getMinutes()*360) / 60
  const hoursRatio = (minutesRatio+ currentDate.getHours()*360) / 12
  
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)


}

function setRotation( element,rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio )
}
setClock()
// const currentDate = new Date()
// const secondsRatio = currentDate.getSeconds()
// const minutesRatio = (secondsRatio + currentDate.getMinutes())
// console.log(minutesRatio)
