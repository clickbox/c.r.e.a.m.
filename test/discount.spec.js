import { Discount } from '../modules/discount'

it('should create new discount object', async () => {
    const newDiscount = new Discount(2, 1, 1, 100)
    await expect.any(newDiscount)
})

it('should show assigned properties of new Discount', async () => {
    const Buy1Get1Free = new Discount('Ground Beef', 1, 1, 0, 100)
    await expect(Buy1Get1Free.numToBuy).toEqual(1)
    await expect(Buy1Get1Free.numOnSale).toEqual(1)
    await expect(Buy1Get1Free.limit).toEqual(0)
    await expect(Buy1Get1Free.percentOff).toEqual(100)
    console.log(Buy1Get1Free)
})

it('should have a name of product that discount goes with', async () => {
    const saleOnBeef = new Discount('Ground Beef', 1, 1, 0, 100)
    await expect(saleOnBeef.product).toBe('Ground Beef')
})
