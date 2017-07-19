export function scoreCalculator(gameTime, totalTime, level, numberOfTaps) {
  return ((gameTime + (totalTime * 2)) * (0 + 3) * 20) / numberOfTaps;
}
