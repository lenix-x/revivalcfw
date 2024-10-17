import {cart} from './item.js'
import {getProduct} from './product.js'

export function orderSummary() {
  let productPrice = 0

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId)
    productPrice += product.price * cartItem.quantity
  })
  console.log(productPrice)

  const orderHTML = `
      <aside class="order-summary">
      <h1>Order Summary</h1>
      <p>Item(3): $${productPrice}</p>
      <p>Bugatti Bolide(1): $24.99</p>
      <p>Pagani Zodiak(2): $24.99</p>
      <h4>Total Cost: $49.98</h4>
      <button>Confirm The Order</button>
    </aside>
  `
  document.querySelector('.js-aside').innerHTML = orderHTML
}