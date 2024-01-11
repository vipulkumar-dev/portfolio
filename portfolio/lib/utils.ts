export const getRandRgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

//  function to get rotation two beetween numbers
export const getRandRotation = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
