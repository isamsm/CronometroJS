//timer
const minutesEl = document.querySelector('#min');
const secondsEl = document.querySelector('#sec');
const miliEl = document.querySelector('#mili');

//buttons
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resumeBtn =document.querySelector('#resumeBtn');
const resetBtn = document.querySelector('#resetBtn'); 

let interval;
let minutes = 0;
let seconds = 0;
let mili = 0;
let isPaused = false;

const startTime = () => {
    interval = setInterval(() => {
        if (!isPaused) {
            mili += 10

            if (mili === 1000) {
                seconds++;
                mili = 0;
            }

            if (seconds === 60) {
                minutes++
                seconds = 0
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            miliEl.textContent = formatMili(mili);
        }
    }, 10)

    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

const pauseTime = () => {
    isPaused = true;
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'block';
}

const resumeTime = () => {
    isPaused = false;
    resumeBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

const resetTime = () => {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    mili = 0;

    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    miliEl.textContent = '000';

    startBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
    isPaused = false;
}

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

const formatMili = (time) => {
    return time < 100 ? `${time}`.padStart(3, '0') : time;
}

startBtn.addEventListener("click", startTime);
pauseBtn.addEventListener("click", pauseTime);
resumeBtn.addEventListener("click", resumeTime);
resetBtn.addEventListener("click", resetTime);