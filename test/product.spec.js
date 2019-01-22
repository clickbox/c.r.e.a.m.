it('add product works', async () => {
    const product = await cart[0].name;
    expect(product).toEqual('Ground Beef');
}) 