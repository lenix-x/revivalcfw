// import * as anything from 'example' | this to import anything from example without exporting everytime

import {cart, addToCart} from './cart.js'
import {products} from './product.js'

let productsHTML = ''
products.forEach((product) => {
  productsHTML += `
      <div class="store-item">
      <div class="store-item-up-cars">
        <a href="../store/item.html"><img src="${product.image}" alt="expired or deleted"></a>
      </div>
        <div class="store-item-down">
        <div class="store-item-info">
        <div class="store-item-name">${product.name}</div>
        <div class="store-price-buy">$${product.price / 100} &nbsp;<span style="color: white;"> :شراء </span> </div>
        <div class="store-price-buy">$${product.rent} &nbsp;<span style="color: white;"> :إيجار </div>
      </div>
      <button class="btn-available js-add-to-cart" data-product-id="${product.id}">إضافة الى السلة</button>
      </div>
    </div>
  `
})

document.querySelector('.js-car-products').innerHTML = productsHTML;

function updateCartQuantity() {
  let cartQuantity = 0
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity
  })
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity 
}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    addToCart(productId)
    updateCartQuantity()
  })
})