import { Product } from '../modules/products'
// import * as add from '../modules/add'

it('put product in cart', async () => {
    const product1 = await new Product('Ground Beef', 5.00)
    const product2 = await new Product('Apple', 1.00)
    await add.toCart(product1)
    await add.toCart(product2)
    await expect(add.cart[1].name).toBe('Apple')
    await expect(add.cart[1].price).toBe(1.00)
    console.log(add.cart)
})