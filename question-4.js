function sortProductsByPrice(products) {
  // Your code here
  const n = products.length - 1;
  for (let i = 0; i < n; i++) {
    // console.log(i);
    for (let j = 0; j < n - i; j++) {
      // console.log(j);
      // console.log(products);
      if (products[j].price > products[j + 1].price) {
        let temp = products[j];
        products[j] = products[j + 1];
        products[j + 1] = temp;
      }
    }
  }
  return products;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
