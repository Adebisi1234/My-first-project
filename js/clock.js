const currentday = new Date()
const seconds = currentday.getSeconds()
const minutes = currentday.getMinutes()
const minute = `0${minutes}`
const hour = currentday.getHours()
const amOrPm = 'AM'

//set interval for the clock functions to reload
setInterval(setClock, 1000)
setInterval(digitHour, 360000)
setInterval(digitminute, 60000)
setInterval(blink, 500)


const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')

//function for analog clock
function setClock(){

    const day = new Date()
    const secondRatio = day.getSeconds() / 60
    const minuteRatio = (secondRatio + day.getMinutes()) / 60
    const hourRatio = (minuteRatio + day.getHours()) / 12
    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
}

//fuction for inputing the hour and am/pm into the dom
function digitHour() {
    if(hour > 12){
        hour = hour % 12
        amOrPm = 'PM'
    }
    document.getElementById('hour').innerText = hour
    document.getElementById('amOrPm').innerText = amOrPm
}

//function for the blinking colon
function blink(){
    document.querySelector('#colon').classList.toggle('hidden')
}

//fuction for inputing the minute into the dom
function digitminute() {
    if(minutes < 10){
        document.getElementById('minute').innerText = minute
    }else {
        document.getElementById('minute').innerText = minutes
    }
    
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', (rotationRatio * 360))
}

setClock()
digitHour()
digitminute()
blink()

