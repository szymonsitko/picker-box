export function scoreCalculator(gameTime, level, numberOfTaps) {
  if (numberOfTaps > 0) {
    return Math.round(
      (
        (
          (
            (
              (1 / gameTime) * 1000) * 5) * (Math.pow(level + 1, 2)
            )
          ) + Math.floor(
        (1 / numberOfTaps) * 1000)
      )
    );
  }
  if (numberOfTaps <= 0) {
    return 0;
  }
}
