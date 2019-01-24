export const cart = []

export function toCart(product){
  return product ? cart.push(product) : console.log('Product Not Found')
}