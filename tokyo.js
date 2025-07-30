"use strict";

function showStationName() {
  signboard.textContent = stations[idx];
  document.getElementById("signboardFurigana").textContent =
    stationsFurigana[idx];
  document.getElementById("roman").textContent = stationsRoman[idx];
  document.getElementById("previousStation").textContent = (() => {
    if (stations[idx - 1] !== undefined) {
      return stations[idx - 1];
    }
  })();
  document.getElementById("nextStation").textContent = (() => {
    if (stations[idx + 1] !== undefined) {
      return stations[idx + 1];
    }
  })();
}

myform.onsubmit = function (e) {
  e.preventDefault();
  let inputForm = myform.userInput.value;

  if (inputForm === stationsRoman[idx]) {
    new Audio("audio/drum.mp3").play();
    idx++;
    showStationName(idx);
    document.getElementById("userInput").value = "";
  } else {
    document.getElementById("userInput").value = "";
    new Audio("audio/miss.mp3").play();
  }
};
