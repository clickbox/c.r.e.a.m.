import { Buy1Get1Free } from '../modules/buy1get1free'

it('should be a subclass of Discount with number off prop', async () => {
    let discount = new Buy1Get1Free(1, 1, 3)
    await expect(discount.numberToBuy).toEqual(1)
    await expect(discount.numberOff).toEqual(1)
    await expect(discount.limit).toEqual(3)
})