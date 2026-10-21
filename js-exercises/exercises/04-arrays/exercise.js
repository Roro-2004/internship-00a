// Exercise 04 · Arrays
// Use array methods (map, filter, reduce, find, ...) — no for loops!
// Run: npm run test:04

/*
 * Most functions receive a list of products like this:
 * [
 *   { name: "Laptop", price: 1200, qty: 2, category: "tech", inStock: true },
 *   { name: "Mug",    price: 8,    qty: 0, category: "home", inStock: false },
 *   ...
 * ]
 */

/** Return an array of just the product names. */
export function getNames(products) {
  let ProdNames = products.map(x=> x.name);
  return ProdNames;
}

/** Return only the products that are in stock. */
export function getInStock(products) {
  let Available = products.filter(x => x.inStock === true)
  return Available;
}

/** Return the total inventory value: sum of price × qty for every product. */
export function totalValue(products) {
  let total = products.reduce((sum, x)=> sum += (x.qty * x.price), 0 );
  return total;
}

/** Return the product with this exact name, or undefined. */
export function findByName(products, name) {
  let Name = products.find(x => x.name === name);
  return Name;
}

/**
 * Return a NEW array sorted by price, cheapest first.
 * The original array must NOT be changed.
 */
export function sortByPrice(products) {
  return [...products].sort((a,b)=> a.price - b.price);
}

/** Return the names of in-stock products in `category`, in UPPERCASE. (chain them!) */
export function inStockNamesIn(products, category) {
  return  products.filter(x => x.category === category && x.inStock === true).
          map( x => x.name.toUpperCase());
}

/**
 * Group products by category:
 * { tech: ["Laptop", "Phone"], home: ["Mug"] }
 * hint: reduce with an object as the starting value
 */
export function groupByCategory(products) {
  return products.reduce((groups, p) =>{
    if(!groups[p.category])//law msh mawgood e3mlo array fady
      groups[p.category] = []

    groups[p.category].push(p.name);
    return groups
  }
  ,{})

}

/** Remove duplicates. unique([1, 2, 2, 3, 1]) → [1, 2, 3] */
export function unique(items) {
  return [...new Set(items)];
}

/**
 * Split an array into chunks of `size`.
 * chunk([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]]
 * (You may use Array.from or a loop for this one 🙂)
 */
export function chunk(items, size) {
  let arr = [];
  let window = size - 1;
  let temp = []
  for(let i = 0; i<items.length; i++){
    temp.push(items[i]);
    if(i === window){
      arr.push(temp);
      temp = []
      window += size;
    }
    if(temp.length > 0 && i === items.length - 1)
      arr.push(temp);
  }
  return arr;
}
