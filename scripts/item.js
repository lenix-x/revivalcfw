export let cart;

loadFromStorage()

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));

  if (!cart) {
    cart = [{
      productId: 'e0f223c5-0b28-464b-8f06-716380949e58',
      quantity: 1,
    }]
  }
}
export function resetCartQuantity() {
  localStorage.removeItem('cart')
}

function saveCartQuantity() {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId) {
  let validItem
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      validItem = cartItem
    }
  })
  if (validItem) {
    validItem.quantity += 1
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    })
  }

  saveCartQuantity()
}

export function removeCartItem(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  })
  cart = newCart

  saveCartQuantity()
}