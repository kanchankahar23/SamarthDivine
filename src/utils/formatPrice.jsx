export function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function getDiscount(original, current) {
  if (!original || original <= current) return null;
  return `${Math.round(((original - current) / original) * 100)}% OFF`;
}