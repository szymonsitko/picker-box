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
