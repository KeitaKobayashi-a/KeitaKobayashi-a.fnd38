"use strict";

const stations = [
  "大崎",
  "渋谷",
  "新宿",
  "池袋",
  "上野",
  "秋葉原",
  "東京",
  "有楽町",
  "品川",
  "ゴール",
  "入区",
];
const stationsFurigana = [
  "おおさき",
  "しぶや",
  "しんじゅく",
  "いけぶくろ",
  "うえの",
  "あきはばら",
  "とうきょう",
  "ゆうらくちょう",
  "しながわ",
];
let idx = 0;

function showStationName() {
  document.getElementById("signboard").textContent = stations[idx];
  document.getElementById("signboardFurigana").textContent =
    stationsFurigana[idx];
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

document.getElementById("form1").onsubmit = function (text) {
  text.preventDefault();
  let inputForm = document.getElementById("form1").userInput.value;

  if (inputForm === stationsFurigana[idx]) {
    new Audio("audio/drum.mp3").play();
    idx++;
    showStationName(idx);
    document.getElementById("userInput").value = "";
  } else {
    document.getElementById("userInput").value = "";
    new Audio("audio/miss.mp3").play();
  }
};
