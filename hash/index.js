const hash = (seed='') => {
  let val = 0,
    i,
    chr;
  if (seed.length === 0) return val;
  for (i = 0; i < seed.length; i++) {
    chr = seed.charCodeAt(i);
    val = (val << 5) - val + chr;
    val |= 0;
  }
  return Math.abs(val);
};

module.exports = { hash };
