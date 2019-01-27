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
        if (product.weight == undefined) {
            if (product.totalPrice == null) {
                return total + product.price * product.quantity
            } else {
                return total + product.totalPrice
            }
        } else {
            if (product.totalPrice == null) {
                return total + product.price * product.weight
            } else {
                return total + product.totalPrice
            }
        } 
    }, 0)
}
