export let cart = [{
  productId: 'e0f223c5-0b28-464b-8f06-716380949e58',
  quantity: 1,
}, {
  productId: 'c94c9ee2-4101-4573-8d95-e4d09d088808',
  quantity: 1
}]

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
}

export function removeCartItem(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.id !== productId) {
      newCart.push(cartItem);
    }
  })

  cart = newCart
}