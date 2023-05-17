/**
 * This function calculate the total price of my order, withm all products seleted
 * @param {Array} products cardProducts: Array of obejects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
  let sum = 0
  products.forEach(product => sum += product.price)
  return sum
}