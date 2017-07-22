export function scoreCalculator(totalTime, level, numberOfTaps) {
  if (numberOfTaps > 0) {
    return Math.round(
      (((totalTime * 2) * (Math.pow(level + 1, 2))) + Math.floor((1 / numberOfTaps) * 1000))
    );
  }
  if (numberOfTaps <= 0) {
    return 0;
  }
}
