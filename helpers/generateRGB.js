const genColor = () => (
  Math.floor(Math.random() * 255)
);

const generateRGB = (opacity = 1) => {
  const [r, g, b] = [genColor(), genColor(), genColor()];
  return `rgba(${r},${g},${b},${opacity})`;
};

export default generateRGB;
