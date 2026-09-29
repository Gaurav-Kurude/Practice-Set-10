const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Headphones", price: 150 },
  { name: "Monitor", price: 300 },
];

function filterAffordableProducts(products, maxPrice) {
  return products.filter((product) => product.price <= maxPrice);
}

console.log(filterAffordableProducts(products, 500));

console.log("-------------------------------------------");

const productsOne = [
  { name: "Smartphone", category: "Electronics" },
  { name: "T-Shirt", category: "Clothing" },
  { name: "Laptop", category: "Electronics" },
  { name: "Sofa", category: "Furniture" },
  { name: "Headphones", category: "Electronics" },
  { name: "Jacket", category: "Clothing" },
];

function countCategories(products) {
  return products.reduce((count, product) => {
    const category = product.category;

    count[category] = (count[category] || 0) + 1;

    return count;
  }, {});
}

console.log(countCategories(productsOne));
