import { Product } from '../modules/products'
import * as remove from '../modules/remove'

it('should remove last product added to cart', async () => {
    let inventory = await []
    const apple = await new Product('Apple', 1.00)
    const lime = await new Product('Lime', .50)
    const orange = await new Product('Orange', 1.50)
    await inventory.push(apple, lime, orange)
    await expect(inventory.length).toEqual(3)
    await expect(inventory[2].name).toBe('Orange')
    await remove.lastItem(inventory)
    await expect(inventory.length).toEqual(2)
    await expect(inventory[inventory.length -1].name).toBe('Lime')
})

it('should remove first product in cart', async () => {
    let inventory = await []
    const apple = await new Product('Apple', 1.00)
    const lime = await new Product('Lime', .50)
    const orange = await new Product('Orange', 1.50)
    await inventory.push(apple, lime, orange)
    await expect(inventory.length).toEqual(3)
    await expect(inventory[0].name).toBe('Apple')
    await remove.firstItem(inventory)
    await expect(inventory.length).toEqual(2)
    await expect(inventory[0].name).toBe('Lime')
})

it('should remove first product in cart', async () => {
    let id = await 1
    let cart = add.cart
    const apple = await new Product('Apple', 1.00)
    const lime = await new Product('Lime', .50)
    const orange = await new Product('Orange', 1.50)
    await add.toCart(apple, lime, orange)
    await expect(cart.length).toEqual(3)
    await expect(cart[1].name).toBe('Lime')
    await cart.remove.lineItem(id)
    await expect(cart.length).toEqual(2)
    await expect(cart[2].name).toBeUndefined()
    await expect(cart[1].name).toBe('Orange')
})


