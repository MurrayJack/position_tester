export const positionFix = (x, y, container, fixed, dynamic) => {
  // container: { Width : Height }
  // fixed : { Top: Left : Width : Height }
  // dynamic : { Width : Left }
  // returns : { Position }

  let returnPosition = "None";

  const fitLeftRight = leftRight(x, fixed, container);

  if (fitLeftRight) {
    returnPosition = "Bottom" + fitLeftRight;
  }

  return { Position: returnPosition };
};

const leftRight = (original, fixed, container) => {
  let newPos = "";
  if (fixed.Left + fixed.Width >= container.Width) {
    newPos = "Right";
  }

  if (original === newPos) {
    return undefined;
  }

  return newPos;
};
