export function getProduct(productId) {
  let validProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      validProduct = product
    }
  })

  return validProduct
}
export const products = [{
  id: 'e0f223c5-0b28-464b-8f06-716380949e58',
  image:'../images/vehicle/hyper/veh1.png',
  name: 'Bugatti Bolide',
  price: 2999 / 100,
  rent: '--.--'
}, {
  id: 'c94c9ee2-4101-4573-8d95-e4d09d088808',
  image:'../images/vehicle/hyper/veh10.png',
  name: 'Koenigsegg Jesko',
  price: 2499 / 100,
  rent: '--.--'
}, {
  id: '39d83293-22a0-468b-a044-82822e196c85',
  image:'../images/vehicle/hyper/veh6.png',
  name: 'Pagani Imola',
  price: 2499  / 100,
  rent: '--.--'
}, {
  id: 'd6ebfb2e-60fa-42ba-8345-8e2e28d4a2e5',
  image:'../images/vehicle/hyper/veh3.png',
  name: 'Ferrari F150 LaFerrari',
  price: 1999 / 100,
  rent: '--.--'
}, {
  id: '9253e138-3161-491d-851d-b20699315503',
  image:'../images/vehicle/hyper/veh8.png',
  name: 'Mclaren Senna',
  price: 1999 / 100,
  rent: '--.--'
}, {
  id: 'db72fefe-7b38-4c5b-aa9c-bf57b5fc7130',
  image:'../images/vehicle/super/veh19.png',
  name: 'Lamborghini Aventador LP700',
  price: 1499 / 100,
  rent: '--.--'
}, {
  id: 'f176c05c-b59a-498a-b0df-7bdd87651bd0',
  image:'../images/vehicle/super/veh11.png',
  name: 'Audi R8 Hycade',
  price: 1499 / 100,
  rent: '--.--'
}, {
  id: '6e0f4a51-c0b0-4613-a8c6-f56478946da3',
  image:'../images/vehicle/super/veh25.png',
  name: 'Porsche 911 GT3',
  price: 1499 / 100,
  rent: '--.--'
}, {
  id: '6c237dd2-1439-4b4d-800e-fd53d84730d7',
  image:'../images/vehicle/super/veh13.png',
  name: 'Aston Martin Vulcan',
  price: 1499 / 100,
  rent: '--.--'
}, {
  id: '9b83fc5f-09a5-4dc9-a958-1a6bb1fdcfb3',
  image:'../images/vehicle/super/veh27.png',
  name: 'Mclaren 720s',
  price: 1499 / 100,
  rent: '--.--'
}, {
  id: '3382a500-7e81-4ee8-802e-4ca236afe3d0',
  image:'../images/vehicle/super/veh16.png',
  name: 'Bentley Continental Supersports',
  price: 1499 / 100,
  rent: '--.--'
}, {
  id: 'fbd86ada-408d-46cb-ad09-27c9df2609ce',
  image:'../images/vehicle/super/veh23.png',
  name: 'Mercedes Benz-AMG GT Black Series',
  price: 1499 / 100,
  rent: '--.--'
}, {
  id: 'a485771c-3547-45f9-bdd9-cef6e075b637',
  image:'../images/vehicle/super/veh17.png',
  name: 'Lamborghini Huracan',
  price: 1499 / 100,
  rent: '--.--'
}, {
  id: 'c7ea1df9-c439-4f48-8001-5fb7f3092901',
  image:'../images/vehicle/super/veh22.png',
  name: 'Mclaren 675LT',
  price: 1499 / 100,
  rent: '--.--'
}, {
  id: 'ea585351-1761-4cef-ac7b-b44f6a9020c0',
  image:'../images/vehicle/sport/veh41.png',
  name: 'Mercedes Benz-AMG C63',
  price: 999 / 100,
  rent: '--.--'
}, {
  id: '82c17685-572a-4eb9-9ec0-bb58d642a8cb',
  image:'../images/vehicle/sport/veh51.png',
  name: 'BMW M5 C5',
  price: 999 / 100,
  rent: '--.--'
}, {
  id: 'f95e5ed7-5823-4301-b581-3e6795b63a74',
  image:'../images/vehicle/sport/veh53.png',
  name: 'Porsche Panamera Turbo',
  price: 999 / 100,
  rent: '--.--'
}, {
  id: '28da33b5-8628-46cc-a1fe-1f8be2e8e798',
  image:'../images/vehicle/sport/veh31.png',
  name: 'Ford GT',
  price: 999 / 100,
  rent: '--.--'
}, {
  id: 'de27e082-0799-45bb-9de9-cbfb48af4976',
  image:'../images/vehicle/sport/veh43.png',
  name: 'Mercedes Benz-AMG GT63 S',
  price: 999 / 100,
  rent: '--.--'
}, {
  id: '3d510307-e4cc-40cc-b74a-3c968327116f',
  image:'../images/vehicle/sport/veh33.png"',
  name: 'Ford Mustang',
  price: 999 / 100,
  rent: '--.--'
}, {
  id: '95453e16-6691-405a-bb73-ca52b7e69f87',
  image:'../images/vehicle/sport/veh45.png',
  name: 'Nissan GTR',
  price: 999 / 100,
  rent: '--.--'
}, {
  id: '7b73a46c-8d7a-4d98-8447-c6bd80c14a78',
  image:'../images/vehicle/sport/veh35.png',
  name: 'Lexus LFA',
  price: 999 / 100,
  rent: '--.--'
}, {
  id: '823c67cb-07f4-47e8-af6d-096e984de1d3',
  image:'../images/vehicle/sport/veh37.png',
  name: 'Maseratti Gran Turismo LW',
  price: 999 / 100,
  rent: '--.--'
}, {
  id: '07ce2c60-2584-4b09-b877-da6a6d2f855b',
  image:'../images/vehicle/sport/veh29.png',
  name: 'Chevrolet Camaro ZL1 Hennessey',
  price: 999 / 100,
  rent: '--.--'
}, {
  id: '14c13f08-2163-4b1a-b003-e1f970cfea93',
  image:'../images/vehicle/sport/veh47.png',
  name: 'Toyota Supra A90',
  price: 999 / 100,
  rent: '--.--'
}, {
  id: 'fdb34ba7-1d89-4724-8e48-9b7394ec78c0',
  image:'../images/vehicle/sport/veh49.png',
  name: 'Brabham BT62R',
  price: 999 / 100,
  rent: '--.--'
}, {
  id: '29c16634-6102-4dd2-9fa7-287a93d58d21',
  image:'../images/vehicle/sport/veh39.png',
  name: 'Mazda RX7',
  price: 999 / 100,
  rent: '--.--'
}, {
  id: 'ccd353b2-2156-4126-811d-974bda5f8c24',
  image:'../images/vehicle/other/veh59.png',
  name: 'Polestar 1',
  price: 499 / 100,
  rent: '--.--'
}, {
  id: '1149a429-1f33-42b8-926b-9c2745444767',
  image:'../images/vehicle/other/veh55.png',
  name: 'Cadillac Escalade',
  price: 499 / 100,
  rent: '--.--'
}, {
  id: '04d9d162-db0c-4182-ad65-272bfa69064a',
  image:'../images/vehicle/other/veh57.png',
  name: 'Range Rover',
  price: 499 / 100,
  rent: '--.--'
}];


const houseProducts = [{
  id: 'c3cd28d6-c385-4d37-956c-7e4438e6c835',
  image:'../images/house/castle.png',
  name: '#1 Castle | قصر',
  price: 2499 / 100,
  rent: 999,
}, {
  id: '24a7572d-69f9-40d7-9f92-e263be53fc13',
  image:'../images/house/house.jpg',
  name: '#1 Villa | فيلا',
  price: 1999 / 100,
  rent: 999,
}, {
  id: '01e458ed-ca4b-4e31-b12a-3810ee8fb1dd',
  image:'../images/house/house.jpg',
  name: '#2 Villa | فيلا',
  price: 1999 / 100,
  rent: 999,
}, {
  id: 'fedb5adb-875f-4996-85e5-a5dee8bd87ef',
  image:'../images/house/house.jpg',
  name: '#3 Villa | فيلا',
  price: 1899 / 100,
  rent: 899,
}, {
  id: '0d5c4baf-af30-4a46-bafd-5fddc5e324ca',
  image:'../images/house/house.jpg',
  name: '#4 Villa | فيلا',
  price: 1799 / 100,
  rent: 799,
}, {
  id: 'cf92536b-60ab-4982-bfd2-9f90cd5e3ca4',
  image:'../images/house/house.jpg',
  name: '#5 Villa | فيلا',
  price: 1699 / 100,
  rent: 699,
}, {
  id: 'a60c9191-9895-4368-bea2-a1c5b1a2599d',
  image:'../images/house/house.jpg',
  name: '#6 Villa | فيلا',
  price: 1599 / 100,
  rent: 599,
}, {
  id: '7ef2e999-67f9-41b9-862a-20ae11ee4acd',
  image:'../images/house/house.jpg',
  name: '#7 Villa | فيلا',
  price: 1499 / 100,
  rent: 499,
}, {
  id: '3abb76ce-8577-428a-89b0-eff56525c146',
  image:'../images/house/house.jpg',
  name: '#8 Villa | فيلا',
  price: 1399 / 100,
  rent: 399,
}, {
  id: '82f59e8f-244b-413d-921f-844021f967e8',
  image:'../images/house/house.jpg',
  name: '#9 Villa | فيلا',
  price: 1399 / 100,
  rent: 399,
}, {
  id: 'e9f1c11b-600c-4926-b511-4b6354f8527d',
  image:'../images/service.jpg',
  name: ' قراج مركبات | المستوى الثالث ' ,
  price: 1999 / 100,
  rent: 999,
}, {
  id: 'ee2d1c34-2b16-4005-bf27-12f40818cd4e',
  image:'../images/service.jpg',
  name: ' قراج مركبات | المستوى الثاني ' ,
  price: 1499 / 100,
  rent: 699,
}, {
  id: '4675c211-6317-49b1-b6e1-2fec23240ec4',
  image:'../images/service.jpg',
  name: ' قراج مركبات | المستوى الأول ' ,
  price: 999 / 100,
  rent: 499,
}]

/* let houseProductsHT = ''
restaurantProducts.forEach((product) => {
  houseProductsHT += `
          <div class="store-item">
        <div class="store-item-up-restaurants">
          <a href="store/item.html"><img src="${product.image}" alt="expired or deleted"></a>
        </div>
        <div class="store-item-down">
          <div class="store-item-info">
            <div class="store-item-name">${product.name}</div>
            <div class="store-price-buy"> $${product.price / 100} <span> : شراء</span> </div>
            <div class="store-price-rent"> $${product.rent / 100} <span> : إيجار</span> </div>
          </div>
          <button class="btn-available">إضافة الى السلة</button>
        </div>
      </div>
  `  
}) 

document.querySelector('.js-estate-products').innerHTML = houseProductsHT */