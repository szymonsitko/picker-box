export function getRandomColor(colorsObject) {
  return (
    colorsObject[Math.floor(Math.random() * Object.keys(colorsObject).length)]
  );
}
