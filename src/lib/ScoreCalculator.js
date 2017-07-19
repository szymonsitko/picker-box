export function scoreCalculator(gameTime, totalTime, level, numberOfTaps) {
  if (numberOfTaps > 0) {
    return Math.round(( (((gameTime + (totalTime * 2)) * (level + 1)) - numberOfTaps) * 10) / 2 );
  }
  if (numberOfTaps <= 0) {
    return 0;
  }
}
