// Exercise 08 · Classes — build a ShoppingCart 🛒
// Run: npm run test:08

/**
 * Requirements (read the tests for exact behaviour!):
 *
 * const cart = new ShoppingCart();
 *
 * cart.addItem({ name: "Book", price: 12.5 }, 2)
 *   - quantity defaults to 1
 *   - adding an item that's already in the cart INCREASES its quantity
 *   - throws Error("Invalid quantity") if quantity isn't a positive integer
 *   - throws Error("Invalid price") if price isn't a number >= 0
 *   - returns `this` so calls can be chained: cart.addItem(a).addItem(b)
 *
 * cart.removeItem("Book")       removes the item completely (no error if missing)
 * cart.updateQuantity("Book", 5) sets quantity; 0 removes the item
 *
 * cart.itemCount   (getter) total number of units, e.g. 2 books + 1 pen = 3
 * cart.subtotal    (getter) sum of price × quantity, rounded to 2 decimals
 * cart.total       (getter) subtotal minus discount, rounded to 2 decimals
 * cart.items       (getter) a COPY of the items array: [{ name, price, quantity }]
 *                  (changing the returned array must not change the cart!)
 *
 * cart.applyCoupon(code)
 *   - "SAVE10" → 10% off,  "HALF" → 50% off
 *   - anything else throws Error("Invalid coupon")
 *   - codes are case-insensitive
 *
 * cart.clear()  empties the cart and removes the coupon
 *
 * Store your data in PRIVATE fields (#items, #discount).
 */
export class ShoppingCart {
  #items = [];
  #discount = 0;

  addItem(item, quantity = 1) {
    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new Error("Invalid quantity");
    }
    if (typeof item.price !== "number" || item.price < 0) {
      throw new Error("Invalid price");
    }
    const existingItem = this.#items.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.#items.push({ name: item.name, price: item.price, quantity });
    }

    return this;
  }

  removeItem(name) {
    this.#items = this.#items.filter(item => item.name !== name);
  }

  updateQuantity(name, quantity) {
    if (quantity === 0) {
      this.removeItem(name);
      return;
    }
    
    const existingItem = this.#items.find(i => i.name === name);
    if (existingItem) {
      existingItem.quantity = quantity;
    }
  }

  get itemCount() {
    return this.#items.reduce((total, item) => total + item.quantity, 0);
  }

  get subtotal() {
    const sum = this.#items.reduce((total, item) => total + (item.price * item.quantity), 0);
    return Math.round(sum *100)/100
  }

  get total() {
    let discountedTotal = this.subtotal * (1 - this.#discount);
    return Math.round(discountedTotal *100)/100
  }

  get items() {
    return this.#items.map(item => ({ ...item }));
  }

  applyCoupon(code) {
    let cleanCode ="";
    if(typeof code === "string"){
      cleanCode = code.toUpperCase()
    }
  
    if (cleanCode === "SAVE10") {
      this.#discount = 0.10;
    } else if (cleanCode === "HALF") {
      this.#discount = 0.50;
    } else {
      throw new Error("Invalid coupon");
    }
  }

  clear() {
    this.#items = [];
    this.#discount = 0;
  }
}
