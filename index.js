const display = document.getElementById("display");
const startbtn = document.getElementById("start");
const pausebtn = document.getElementById("pause");
const resetbtn = document.getElementById("reset");
const castbtn = document.getElementById("cast");
const parentdiv = document.querySelector(".parentdiv");
let m = 0;
let sec = 0;
let min = 0;
let hr = 0;
let interval;
startbtn.addEventListener("click", () => {
  pausebtn.disabled = false;
  resetbtn.disabled = false;
  castbtn.disabled = false;
  startbtn.disabled = true;
  interval = setInterval(() => {
    m++;
    if (m === 1000) {
      sec++;
      m = 0;
      if (sec === 60) {
        min++;
        sec = 0;
        if (min === 60) {
          hr++;
          min = 0;
        }
      }
    }
    let ms;
    let hrs;
    let mins;
    let secs;
    if (m < 10) {
      ms = "00" + m;
    }
    if (m > 9) {
      ms = "0" + m;
    }
    if (m > 99) {
      ms = m;
    }
    if (sec < 10) {
      secs = "0" + sec;
    }
    if(sec > 9){
        secs = sec
    }

    if (min < 10) {
      mins = "0" + min;
    }
    if(min > 9){
        mins = min
    }
    if (hr < 10) {
      hrs = "0" + hr;
    }
    if(hr > 9){
        hrs = hr
    }
    display.innerHTML = `${hrs} : ${mins} : ${secs} : ${ms}`;
  }, 1);
});
pausebtn.addEventListener("click", () => {
  pausebtn.disabled = true;
  resetbtn.disabled = false;
  castbtn.disabled = true;
  startbtn.disabled = false;
  clearInterval(interval);
});
resetbtn.addEventListener("click", () => {
  pausebtn.disabled = true;
  resetbtn.disabled = true;
  castbtn.disabled = true;
  startbtn.disabled = false;
  clearInterval(interval);
  m = 0;
  sec = 0;
  min = 0;
  hr = 0;

  display.innerHTML = "00 : 00 : 00 : 000";
});
let count = 0;
castbtn.addEventListener("click", () => {
  count++;
  let p = document.createElement("p");
  parentdiv.appendChild(p);
  p.innerHTML = `cast ${count}:- ` + display.innerHTML;
});
