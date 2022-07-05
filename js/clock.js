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
    let currentday = new Date()
    if(currentday.getHours() > 12){
        currentday.getHours() = currentday.getHours() % 12
    }
    document.getElementById('hour').innerText = currentday.getHours()
}

function blink(){
    document.querySelector('#colon').classList.toggle('hidden')
}

function digitminute() {
    currentday = new Date()
    document.getElementById('minute').innerText = currentday.getMinutes()
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', (rotationRatio * 360))
}

setClock()
digitHour()
digitminute()
blink()

