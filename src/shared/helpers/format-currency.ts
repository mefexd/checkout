export default function formatCurrency(number: number): string {
  const numberAsPence = number / 100;
  return numberAsPence.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
}
