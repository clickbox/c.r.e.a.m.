import { Buy1Get1Free } from './buy1get1free'
import { PercentOff } from './percentOff'
import { BuySetFor } from '../modules/buySetFor'

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
        this.remove = (item, numberToRemove) => {
            item.quantity >= 1 ? item.quantity -= numberToRemove : console.log('Nothing to remove!')
        }
        this.add = (item, numberToAdd) => {
            item.quantity += numberToAdd
        }
        this.applySetPrice = (item) => {
            this.discount.forEach(discount => {
                    while (item.saleCounter < discount.limit) {
                        item.totalPrice = discount.priceForSet
                        item.saleCounter++
                    }
            })
        }
        this.applyDiscount = (item) => {
            this.discount.forEach(discount => {
                if (discount instanceof Buy1Get1Free) {
                    while (item.quantity >= discount.numberToBuy && item.saleCounter < discount.limit) {
                        if (item.totalPrice == null) {
                            item.totalPrice = item.quantity * item.price - item.price * discount.numberOff
                        } else {
                            item.totalPrice -= item.price * discount.numberOff
                        }
                        item.onSaleQuantity += discount.numberOff
                        item.quantity -= discount.numberOff
                        item.saleCounter++
                    }
                } else if (discount instanceof PercentOff && item.quantity >= discount.numberToBuy) {
                    item.price = discount.percentOff * item.price
                } else {
                    if (item.totalPrice == null) {
                            item.totalPrice = item.quantity * item.price - ((item.price * discount.percentOff) * discount.numberOff)
                        } else {
                            item.totalPrice -= (item.price * discount.numberOff) * discount.percentOff
                        }
                    item.onSaleQuantity += discount.numberOff
                    item.quantity -= discount.numberOff
                }
            })
        }
    }
}

