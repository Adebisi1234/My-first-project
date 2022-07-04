setInterval(setClock, 1000)
setInterval(digitHour, 360000)
setInterval(digitminute, 60000)


const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')

function setClock(){

    const day = new Date()
    const secondRatio = day.getSeconds() / 60
    const minuteRatio = (secondRatio + day.getMinutes()) / 60
    const hourRatio = (secondRatio + day.getHours()) / 12
    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
}

function digitHour() {
    let currentday = new Date()
    document.getElementById('hour').innerText = currentday.getHours()
}

function digitminute() {
    currentday = new Date()
    document.getElementById('hour').innerText = currentday.getHours()
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', (rotationRatio * 360))
}

setClock()
digitHour()
digitminute()

