const future = new Date("Mar 9, 2023 00:00:00").getTime();


const day = 0;
const hr = 0;
const min = 0;
const sec = 5;

const days = day * 86400000;
const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = days + hours + minutes + seconds;
const startTime = Date.now();
const futureTime = startTime + setTime;

const comingsTimer = setInterval(countDown);
countDown();

function countDown() {
    let present = Date.now();
    // const remaining = futureTime - present;
    const remaining = future - present;

    // Timer
    const d = Math.floor(remaining / (1000 * 60 * 60 * 24)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    const h = Math.floor((remaining / (1000 * 60 * 60)) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    const m = Math.floor((remaining / (1000 * 60)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    const s = Math.floor((remaining / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

    document.getElementById('comingsoon-days').innerText = d;
    document.getElementById('comingsoon-hours').innerText = h;
    document.getElementById('comingsoon-minutes').innerText = m;
    document.getElementById('comingsoon-seconds').innerText = s;

    // From day 0 remove day hand
    if(remaining <= 86400000) {
        document.getElementById('comingsoon-dy').style.display = 'none';
        document.getElementById('comingsoon-colon-dy').style.display = 'none';
    }
    
    // Remaining 1 hour left
    if(remaining < 3600000) {
        document.getElementById('comingsoon-hr').style.display = 'none';
        document.getElementById('comingsoon-colon-hr').style.display = 'none';
        document.getElementById('comingsoon-timer').style.width = '400px';
    }
    
    // Remove minutes hand when a minute left
    if(remaining < 60000) {
        document.getElementById('comingsoon-min').style.display = 'none';
        document.getElementById('comingsoon-colon-min').style.display = 'none';
        document.getElementById('comingsoon-timer').style.width = '250px';
    }

    if(remaining < 0) {
        clearTimeout(comingsTimer);
        // document.getElementById('comingsoon-days').innerText = '00';
        // document.getElementById('comingsoon-hours').innerText = '00';
        // document.getElementById('comingsoon-minutes').innerText = '00';
        // document.getElementById('comingsoon-seconds').innerText = '00';
        document.getElementById('comingsoon-timer').style.display = 'none';
    }

}