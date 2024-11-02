import {cart} from './item.js'
import {getProduct} from './product.js'

export function orderSummary() {
  let productPrice = 0

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId)
    productPrice += product.price * cartItem.quantity
  })

  const orderHTML = `
    <aside class="order-summary">
    <div>شرائك لهاذه المنتجات والخدمات تعني موافقتك على شروط و سياسات و قوانين المتجر </div>
      <div>
        <h4>Total Cost: <span style="color: var(--dominant1); text-shadow: 0 0 1rem var(--dominant1)"> $${productPrice} </span></h4>
        <a class="btn-available" href="https://discord.com/channels/1185127949360439296/1226913653865840771">Confirm The Order</a>      
      </div>
      <a class="go-back" href="../store.html">Back To Store</a> 
      <!--<button class="js-reset-cart-quantity"> Reset The Cart </button>-->
    </aside>
  `
  document.querySelector('.js-aside').innerHTML = orderHTML
}