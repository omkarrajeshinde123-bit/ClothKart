const products = [
  {
    name: "Black T-Shirt",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    name: "Denim Jacket",
    price: "₹1299",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea"
  },
  {
    name: "Casual Shirt",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  },
  {
    name: "Jeans",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1583001809873-a128495da465"
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
