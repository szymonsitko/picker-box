export function scoreGenerator(level) {
  switch (level) {
    case 0:
      return 12 * 8;
    case 1:
      return 12 * 6;
    case 2:
      return 12 * 4;
  }
}
