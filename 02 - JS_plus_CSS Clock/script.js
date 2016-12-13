/**
 * Created by iraquitan on 12/12/16.
 */

function secToDeg(s) {
    return 90+(360*s/60);
}

function minToDeg(m) {
    return 90+(360*m/60);
}

function hourToDeg(h) {
    return 90+(360*h/12);
}

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

for (var h of [hourHand, minuteHand, secondHand]) {
    h.style.transition = 'all 2s';
    h.style.transitionTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
}

function setDate() {
    // Turn off transition effects
    for (var h of [hourHand, minuteHand, secondHand]) {
        h.style.transition = 'none';
    }
    const now = new Date();
    const hours = now.getHours() + (now.getMinutes() / 60);
    const minutes = now.getMinutes() + (now.getSeconds() / 60);
    const seconds = now.getSeconds();

    if (seconds <= 0 || seconds >= 59) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = 'all 0.05s';
        secondHand.style.transitionTimingFunction = 'cubic-bezier(0.1, 3.5, 0.25, 1)';
    }

    hourHand.style.transform = `rotate(${hourToDeg(hours)}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg(minutes)}deg)`;
    secondHand.style.transform = `rotate(${secToDeg(seconds)}deg)`;
}

function initClock() {
    const now = new Date();
    const hours = now.getHours() + (now.getMinutes() / 60);
    const minutes = now.getMinutes() + (now.getSeconds() / 60);
    const seconds = now.getSeconds();

    hourHand.style.transform = `rotate(${hourToDeg(hours)}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg(minutes)}deg)`;
    secondHand.style.transform = `rotate(${secToDeg(seconds)}deg)`;

    setTimeout(setInterval.bind(null, setDate, 1000), 1000);
}

setTimeout(initClock, 0);