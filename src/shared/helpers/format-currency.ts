export default function formatCurrency(number : number): string {
 return number.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });
}
