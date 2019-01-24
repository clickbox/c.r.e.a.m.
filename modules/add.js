export const cart = []
export const discounts = []

export function toCart(product){
  return product ? cart.push(product) : console.log('Product Not Found')
}

export function toDiscounts(discount) {
  return discount ? discounts.push(discount) : console('Discount Unavailable')
}