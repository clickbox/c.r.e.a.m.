import { Product } from '../modules/products'
import { Buy1Get1Free } from '../modules/buy1get1free'
import * as add from '../modules/add'
import * as calculate from '../modules/calculate'

it('should apply discounts before getting cart total', async () => {
    let cart = await add.cart
    const grape = await new Product('Grape', 1.00, 6)
    const peach = await new Product('Peach', .50, 2)
    const watermelon = await new Product('Watermelon', 1.50, 2)
    const buy1Get1Free = await new Buy1Get1Free(2, 1, 1)
    await grape.addDiscount(buy1Get1Free)
    await add.toCart(grape)
    await add.toCart(peach)
    await add.toCart(watermelon)
    await calculate.discounts(cart)
    let total = await calculate.theTotal(cart)
    console.log(cart)
    expect(total).toEqual(9)
})