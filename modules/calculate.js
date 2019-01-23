export function bulkPrice(product){
    product.price = product.price * product.weight 
}

export function ID(id, inventory){
    return inventory[id] ? inventory[id] : 'Product Not Found!'
}
