export const cart = []

export function toCart(product){
    if(product){
        cart.push(product)
      } else{
        console.log('Item not found!')
    }
}