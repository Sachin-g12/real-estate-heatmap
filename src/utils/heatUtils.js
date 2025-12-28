// Generate random heatmap points across the world
export function generateGlobalPoints(count = 500, intensity = 1) {
  const points = [];

  for (let i = 0; i < count; i++) {
    const lat = -60 + Math.random() * 120;     // valid latitude
    const lng = -180 + Math.random() * 360;   // valid longitude
    const value = Math.random() * intensity;

    points.push([lat, lng, value]);
  }

  return points;
}
