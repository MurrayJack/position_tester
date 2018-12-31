import * as enzyme from "enzyme";
import * as React from "react";
import * as ReactDom from "react-dom";

const EnzymeAdapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new EnzymeAdapter() });

import { positionFix } from "./position";

describe("position", () => {
  describe("BottomLeft", () => {
    //
    it("putting things in the right place works!", () => {
      const test = positionFix(
        "Left",
        "Bottom",
        { Width: 1000, Height: 1000 },
        { Top: 0, Left: 0, Width: 20, Height: 20 },
        { Width: 200, Height: 200 }
      );

      expect(test.Position).toEqual("None");
    });

    it("BottomRight", () => {
      const test = positionFix(
        "Left",
        "Bottom",
        { Width: 1000, Height: 1000 },
        { Top: 0, Left: 980, Width: 20, Height: 20 },
        { Width: 200, Height: 200 }
      );

      expect(test.Position).toEqual("BottomRight");
    });
  });
});
