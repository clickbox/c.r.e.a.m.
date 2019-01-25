export class Product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        quantity ? this.quantity = quantity : this.quantity = 1
    }
}

