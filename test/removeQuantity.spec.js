import { Product } from '../modules/products';
import * as add from '../modules/add'
import * as calculate from '../modules/calculate'

it('Should reduce quantity of product', async () => {
    let cart = await add.cart
    const skateboard = await new Product('Supreme Skateboard', 300, 3)
    await expect(skateboard.quantity).toEqual(3)
    await skateboard.remove(skateboard, 2)
    await expect(skateboard.quantity).toEqual(1)
    await add.toCart(skateboard)
    let total = await calculate.theTotal(cart)
    await expect(total).toEqual(300)
})

