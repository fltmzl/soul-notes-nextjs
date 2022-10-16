export const debounce = (fn, delay) => {
  let timeoutID;
  return function (...args) {
    if (timeoutID) clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export const getColorClassname = (colorString) => {
  let classname = "bg-customTernary";
  switch (colorString) {
    case "red":
      classname = "bg-card-red";
      break;
    case "blue":
      classname = "bg-card-blue";
      break;
    case "yellow":
      classname = "bg-card-yellow";
      break;
    case "green":
      classname = "bg-card-green";
      break;
    case "orange":
      classname = "bg-card-orange";
      break;
    case "purple":
      classname = "bg-card-purple";
      break;
    case "default":
      break;
    default:
      break;
  }

  return classname;
};
