const cart = {
  cartItems: undefined,
  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem('cart-oop'));
  
    if (!this.cartItems) {
      this.cartItems = [{
        productId: 'e0f223c5-0b28-464b-8f06-716380949e58',
        quantity: 1,
      }]
    }
  },
  resetCartQuantity() {
    localStorage.removeItem('cart-oop')
  },
  saveCartQuantity() {
    localStorage.setItem('cart-oop', JSON.stringify(this.cartItems))
  },
  addToCart(productId) {
    let validItem
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        validItem = cartItem
      }
    })
    if (validItem) {
      validItem.quantity += 1
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1
      })
    }
  
    this.saveCartQuantity()
  },
  removeCartItem(productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    })
    this.cartItems = newCart
  
    this.saveCartQuantity()
  }
}

cart.loadFromStorage