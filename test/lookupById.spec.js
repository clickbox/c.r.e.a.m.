import { Product } from '../modules/products'

it('add products to fake inventory', async () => {
    let inventory = []
    const apple = await new Product('Apple', 1.00)
    const lime = await new Product('Lime', .50)
    const orange = await new Product('Orange', 1.50)
    await inventory.push(apple, lime, orange)
    await expect(inventory.length).toEqual(3)
    await console.log(inventory)
})

it('look up products in fake inventory by id user inputs', async () => {
    let id = 1
    let inventory = []
    const apple = await new Product('Apple', 1.00)
    const lime = await new Product('Lime', .50)
    const orange = await new Product('Orange', 1.50)
    await inventory.push(apple, lime, orange)
    let product = await inventory.filter(filterByID)[id]
    await expect(product.name).toBe('Lime')
})
