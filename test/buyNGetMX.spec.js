import { Product } from '../modules/products'
import { BuyNGetMX } from '../modules/buyNGetMX'
import * as add from '../modules/add'
import * as calculate from '../modules/calculate'

it('should add buy n get m for x percent off discount', async () => {
    let cart = await add.cart
    const grape = await new Product('Grape', 10, 3)
    const buy3Get2HalfOff = await new BuyNGetMX(3, 2, .5, 1)
    await grape.addDiscount(buy3Get2HalfOff)
    await grape.applyDiscount(grape)
    await add.toCart(grape)
    let total = await calculate.theTotal(cart)
    console.log(grape.discount)
    console.log(total)
    await expect(total).toEqual(20)
})