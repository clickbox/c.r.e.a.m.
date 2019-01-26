export const cart = []

export function toCart(product){
  let inCart = cart.find(cart => cart.name === product.name)
  inCart ? inCart.quantity += product.quantity : cart.push(product)
}