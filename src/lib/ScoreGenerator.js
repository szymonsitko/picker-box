export function scoreGenerator(level) {
  switch (level) {
    case 0:
      return 12 * 6;
    case 1:
      return 12 * 4;
    case 2:
      return 12 * 2;
    default:
      return 12;
  }
}

export function boxColorsGenerator() {
  // This will return number of colors for box building,
  // depending on the difficulty level!
}
