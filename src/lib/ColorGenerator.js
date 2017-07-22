import * as constants from '../constants';

export function getRandomColor(colorsObject) {
  return (
    colorsObject[Math.floor(Math.random() * Object.keys(colorsObject).length)]
  );
}

export function boxColorsGenerator(level) {
  // This will return number of colors for box building,
  // depending on the difficulty level!
  switch (level) {
    case 0:
      return constants.COLORS_EASY;
    case 1:
      return constants.COLORS_MEDIUM;
    case 2:
      return constants.COLORS_HARD;
    default:
      return constants.COLORS_EASY;
  }
}
