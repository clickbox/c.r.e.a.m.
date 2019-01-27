import { Product } from '../modules/products'
import { BuySetFor } from '../modules/buySetFor'
import * as add from '../modules/add'
import * as calculate from '../modules/calculate'

it('should remove last product added to cart', async () => {
    let cart = await add.cart
    const apple = await new Product('Apple', 3, 4)
    const threeForTen = await new BuySetFor(3, 10, 1)
    await apple.addDiscount(threeForTen)
    await apple.applySetPrice(apple)
    await add.toCart(apple)
    let total = await calculate.theTotal(cart)
    expect(total).toEqual(10)
    console.log(total)
})