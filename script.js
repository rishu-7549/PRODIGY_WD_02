const playbutton = document.getElementsByClassName("play")[0];
const lapbutton = document.getElementsByClassName("lap")[0];
const resetbutton = document.getElementsByClassName("reset")[0];
const clearbutton = document.getElementsByClassName("lap-clear-button")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const centisecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
const bg = document.getElementsByClassName("outerCircle")[0];




let isPlay = false;
let secCounter = 0;
let min;
let sec;
let centisec;
let centiConter = 0;
let minCounter = 0;
let isReset = false;
let lapItem = 0;

const togglebutton = () => {
    lapbutton.classList.remove("hidden");
    resetbutton.classList.remove("hidden");
};

const play = () => {
    if (!isPlay && !isReset) {
        playbutton.innerHTML = 'Pause';
        bg.classList.add("animation-bg");
        min = setInterval(() => {
            minute.innerHTML = `${++minCounter} :`;
        }, 60 * 1000);
        sec = setInterval(() => {
            if (secCounter === 60) {
                secCounter = 0;
            }
            second.innerHTML = `&nbsp;${++secCounter} :`;
        }, 1000);
        centisec = setInterval(() => {
            if (centiConter === 100) {
                centiConter = 0;
            }
            centisecond.innerHTML = `&nbsp;${++centiConter} `;
        }, 10);
        isPlay = true;
        isReset = true;
    } else {
        playbutton.innerHTML = 'Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centisec);
        isPlay = false;
        isReset = false;
        bg.classList.remove("animation-bg");
    }
    togglebutton();
};

const reset = () => {
    isReset = true;
    minCounter = 0;
    secCounter = 0;
    centiConter = 0;
    play();
    lapbutton.classList.add("hidden");
    resetbutton.classList.add("hidden");
    minute.innerHTML = '0 :';
    second.innerHTML = '&nbsp;0 :';
    centisecond.innerHTML = '&nbsp;0';
};

const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const Stamp = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    Stamp.setAttribute("class", "stamp");
    number.innerText = `${++lapItem}`;
    Stamp.innerHTML = `${minCounter} : ${secCounter} : ${centiConter}`;
    li.append(number, Stamp);
    laps.append(li);

    clearbutton.classList.remove("hidden");
}


const clearAll = () => {
    laps.innerHTML = '';
    laps.append(clearbutton);
    clearbutton.classList.add("hidden");
    lapItem = 0;
}


playbutton.addEventListener("click", play);
resetbutton.addEventListener("click", reset);
lapbutton.addEventListener("click", lap);
clearbutton.addEventListener("click", clearAll);
