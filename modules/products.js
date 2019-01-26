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
    }
}

