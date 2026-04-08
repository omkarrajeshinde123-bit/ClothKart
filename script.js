const products = [
  {
    name: "Black T-Shirt",
    price: "₹499",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Denim Jacket",
    price: "₹1299",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Casual Shirt",
    price: "₹799",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Jeans",
    price: "₹999",
    image: "https://via.placeholder.com/200"
  }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button onclick="addToCart('${product.name}')">Add to Cart</button>
  `;

  productList.appendChild(card);
});

function addToCart(productName) {
  alert(productName + " added to cart!");
}
