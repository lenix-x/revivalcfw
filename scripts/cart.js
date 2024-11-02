import {cart, removeCartItem, resetCartQuantity } from './item.js'
import {getProduct} from './product.js'
import {orderSummary} from './order.js'

orderSummary()

let cartInformation = ''

cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  const validProduct = getProduct(productId)

cartInformation += `
  <div class="cart-item js-cart-item-content-${validProduct.id}">
    <div class="item-info">
      <div class="main">
        <img src="${validProduct.image}" alt="expired or deleted">
      </div>
      <div class="interactions">
        <div class="description">
          <div class="item-name">${validProduct.name}</div>
        </div>
        <div class="price">
          <div class="item-price">(${cartItem.quantity})</div>
          <div class="item-price">$${validProduct.price}</div>
          <div class="item-price">$${validProduct.rent}</div>
        </div>
      </div>
      <div>
        <i class="fas fa-xmark js-delete-item" data-product-id="${validProduct.id}" title="حذف المنتج او الخدمة السلة"></i>
      </div>
    </div>
  </div>
`
})

document.querySelector('.js-item').innerHTML = cartInformation

document.querySelectorAll('.js-reset-cart-quantity').forEach((btn) => {
  btn.addEventListener('click', () => {
    resetCartQuantity()
  })
})

document.querySelectorAll('.js-delete-item').forEach((link) => {
 link.addEventListener('click', () => {
  const productId = link.dataset.productId;
  removeCartItem(productId);
  const content = document.querySelector(`.js-cart-item-content-${productId}`)
  content.remove();
})
})