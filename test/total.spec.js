import { Product } from '../modules/products'
import * as add from '../modules/add'
import * as calculate from '../modules/calculate'


it('should remove last product added to cart', async () => {
    let cart = await add.cart
    const apple = await new Product('Apple', 1.00, 6)
    const lime = await new Product('Lime', .50, 2)
    const orange = await new Product('Orange', 1.50, 2)
    await add.toCart(apple)
    await add.toCart(lime)
    await add.toCart(orange)
    let total = await calculate.theTotal(cart)
    expect(total).toEqual(10)
    console.log(total)
})