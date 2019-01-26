import { Product } from '../modules/products'
import * as lookUpBy from '../modules/calculate'

it('add products to fake inventory', async () => {
    let inventory = []
    const apple = await new Product('Apple', 1.00)
    const lime = await new Product('Lime', .50)
    const orange = await new Product('Orange', 1.50)
    await inventory.push(apple, lime, orange)
    await expect(inventory.length).toEqual(3)
})

it('look up products in fake inventory by id user inputs', async () => {
    let id = 1
    let inventory = []
    const apple = await new Product('Apple', 1.00)
    const lime = await new Product('Lime', .50)
    const orange = await new Product('Orange', 1.50)
    await inventory.push(apple, lime, orange)
    let product = await lookUpBy.ID(id, inventory)
    await expect(product.name).toBe('Lime')
})

it('should say product not found when id is null', async () => {
    let id = 6
    let inventory = []
    const apple = await new Product('Apple', 1.00)
    const lime = await new Product('Lime', .50)
    const orange = await new Product('Orange', 1.50)
    await inventory.push(apple, lime, orange)
    let product = await lookUpBy.ID(id, inventory)
    await expect(product).toEqual('Product Not Found!')
})
