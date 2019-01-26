import { Discount } from '../modules/discount'

it('should create new discount object', async () => {
    const newDiscount = new Discount(2, 1, 1, 100)
    await expect.any(newDiscount)
})

it('should show assigned properties of new Discount', async () => {
    const Buy1Get1Free = new Discount(1, 1)
    await expect(Buy1Get1Free.numberToBuy).toEqual(1)
    await expect(Buy1Get1Free.limit).toEqual(1)
})

