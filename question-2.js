function findProductPrice(products, name) {
  // Your code here
  let left = 0;
  let right = products.length - 1;
  let result = -1;
  while (left <= right) {
    let min = Math.floor((right + left) / 2);
    if (products[min].name < name) {
      left = min + 1;
    } else if (products[min].name > name) {
      right = min - 1;
    } else {
      result = products[min].price;
      break;
    }
  }
  return result;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
