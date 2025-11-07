const mobiles = [
  { name: "iPhone 15 Pro", price: "₹1,39,900", image: "https://m.media-amazon.com/images/I/81+GIkwqLIL._SL1500_.jpg" },
  { name: "OnePlus 12", price: "₹64,999", image: "https://m.media-amazon.com/images/I/71qGismu6NL._SL1500_.jpg" },
  { name: "ViVO V23 5G", price: "₹32,000", image: "https://m.media-amazon.com/images/I/415CE-T-xNL.jpg" },
  { name: "realme neck band Wireless", price: "₹2,500", image: "https://m.media-amazon.com/images/I/412-YzPRcPL._SX679_.jpg" },
  { name: "Fire Bolt SmartWatch", price: "₹2,000", image: "https://m.media-amazon.com/images/I/61rmkmqD5VL._SX466_.jpg" },
  { name: "iphone 16e 128GB", price: "₹51,499", image: "https://m.media-amazon.com/images/I/31mQwEHtQvL._SX342_SY445_QL70_FMwebp_.jpg" },
  { name: "iphone 16", price: "₹66,900", image: "https://m.media-amazon.com/images/I/31eApLPASUL._SX342_SY445_QL70_FMwebp_.jpg" },
  { name: "XIAOMI 14", price: "₹29,249", image: "https://m.media-amazon.com/images/I/4166f5DXEEL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "Redmi A4 5G ", price: "₹8,399", image: "https://m.media-amazon.com/images/I/41Cd8ElGw8L._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "O3 Pro", price: "₹5,749", image: "https://m.media-amazon.com/images/I/41CGNLzpUGL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "iPhone Air 1 TB", price: "₹1,59,900", image: "https://m.media-amazon.com/images/I/61+0aSXsyGL._SX679_.jpg" },
  { name: "Samsung Galaxy S24 FE 5G", price: "₹34,960", image: "https://m.media-amazon.com/images/I/41efG41nZpL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "Redmi 13 5G", price: "₹11,199", image: "https://m.media-amazon.com/images/I/51hAAMX6sBL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "Motorola G96", price: " ₹16,862", image: "https://m.media-amazon.com/images/I/51h0rsXmIXL.jpg" },
  { name: "iPhone 17 Pro 1 TB", price: "₹1,74,900", image: "https://m.media-amazon.com/images/I/618vU2qKXQL._SX679_.jpg" },
  { name: "Redmi 13 5G ", price: "₹11,199", image: "https://m.media-amazon.com/images/I/51hAAMX6sBL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "iQOO Z10R 5G", price: "₹19,498", image: "https://m.media-amazon.com/images/I/41GJpjvpd9L._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "", price: "", image: "https://m.media-amazon.com/images/I/31Q212fG-WL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "OnePlus Nord CE4 Lite 5G", price: "₹16,999", image: "https://m.media-amazon.com/images/I/31hcJbP0BuL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "Samsung Galaxy S25 Ultra 5G", price: "₹1,41,999", image: "https://m.media-amazon.com/images/I/41zxe8LzGrL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "Infinix Note 50s 5G", price: "₹15,999", image: "https://m.media-amazon.com/images/I/41rz5NjJyKL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "Apple iPad 11″: A16 chip", price: "₹32,900", image: "https://m.media-amazon.com/images/I/41vE9cIx29L._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "Apple iPad Pro 13″ (M4)", price: "₹2,59,900", image: "https://m.media-amazon.com/images/I/41ywxsNiO9L._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "pTron Newly Launched Fusion Bliss 16W Bluetooth Speaker ", price: "₹1,499", image: "https://m.media-amazon.com/images/I/61N4wbWx2VL._SL1200_.jpg" },
  { name: "URBN 20000mAh 35W Turbo Fast Charging Power Bank ", price: "₹1,699", image: "https://m.media-amazon.com/images/I/41FDlBnnBtL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "POCO C71", price: "₹6,799", image: "https://m.media-amazon.com/images/I/610frsvhyBL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "GOBOULT Mustang Torq Wireless in Ear Earbuds", price: "₹1,499", image: "https://m.media-amazon.com/images/I/71rbNPgK-RL._SX466_.jpg" },
  { name: "Amazon Echo Dot (5th Gen) | Smart speaker", price: "₹5,499", image: "https://m.media-amazon.com/images/I/5108OEjU5+L._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "Oppo Reno14 5G (Gold, 8GB RAM", price: "₹39,999", image: "https://m.media-amazon.com/images/I/51oHL6P-IBL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "realme 14 Pro Lite 5G", price: "₹17,990", image: "https://m.media-amazon.com/images/I/41abrKkrYEL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "CEDO Realme 13 Pro", price: "₹299", image: "https://m.media-amazon.com/images/I/41nwXoDJ6UL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "Apple iPhone 14", price: "₹61,900", image: "https://m.media-amazon.com/images/I/3144jXPtX4L._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "Lava Bold N1 Pro", price: "₹6,699", image: "https://m.media-amazon.com/images/I/41gDOU3bRcL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "GRENARO Mic for YouTube Wireless", price: "₹838", image: "https://m.media-amazon.com/images/I/41MhjOOnxLL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "HP 15", price: "₹42,092", image: "https://m.media-amazon.com/images/I/71qeL9SvpeL._AC_UY327_FMwebp_QL65_.jpg" },
  { name: "Dell 15", price: "₹42,990", image: "https://m.media-amazon.com/images/I/410Rx3PCiDL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "Lenovo IdeaPad Slim 5 AMD Ryzen 5", price: "₹58,990", image: "https://m.media-amazon.com/images/I/41AA-4zmGUL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name: "Certified Thinkpad T490s", price: "₹24,990", image: "https://m.media-amazon.com/images/I/51BcLq5OumL._SX679_.jpg" },

 
];

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');

function displayMobiles(list) {
  productList.innerHTML = list.map(mobile => `
    <div class="card">
      <img src="${mobile.image}" alt="${mobile.name}">
      <h3>${mobile.name}</h3>
      <p><strong>${mobile.price}</strong></p>
      <button onclick="buyMobile('${mobile.name}', '${mobile.price}', '${mobile.image}')">Buy Now</button>
    </div>
  `).join('');
}

function buyMobile(name, price, image) {
  // Save selected product details to localStorage
  localStorage.setItem('selectedProduct', JSON.stringify({ name, price, image }));
  // Redirect to order page
  window.location.href = "order.html";
}

searchInput.addEventListener('input', e => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = mobiles.filter(m => m.name.toLowerCase().includes(searchTerm));
  displayMobiles(filtered);
});

displayMobiles(mobiles);
