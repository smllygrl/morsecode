import { isTypedArray } from "util/types";

const englishError = "Please have a valid input(Morse: . - / & English: a-z A-Z)";
const morseErrNu = "Please have a valid input(Morse: . - / & English: a-z A-Z)";
const morseErrSym = "Please have a valid input(Morse: . - / & English: a-z A-Z)";
const morseErrMorse = "Please have a valid input(Morse: . - / & English: a-z A-Z)";
const morseErrSpace = "Please have a valid input(Morse: . - / & English: a-z A-Z)";
const morseErrSlash = "Please have a valid input(Morse: . - / & English: a-z A-Z)"

describe("Morse Code Translator Test Cases"), () => {

  it("should throw an error if dealing with numbers or symbols in eng > morse", () => {
    expect(() => english("!").toBe("englishError");
    expect(() => english("2").toBe("englishError");
  });
  
  it("should throw an error if dealing with numbers in morse > eng", () => {
    expect(() => morse("2").toBe("morseErrNum");
  });

  it("should throw an error if handling incorrect symbols in morse > eng", () => {
    expect(() => morse("!").toBe("morseErrSym");
    expect(() => morse("@").toBe("morseErrSym");
    expect(() => morse("#").toBe("morseErrSym");
    expect(() => morse("$").toBe("morseErrSym");
    expect(() => morse("%").toBe("morseErrSym");
    expect(() => morse("^").toBe("morseErrSym");
    expect(() => morse("&").toBe("morseErrSym");
    expect(() => morse("*").toBe("morseErrSym");
    expect(() => morse(":").toBe("morseErrSym");
    expect(() => morse("+").toBe("morseErrSym");
  });

  it("should throw an error if only handling + and/ or /", () => {
    expect(() => morse("/").toBe("morseErrMorse");
    expect(() => morse("+").toBe("morseErrMorse");
    expect(() => morse("+/+/").toBe("morseErrMorse");
  });

  it("should throw an error if handling spaces in morse > eng", () => {
    expect(() => morse(".-./.-/ -/").toBe("morseErr"))
  })

  it("should convert single morse code characters into english", () => {
    expect(() => morString(".-").toBe("a");
    expect(() => morString("-.-").toBe("k");
    expect(() => morString("--..").toBe("z");
  });

  it("should convert single english characters into morse", () => {
    expect(() => engString("a").toBe(".-");
    expect(() => engString("k").toBe("-.-");
    expect(() => engString("z").toBe("--..");
  });

  it("should convert morse code words into english words", () => {
    expect(() => morString(".- .--. .--. .-.. . ").toBe("apple");
    expect(() => morString(".-. .- - ").toBe("rat");
    expect(() => morString(".-- .. -. -.. --- .-- ").toBe("window");
 });

  it("should convert english words into morse code", () => {
   expect(() => engString("apple").toBe(".- .-- .-- .-.. . ");
   expect(() => engString("rat").toBe(".-. .- - ");
   expect(() => engString("window").toBe(".-- .. -. -.. --- .-- ");
  });

  xxxit("should convert english sentences into morse code", () => {
    expect(() => english("apple rat window").toBe(".- .-- .-- .-.. . /.-. .- - /.-- .. -. -.. --- .-- ");
  });

  xxxit("should convert morse sentences into english", () => {
    expect(() => morse(".- .-- .-- .-.. . /.-. .- - /.-- .. -. -.. --- .-- ").toBe("apple rat window");
  });

};