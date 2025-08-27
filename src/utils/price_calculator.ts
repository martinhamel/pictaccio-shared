export function calculatePriceByQuantity(price: number, quantity: number): number {
    return parseFloat((price / quantity).toFixed(2));
}
