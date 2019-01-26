export function bulkPrice(product){
    product.price = product.price * product.weight 
}

export function ID(id, inventory){
    return inventory[id] ? inventory[id] : 'Product Not Found!'
}

export function discounts(cart) {
    cart.forEach(product => {
        product.applyDiscount(product)
    })
}

export function theTotal(cart){
    return cart.reduce(function(total, product){
      return total + ((product.price * product.quantity) + (product.totalPrice = null ? product.totalPrice : 0))
    }, 0)
}
