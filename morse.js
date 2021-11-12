// import { english } from "./modules/eng-to-morse.js";
// import { morse } from "./modules/morse-to-eng.js";

// TRANSLATION OBJECTS
const english = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": " / ",
};

const morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "/": " ",
};

// Declaring Buttons
const moToEnBtn = document.getElementById("morseToEngBtn");
const enToMoBtn = document.getElementById("engToMorseBtn");
const clearBtn = document.getElementById("clearAll");

// Declaring Output Areas
const resultDivEng = document.getElementById("outputEnglish");
const resultDivMorse = document.getElementById("outputMorse");

// Declaring Errors
const englishError =
  "Invalid input detected,English only takes the letters a-z, A-Z and spaces";
const morseError =
  "Invalid input detected, please follow Morse input directions";

// Event Listeners / Declaring Input Areas
enToMoBtn.addEventListener("click", () => {
  console.log("English to Morse Button Clicked");
  const engString = document.querySelector("#englishInput").value.toLowerCase();
  console.log(engString);
  testFunc(engString, english, englishError);
  translate(engString, "", english, "  ", resultDivMorse);
});

moToEnBtn.addEventListener("click", () => {
  console.log("Morse to English Button Clicked");
  const morString = document.querySelector("#morseInput").value;
  console.log(morString);
  testFunc(morString, morse, morseError);
  translate(morString, " ", morse, "", resultDivEng);
});

// This doesn't work, I think my for loop is shit
const testFunc = (string, langObj, error) => {
  let testArr = string.split(" ");
  // for (let i = 0; (i = testArr.length); i++) {
  //   if (langObj.hasOwnProperty(i)) {
  //     throw Error(`${error}`);
  //   }
  // }
};

clearBtn.addEventListener("click", () => {
  console.log("Clear has been pressed");
  document.querySelector("#morseInput").value = null;
  document.querySelector("#englishInput").value = null;
  location.reload();
});

// I forgot how to move this funciton outside of the translate func
const appendFunction = (translation, resultDiv) => {
  const transElem = document.createElement("p");
  const transText = document.createTextNode(`Translation: ${translation}`);
  transElem.appendChild(transText);
  resultDiv.appendChild(transElem);
  return resultDiv;
};

const translate = (inputStr, splitParam, langObj, joinParam, resultDiv) => {
  let splitString = inputStr
    .split(splitParam)
    .map((i) => mapFunc(i, langObj))
    .join(joinParam);
  let translation = splitString;
  appendFunction(translation, resultDiv);
};

const mapFunc = (key, langObj) => {
  let newValue = langObj[key];
  return newValue;
};
