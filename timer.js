let showTime;

let timer;
let startTime;
let elapsedTime = 0; //経過時間
let holdTime = 0;

window.onload = () => {
  showTime = document.getElementById("time");
};

function goal() {
  const myButton = document.getElementById("startGame");
      myButton.style.display = "none";

      const myform = document.getElementById("form1");
      myform.style.display = "none";

      new Audio("audio/levelUp.mp3").play();
}

function start() {
  startTime = Date.now();
  measureTime();
}

function measureTime() {
  if (idx === 9) {
      clearTimeout(timer);
      goal();
      
    
  } else {
    timer = setTimeout(function () {
      elapsedTime = Date.now() - startTime;
      showTime.textContent = new Date(elapsedTime).toISOString().slice(14, 19);
      measureTime();
    }, 10);
  }
}

document.getElementById("startGame").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    showStationName();
    start();
  }
});

document.body.addEventListener("keydown", (press) => {
  if (press.key !== "Enter") {
    new Audio("audio/press.mp3").play();
  }
});

