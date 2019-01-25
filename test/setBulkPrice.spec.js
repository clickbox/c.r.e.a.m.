import { BulkProduct } from '../modules/bulkProduct'
import * as calculate from '../modules/calculate'

it('should calculate price of weighed products', async () => {
    let product = await new BulkProduct('Ground Beef', 5.00, 2)
    await expect(product.price).toBe(10)
})

it('should calculate price in constructor', async () => {
    let peanuts = await new BulkProduct('Peanuts', 2.50, 4)
    await expect(peanuts.price).toEqual(10)
})