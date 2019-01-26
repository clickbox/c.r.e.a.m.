import { Buy1Get1Free } from '../modules/buy1get1free'
import { Product } from '../modules/products'
import * as add from '../modules/add'

it('should add discount to discounts array', async () => {
    let cart = add.cart
    const Jeep = await new Product('Jeep', 80000, 2)
    await expect(Jeep.quantity).toEqual(2)
    const buy1Get1Free = await new Buy1Get1Free(2, 1, 1)
    await Jeep.addDiscount(buy1Get1Free)
    await Jeep.applyDiscount(Jeep)
    await add.toCart(Jeep)
    console.log(cart)
})