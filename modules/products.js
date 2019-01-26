import { Buy1Get1Free } from "./buy1get1free";

export class Product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        quantity ? this.quantity = quantity : this.quantity = 1
        this.totalPrice = null
        this.saleCounter = 0
        this.onSaleQuantity = null
        this.discount = []
        this.addDiscount = (discount) => this.discount.push(discount)
        this.applyDiscount = (item) => {
            this.discount.forEach(discount => {
                if (discount instanceof Buy1Get1Free) {
                    if (item.quantity >= discount.numberToBuy 
                        && item.saleCounter < discount.limit) {
                            item.totalPrice = item.quantity * item.price - item.price * discount.numberOff
                            item.onSaleQuantity += discount.numberOff
                            item.saleCounter++
                    } else {
                        console.log('Error! Discount Does Not Apply')
                    }
                }
            })
        }
    }
}

