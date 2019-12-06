const stats = values => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const spread = max - min;
  const average = values.reduce((a, b) => a + b, 0) / values.length;
  return { min, max, spread, average };
};

module.export = { stats };
