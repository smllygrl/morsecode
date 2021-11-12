import { isTypedArray } from "util/types";

import { testFunc } from "./morse";

describe("Morse Code Translator Test Cases"),
  () => {
    const englishError =
      "Invalid input detected, English only takes the letters a-z, A-Z and spaces";
    const morseError =
      "Invalid input detected, please follow Morse input directions";

    it("should throw an error if dealing with numbers or symbols in eng > morse", () => {
      expect(engString("!").toThrowError("englishError"));
      expect(engString("2").toThrowError("englishError"));
    });

    it("should throw an error if dealing with numbers in morse > eng", () => {
      expect(morString("2").toThrowError("morseError"));
    });

    it("should throw an error if handling incorrect symbols", () => {
      expect(morString("!").toThrowError("morseError"));
      expect(morString("@").toThrowError("morseError"));
      expect(morString("#").toThrowError("morseError"));
      expect(morString("$").toThrowError("morseError"));
      expect(morString("%").toThrowError("morseError"));
      expect(morString("^").toThrowError("morseError"));
      expect(morString("&").toThrowError("morseError"));
      expect(morString("*").toThrowError("morseError"));
      expect(morString(":").toThrowError("morseError"));
      expect(morString("+").toThrowError("morseError"));
    });

    // it("should convert single morse code characters into english", () => {
    //   expect(morString(".-").toBe("a"));
    //   expect(morString("-.-").toBe("k"));
    //   expect(morString("--..").toBe("z"));
    // });

    // it("should convert single english characters into morse", () => {
    //   expect(engString("a").toBe(".-"));
    //   expect(engString("k").toBe("-.-"));
    //   expect(engString("z").toBe("--.."));
    // });

    // it("should convert morse code words into english words", () => {
    //   expect(morString(".- .--. .--. .-.. . ").toBe("apple"));
    //   expect(morString(".-. .- - ").toBe("rat"));
    //   expect(morString(".-- .. -. -.. --- .-- ").toBe("window"));
    // });

    // it("should convert english words into morse code", () => {
    //   expect(engString("apple").toBe(".- .-- .-- .-.. . "));
    //   expect(engString("rat").toBe(".-. .- - "));
    //   expect(engString("window").toBe(".-- .. -. -.. --- .-- "));
    // });

    // it("should convert english sentences into morse code", () => {
    //   expect(
    //     engString("apple rat window").toBe(
    //       ".- .-- .-- .-.. . /.-. .- - /.-- .. -. -.. --- .-- "
    //     )
    //   );
    // });

    // it("should convert morse sentences into english", () => {
    //   expect(
    //     morString(".- .-- .-- .-.. . /.-. .- - /.-- .. -. -.. --- .-- ").toBe(
    //       "apple rat window"
    //     )
    //   );
    // });
  };
