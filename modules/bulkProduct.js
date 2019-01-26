import { Product } from './products'

export class BulkProduct extends Product {
    constructor(name, price, weight){
        super(name, price)
        this.price = price
        this.weight = weight
    }
}