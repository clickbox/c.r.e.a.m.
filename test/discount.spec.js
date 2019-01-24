import { Discount } from '../modules/discount'

it('should create new discount object', async () => {
    const newDiscount = new Discount(2, 1, 1, 100)
    await expect.any(newDiscount)
})