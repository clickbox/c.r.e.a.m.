import { BulkProduct } from '../modules/bulkProduct'
import * as add from '../modules/add'

it('should calculate price of weighed products', async () => {
    const product = await new BulkProduct('Ground Beef', 5.00, 2)
    product.price = await calculate.bulkPrice(product);
    await add.toCart(product)
    await expect(add.cart[1].price).toBe(10)
    console.log(add.cart)
})