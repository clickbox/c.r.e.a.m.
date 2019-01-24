import { Discount } from '../modules/discount'
import * as add from '../modules/add'

it('should add discount to discounts array', async () => {
    let discounts = add.discounts
    const Buy1Get1Free = await new Discount('Ground Beef', 1, 1, 0, 100)
    await add.toDiscounts(Buy1Get1Free)
    await expect.any(discounts)
})