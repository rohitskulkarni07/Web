/**
 *
 * web application that tracks and manages the inventory of a warehouse.
 * The application needs to display a list of products along with their quantities.
 * Additionally, it should allow users to increment or decrement the quantity of a product.
 *
 */

function createProduct(product_name, initial_quantity) {
  let quantity = initial_quantity;

  return {
    getProductName: function () {
      return product_name;
    },

    getProductQuantity: function () {
      return quantity;
    },

    incrementQuantity: function () {
      quantity += 1;
    },

    decrementQuantity: function () {
      if (quantity > 0) {
        quantity -= 1;
      }
    },

  };
}

const product1 = createProduct("earbuds", 10);
const product2 = createProduct("HairOil", 5);

console.log(product1.getProductName()); // 'earbuds'
console.log(product1.getProductQuantity()); // 10
console.log(product1.incrementQuantity()); 
console.log(product1.getProductQuantity()); // 11

console.log(product2.getProductName()); // 'HairOil'
console.log(product2.getProductQuantity()); // 5
console.log(product2.decrementQuantity());
console.log(product2.getProductQuantity()); // 4
