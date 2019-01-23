import { BulkProduct } from '../modules/bulkProduct'
import * as calculate from '../modules/calculate'

it('should calculate price of weighed products', async () => {
    let product = await new BulkProduct('Ground Beef', 5.00, 2)
    await calculate.bulkPrice(product);
    await expect(product.price).toBe(10)
    console.log(product)
})