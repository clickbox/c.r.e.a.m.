import { Product } from '../modules/products'
import { BulkProduct } from '../modules/bulkProduct'
import * as add from '../modules/add'

it('should add both type of product to cart', async () => {
    const cart = add.cart;
    const product1 = await new BulkProduct('Ground Beef', 5.00, 5)
    const product2 = await new Product('Apple', 1.00)
    await add.toCart(product1)
    await add.toCart(product2)
    await expect(cart[1].name).toBe('Apple')
    await expect(cart[1].price).toEqual(1)
    await expect(cart[0].name).toBe('Ground Beef')
    await expect(cart[0].price).toEqual(5.00)
    await expect(cart[0].weight).toEqual(5)
})