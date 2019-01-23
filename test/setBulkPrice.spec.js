import { BulkProduct } from '../modules/bulkProduct'
import * as add from '../modules/add'
import * as calculate from '../modules/calculate'

it('should calculate price of weighed products', async () => {
    const cart = add.cart
    const product = await new BulkProduct('Ground Beef', 5.00, 2)
    product.price = await calculate.bulkPrice(product);
    await expect(product.price).toBe(10)
    console.log(product)
})