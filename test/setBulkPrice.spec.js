import { BulkProduct } from '../modules/bulkProduct'
import * as calculate from '../modules/calculate'
import * as add from '../modules/add'

it('should calculate price of weighed products', async () => {
    let cart = add.cart
    let beef = await new BulkProduct('Ground Beef', 5.00, 2)
    await expect(beef.price).toBe(5.00)
    await add.toCart(beef)
    let total = await calculate.theTotal(cart)
    expect(total).toEqual(10)
})
