import {cart, removeCartItem} from './cart.js'
import { products } from './product.js'

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
  <div class="js-cart-item js-cart-item-content-${validProduct.id}">
    <div class="item-info">
      <div>
        <img src="${validProduct.image}" alt="expired or deleted">
      </div>
      <div> ${validProduct.name} </div>
    </div>
    <hr>
    <div class="item-price">$${validProduct.price}</div>
    <div class="item-status">متوفر</div>
    <div class="item-btns">
      <button class="btn-buy">شراء الأن</button>
      <button class="btn-delete js-delete-item" data-product-id="${validProduct.id}" > إزالة من السلة </button>
    </div>
    <div class="delivery-timing"> مدة التسليم : <span style="color: aqua;"> 3 </span> ساعة (ساعات) </div>
    <hr>
    <div class="cart-quanity">quantity: ${cartItem.quantity}</div>
    <h4> حول الغرض</h4>
    <p> في يوم من الأيام، قررت أن أذهب في رحلة إلى الجبال العالية لأستمتع بالمناظر الطبيعية الخلابة والهواء النقي. عندما وصلت إلى قمة الجبل، شعرت بالهدوء والسلام الداخليين،وكأنني بعيد عن كل صخب الحياة اليومية. تأملت السماء الزرقاء الصافية والطيور التي تحلق بحرية، وفكرت في مدى جمال الطبيعة التي تحيط بنا والتي نغفل عنها في زحمة الحياة </p>
    <hr>
  </div>
`
})
document.querySelector('.js-item').innerHTML = cartInformation

document.querySelectorAll('.js-delete-item').forEach((link) => {
 link.addEventListener('click', () => {
  const productId = link.dataset.productId;
  removeCartItem(productId);
  const content = document.querySelector(`.js-cart-item-content-${productId}`)
  content.remove();
 })
})
