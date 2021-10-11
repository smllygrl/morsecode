import { isTypedArray } from "util/types";

describe("Morse Code Translator Test Cases"), () => {

    it("should convert single morse code characters into english", () => {
      expect(() => morse(".-").toBe("a");
      expect(() => morse("-.-").toBe("k");
      expect(() => morse("--..").toBe("z");
    });

    it("should convert single english characters into morse", () => {
      expect(() => english("a").toBe(".-");
      expect(() => english("k").toBe("-.-");
      expect(() => english("z").toBe("--..");
    });

    it("should seperate morse code characters with a /", () =>

    it("should seperate morse code words with an empty string")

    it("should convert morse code words into english words", () => {
        expect(() => morse(".-/.--/.--/.-../.").toBe("apple");
        expect(() => morse(".-./.-/-").toBe("rat");
        expect(() => morse(".--/../-./-../---/.--").toBe("window");
    });

    it("should convert english words into morse code", () => {
        expect(() => english("apple").toBe(".-/.--/.--/.-../.");
        expect(() => english("rat").toBe(".-./.-/-");
        expect(() => english("window").toBe(".--/../-./-../---/.--");
    });


};