/**
 * Created by iraquitan on 12/12/16.
 */

function timeToDeg(t) {
    return 360*t/60;
//    360 --- 60
//     X  --- 1
}

function hourToDeg(h) {
    return 360*h/24;
//    360 --- 24
//     X  --- 1
}

const hour = document.querySelector('.hour-hand');
const minute = document.querySelector('.min-hand');
const second = document.querySelector('.second-hand');

let time = new Date();
hour.style.transform = `rotate(${hourToDeg(time.getHours())}deg)`;
minute.style.transform = `rotate(${timeToDeg(time.getMinutes())}deg)`;
second.style.transform = `rotate(${timeToDeg(time.getSeconds())}deg)`;
