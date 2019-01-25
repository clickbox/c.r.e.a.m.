export const cart = []
export const discounts = []
export function toCart(product){
  let inCart = cart.find(cart => cart.name === product.name)
  inCart ? inCart.quantity += product.quantity : cart.push(product)
}

export function toDiscounts(discount) {
  return discount ? discounts.push(discount) : console('Discount Unavailable')
}