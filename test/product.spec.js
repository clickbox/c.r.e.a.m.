import { Product } from '../modules/products';
import { BulkProduct } from '../modules/bulkProduct';

it('add product works', async () => {
    const cart = [];
    const newProduct = await new Product('Ground Beef');
    await cart.push(newProduct);
    const product = await cart[0].name;
    await expect(product).toEqual('Ground Beef');
});

it('add product price', async () => {
    const newProduct = await new Product('Ground Beef', 5.00);
    await expect(newProduct.price).toEqual(5.00);
});

it('product is added to cart with price and name', async () => {
    const cart = [];
    const newProduct = await new Product('Ground Beef', 5.00);
    await cart.push(newProduct);
    await expect(cart[0].name).toBe('Ground Beef');
    await expect(cart[0].price).toEqual(5.00);
});

it('add product with weight for bulk price by pounds', async () => {
    const cart = [];
    const newBulkProduct = await new BulkProduct('Ground Beef', 5.00, 2);
    await expect(newBulkProduct.weight).toEqual(2);
    await console.log(newBulkProduct);
})