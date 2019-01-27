import { Product } from '../modules/products';
import * as add from '../modules/add'
import * as calculate from '../modules/calculate'

it('Should add quantity of product', async () => {
    let cart = await add.cart
    const skateboard = await new Product('Supreme Skateboard', 300)
    await expect(skateboard.quantity).toEqual(1)
    await skateboard.add(skateboard, 2)
    await expect(skateboard.quantity).toEqual(3)
    await add.toCart(skateboard)
    let total = await calculate.theTotal(cart)
    await expect(total).toEqual(900)
})