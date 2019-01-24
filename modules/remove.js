export function lastItem(inventory){
    return inventory.pop()
}

export function firstItem(inventory){
    return inventory.shift()
}

export function lineItem(cart, i){
    if (i !== -1 && typeof cart[i] !== 'undefined'){
       cart.splice(i, 1)
    }
}