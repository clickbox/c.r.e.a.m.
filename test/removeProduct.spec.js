import { Product } from '../modules/products'

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
