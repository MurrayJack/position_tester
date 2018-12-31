import * as enzyme from "enzyme";
import { positionFix } from "./position";

const EnzymeAdapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new EnzymeAdapter() });

describe("position", () => {
  describe("x axis tests", () => {
    it("Right -> no movement", () => {
      const test = positionFix(
        "Left",
        "Bottom",
        { Width: 1000, Height: 1000 },
        { Top: 0, Left: 0, Width: 20, Height: 20 },
        { Width: 200, Height: 200 }
      );
      expect(test.x).toEqual("");
    });

    it("Left -> no movement", () => {
      const test = positionFix(
        "Right",
        "Bottom",
        { Width: 1000, Height: 1000 },
        { Top: 0, Left: 980, Width: 20, Height: 20 },
        { Width: 200, Height: 200 }
      );
      expect(test.x).toEqual("");
    });

    it("Left -> Right", () => {
      const test = positionFix(
        "Left",
        "Bottom",
        { Width: 1000, Height: 1000 },
        { Top: 0, Left: 980, Width: 20, Height: 20 },
        { Width: 200, Height: 200 }
      );
      expect(test.x).toEqual("Right");
    });

    it("Right -> Left", () => {
      const test = positionFix(
        "Right",
        "Bottom",
        { Width: 1000, Height: 1000 },
        { Top: 0, Left: 0, Width: 20, Height: 20 },
        { Width: 200, Height: 200 }
      );
      expect(test.x).toEqual("Left");
    });
  });

  describe("y axis tests", () => {
    it("Bottom -> no movement", () => {
      const test = positionFix(
        "Left",
        "Bottom",
        { Width: 1000, Height: 1000 },
        { Top: 0, Left: 0, Width: 20, Height: 20 },
        { Width: 200, Height: 200 }
      );
      expect(test.y).toEqual("");
    });

    it("Top -> no movement", () => {
      const test = positionFix(
        "Left",
        "Top",
        { Width: 1000, Height: 1000 },
        { Top: 980, Left: 0, Width: 20, Height: 20 },
        { Width: 200, Height: 200 }
      );
      expect(test.y).toEqual("");
    });

    it("Bottom -> Top", () => {
      const test = positionFix(
        "Left",
        "Bottom",
        { Width: 1000, Height: 1000 },
        { Top: 980, Left: 0, Width: 20, Height: 20 },
        { Width: 200, Height: 200 }
      );
      expect(test.y).toEqual("Top");
    });

    it("Top -> Bottom", () => {
      const test = positionFix(
        "Left",
        "Top",
        { Width: 1000, Height: 1000 },
        { Top: 0, Left: 0, Width: 20, Height: 20 },
        { Width: 200, Height: 200 }
      );
      expect(test.y).toEqual("Bottom");
    });
  });
});
