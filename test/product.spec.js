import { Product } from '../modules/products'
import { BulkProduct } from '../modules/bulkProduct'

it('add product works', async () => {
    const cart = []
    const newProduct = await new Product('Ground Beef')
    await cart.push(newProduct)
    const product = await cart[0].name
    await expect(product).toEqual('Ground Beef')
})

it('add product price', async () => {
    const newProduct = await new Product('Ground Beef', 5.00)
    await expect(newProduct.price).toEqual(5.00)
})

it('product is added to cart with price and name', async () => {
    const cart = []
    const newProduct = await new Product('Ground Beef', 5.00)
    await cart.push(newProduct)
    await expect(cart[0].name).toBe('Ground Beef')
    await expect(cart[0].price).toEqual(5.00)
})

it('add product with weight for bulk price by pounds', async () => {
    const newBulkProduct = await new BulkProduct('Ground Beef', 5.00, 2)
    await expect(newBulkProduct.weight).toEqual(2)
})

it('update price of product', async () => {
    const apple = await new Product('Apple', 1.00)
    apple.price = 2.00
    await expect(apple.price).toEqual(2.00)
})

it('should have a quantity property', async () => {
    const lemon = await new Product('Lemon', 1.00, 4)
    await expect(lemon.quantity).toEqual(4)
})

it('should have quantity of 1 if parameter not passed', async () => {
    const melon = await new Product('Melon', 5.00)
    await expect(melon.quantity).toEqual(1)
})

it('should have a total price property', async () => {
    const blueberry = await new Product('Blueberry', 1.00, 4)
    await expect(blueberry.totalPrice).toEqual(null)
})

it('should have saleCounter prop default of 0', async () => {
    const blueberry = await new Product('Blueberry', 1.00, 4)
    await expect(blueberry.saleCounter).toEqual(0)
})

it('should have saleCounter prop default of 0', async () => {
    const blueberry = await new Product('Blueberry', 1.00, 4)
    await expect(blueberry.quantityOnSale).toEqual(null)
})