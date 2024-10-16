import {cart, removeCartItem, resetCartQuantity} from './item.js'
import {products} from './product.js'

let cartInformation = ''

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let validProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      validProduct = product
    }
  })

cartInformation += `
  <div class="cart-item js-cart-item-content-${validProduct.id}">
    <div class="item-info">

      <div class="item-image-and-name">
        <img src="${validProduct.image}" alt="expired or deleted">
        <div class="item-name"> ${validProduct.name} </div>
      </div>

      <div class="item-price-and-status">
        <div class="item-price">$${validProduct.price} : سعر الشراء</div>
        <div class="item-status"> الحالة : متوفر </div>
        <div class="cart-quanity">${cartItem.quantity} :الكمية</div>
        <div class="delivery-timing"> مدة التسليم : <span style="color: aqua;"> 3 </span> ساعة (ساعات) </div>
      </div>
      <div class="item-btns">

        <button class="btn-buy js-reset-cart-quantity"> Reset </button>
        <button class="btn-buy">شراء الأن</button>

        <button class="btn-delete js-delete-item" data-product-id="${validProduct.id}" > إزالة من السلة </button>
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