const randomRGB = () => Math.floor(Math.random() * 256);

const randomAlpha = () => Number((Math.random() * 0.5 + 0.2).toFixed(1));

export const randomRGBA = () => {
  return `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, ${randomAlpha()})`;
};
