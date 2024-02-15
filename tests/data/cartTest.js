import { loadFromStorage, cart, addToCart } from "../../scripts/data/cart.js";

describe('test suite: addToCart', () => {

  beforeEach(() => {
    // Mock localStorage.getItem to return an empty array
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(['1']));
    console.log(localStorage.getItem('dac'))
    // Ensure cart is reset to its default state
  });

  it('adds a new product to the cart', () => {
    loadFromStorage();
    const productId = 'someProductId';
    addToCart(productId);

    // Assert that the cart has been updated correctly with the new product
    expect(cart.length).toBe(1);
    expect(cart[0].productId).toBe(productId);
  });
});