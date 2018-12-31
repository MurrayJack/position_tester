export const positionFix = (xPos, yPos, container, fixed, dynamic) => {
  // container: { Width : Height }
  // fixed : { Top: Left : Width : Height }
  // dynamic : { Width : Left }
  // returns : { x: y }

  const newXPos = xAxisPos(xPos, fixed, dynamic, container);
  const newYPOS = yAxisPos(yPos, fixed, dynamic, container);

  return { x: newXPos, y: newYPOS };
};

const yAxisPos = (yPos, fixed, dynamic, container) => {
  let newPos = "";
  if (
    yPos === "Bottom" &&
    fixed.Top + fixed.Height + dynamic.Height >= container.Height
  ) {
    newPos = "Top";
  } else if (yPos === "Top" && fixed.Top - dynamic.Height <= 0) {
    newPos = "Bottom";
  }
  return newPos;
};

const xAxisPos = (yPos, fixed, dynamic, container) => {
  let newPos = "";
  if (yPos === "Left" && fixed.Left + dynamic.Width >= container.Width) {
    newPos = "Right";
  } else if (yPos === "Right" && fixed.Left - dynamic.Width <= 0) {
    newPos = "Left";
  }
  return newPos;
};
