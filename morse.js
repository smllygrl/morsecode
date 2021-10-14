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
};

// Declaring Buttons
const moToEnBtn = document.getElementById("morseToEngBtn");
const enToMoBtn = document.getElementById("engToMorseBtn");
const clearBtn = document.getElementById("clearAll");

// Declaring Output Areas
const resultDivEng = document.getElementById("outputEnglish");
const resultDivMorse = document.getElementById("outputMorse");

// Event Listeners / Declaring Input Areas
enToMoBtn.addEventListener("click", () => {
  console.log("English to Morse Button Clicked");
  const engString = document.querySelector("#englishInput").value;
  console.log(engString);
  translate(engString, "", english, "  ", resultDivMorse);
});

moToEnBtn.addEventListener("click", () => {
  console.log("Morse to English Button Clicked");
  const morString = document.querySelector("#morseInput").value;
  console.log(morString);
  translate(morString, " ", morse, "", resultDivEng);
});

clearBtn.addEventListener("click", () => {
  console.log("Clear had been pressed");
  document.querySelector("#morseInput").value = null;
  document.querySelector("#englishInput").value = null;
  location.reload();
});

// My three function babies

const translate = (inputStr, splitParam, langObj, joinParam, resultDiv) => {
  let splitString = inputStr
    .split(splitParam)
    .map((i) => mapFunc(i, langObj))
    .join(joinParam);
  let translation = splitString;
  appendFunction(translation, resultDiv);
};

const mapFunc = (key, langObj) => {
  if (langObj.hasOwnProperty(key)) {
    console.log("Found a match!");
    console.log(langObj[key]);
    let newValue = langObj[key];
    console.log(newValue);
    return newValue;
  } else {
    throw new Error(
      "Please have a valid input(Morse: . - / & English: a-z A-Z)"
    );
    console.log("ERROR: please have a valid input");
  }
};

const appendFunction = (translation, resultDiv) => {
  const transElem = document.createElement("p");
  const transText = document.createTextNode(`Translation: ${translation}`);
  transElem.appendChild(transText);
  resultDiv.appendChild(transElem);
  return resultDiv;
};
