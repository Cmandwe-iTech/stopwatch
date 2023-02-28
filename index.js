const display = document.getElementById('display');
const startbtn = document.getElementById('start');
const resetbtn = document.getElementById('reset');
const pausebtn = documnet.getElementById('pause');
const castbtn = document.getElementById('cast');
let miliseconds = 0;
let sec = 0;
let mins = 0;
let hr = 0;
let interval = null;
startbtn.addEventListener('click',start);
pausebtn.addEventListener('click',pause);
resetbtn.addEventListener('click', reset);
function startTimer(){
    miliseconds++;
    if(miliseconds === 1000){
        miliseconds = `${000}`
        sec++
        if(sec === 60){
            sec = `${00}`
            mins++
            if(mins === 60){
                mins = `${00}`
                hr++
            }
        }
    }
    display.innerHTML = `${hr} : ${mins} : ${sec} : ${miliseconds}`
}
function start(){
    // pausebtn.disabled = false;
    // resetbtn.disabled = false;
    // startbtn.disabled = true;
    if(interval){
        return
    }
    interval = setInterval(startTimer, 1);
}

function pause(){
    clearInterval(interval);
    interval = null;
    // if(pausebtn.innerText)
}

function reset(){
    pause()
    miliseconds = 0;
    sec = 0;
    mins = 0;
    hr = 0;
    display.innerHTML = "00 : 00 : 00 : 000"
}
