import { Product } from './products';

it('add product works', async () => {
    const cart = [];
    const newProduct = await new Product('Ground Beef');
    await cart.push(newProduct);
    const product = await cart[0].name;
    await expect(product).toEqual('Ground Beef');
}) 