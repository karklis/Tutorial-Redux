export const priceFormat = (price: number) => {
  return `R$${(price / 100).toFixed(2)}`;
};
