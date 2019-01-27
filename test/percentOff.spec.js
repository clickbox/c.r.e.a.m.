import { Product } from '../modules/products'
import { PercentOff } from '../modules/percentOff'
import * as add from '../modules/add'
import * as calculate from '../modules/calculate'

it('should apply percent off to item in cart', async () => {
    let cart = await add.cart
    const grape = await new Product('Grape', 10, 5)
    const fiftyPercentOff = await new PercentOff(1, .5)
    await grape.addDiscount(fiftyPercentOff)
    await add.toCart(grape)
    await calculate.discounts(cart)
    let total = await calculate.theTotal(cart)
    console.log(cart)
    expect(total).toEqual(25)
})