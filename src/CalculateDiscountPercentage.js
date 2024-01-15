export const CalculateDiscountPercentage = (price, compareAtPrice) => {
  if (!compareAtPrice || compareAtPrice <= price) {
    return 0;
  }
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
};
