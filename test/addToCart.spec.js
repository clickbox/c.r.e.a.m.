import { Product } from '../modules/products'
import * as add from '../modules/add'

it('put product in cart', async () => {
    let cart = add.cart
    const apple = await new Product('Apple', 1.00)
    const apple2 = await new Product('Apple', 1.00, 3)
    await add.toCart(apple)
    await expect(cart[0].name).toBe('Apple')
    await expect(cart[0].quantity).toEqual(1)
    await add.toCart(apple)
    await expect(cart[0].quantity).toEqual(2)
    await expect(cart.length).toEqual(1)
    await add.toCart(apple2)
    await expect(cart[0].quantity).toEqual(5)
})