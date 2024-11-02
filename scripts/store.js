// import * as anything from 'example' | this to import anything from example without exporting everytime
// import sometimes can ne and must be without curlybrackets which if it was a default export => export default formatfunction
import {cart, addToCart} from './item.js'
import {products} from './product.js'

let productsHTML = ''
products.forEach((product) => {
  productsHTML += `
    <div class="store-item">
      <div class="store-item-up">
        <a href="../store/item.html"><img src="${product.image}" alt="expired or deleted"></a>
      </div>
      <div class="store-item-down">
        <div class="store-item-info">
          ${product.productTypeHTML()}
          <div class="store-item-name">${product.name}</div>
          <div class="store-price-buy">$${product.price}<span> :شراء </span> </div>
          <div class="store-price-rent">$${product.rent}<span> :إيجار </div>
        </div>
        <button class="btn-available js-add-to-cart" data-product-id="${product.id}">إضافة الى السلة</button>
      </div>
    </div>
  `
})

document.querySelector('.js-products').innerHTML = productsHTML;

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