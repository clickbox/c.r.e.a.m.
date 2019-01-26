
import { BulkProduct } from '../modules/bulkProduct'
import * as add from '../modules/add'
import * as calculate from '../modules/calculate'

it('should get total of bulk products', async () => {
    let cart = await add.cart
    const beef = await new BulkProduct('Ground Beef', 5.00, 5)
    await add.toCart(beef)
    await calculate.theTotal(cart)
    let total = await calculate.theTotal(cart)
    expect(total).toEqual(25)
})