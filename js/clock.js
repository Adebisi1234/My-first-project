const currentday = new Date()
const seconds = currentday.getSeconds()
const minutes = currentday.getMinutes()
const hour = currentday.getHours()
const amOrPm = 'AM' 

setInterval(setClock, 1000)
setInterval(digitHour, 360000)
setInterval(digitminute, 60000)
setInterval(blink, 500)


const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')

function setClock(){

    const day = new Date()
    const secondRatio = day.getSeconds() / 60
    const minuteRatio = (secondRatio + day.getMinutes()) / 60
    const hourRatio = (minuteRatio + day.getHours()) / 12
    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
}

function digitHour() {
    if(hour > 12){
        hour = hour % 12
        amOrPm = 'PM'
    }
    document.getElementById('hour').innerText = hour
    document.getElementById('amOrPm').innerText = amOrPm
}

function blink(){
    document.querySelector('#colon').classList.toggle('hidden')
}

function digitminute() {
    if(minutes < 10){
        minutes = '0' + minutes
    }
    document.getElementById('minute').innerText = minutes
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', (rotationRatio * 360))
}

setClock()
digitHour()
digitminute()
blink()

