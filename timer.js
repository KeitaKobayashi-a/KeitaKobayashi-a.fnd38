let showTime;

let timer;
let startTime;
let elapsedTime = 0; //経過時間
let holdTime = 0;

window.onload = () => {
  showTime = document.getElementById("time");
};

function start() {
  startTime = Date.now();
  measureTime();
}

const myButton = document.getElementById("startGame");
const myform = document.getElementById("form1");
const signboard = document.getElementById("signboard");
const greenLine = document.getElementById("greenLine");
const outer = document.getElementById("outer");
const picture = document.getElementsByClassName("none-picture");
const result = document.getElementsByClassName("result");
const outline = document.getElementsByClassName("none-outline");
const resultText = document.createElement("div");
const restartButton = document.createElement("button");

const asyncGoal = async () => {
  myButton.style.display = "none";
  myform.style.display = "none";
  signboard.style.display = "none";
  greenLine.style.display = "none";
  showTime.style.display = "none";
  outer.style.display = "none";

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  new Audio("audio/levelUp.mp3").play();
  [...picture].forEach((element) => {
    element.classList.add("picture");
  });
  [...outline].forEach((element) => {
    element.classList.add("outline");
  });
  resultText.setAttribute("class", "resultText");
  restartButton.setAttribute("class", "resultButton");
  restartButton.addEventListener("click", () => window.location.reload());
  restartButton.innerText = "もう一度";
  resultText.innerText = `あなたの結果は${showTime.textContent.slice(3,5)}秒でした！`;
  outline[0].appendChild(resultText);
  outline[0].appendChild(restartButton);
};



function measureTime() {
  if (idx === 9) {
    clearTimeout(timer);
    asyncGoal();
  } else {
    timer = setTimeout(function () {
      elapsedTime = Date.now() - startTime;
      showTime.textContent = new Date(elapsedTime).toISOString().slice(14, 19);
      measureTime();
    }, 10);
  }
}


myButton.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showStationName();
    start();
  }
});

document.body.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") {
    new Audio("audio/press.mp3").play();
  }
});


