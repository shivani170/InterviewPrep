// Users can sort by:

// Price
// Rating
// Newest

class PriceSort {
  sort(products) {
    return products.sort((a, b) => a.price - b.price);
  }
}

class RatingSort {
  sort(products) {
    return products.sort((a, b) => b.rating - a.rating);
  }
}

class ProductSorter {
  constructor(strategy) {
    this.strategy = strategy;
  }

  sort(products) {
    return this.strategy.sort(products);
  }
}

const sorter =
  new ProductSorter(new PriceSort());

sorter.sort(products);