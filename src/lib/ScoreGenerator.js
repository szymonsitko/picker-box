export function scoreGenerator(level) {
  switch (level) {
    case 0:
      return 12 * 5;
    case 1:
      return Math.floor(12 * 3.5);
    case 2:
      return Math.floor(12 * 1.75);
  }
}
