import Iterator from "./Iterator";
import Product from "./Product";
import ProductCollection from "./ProductCollection";

const productCollection: ProductCollection = new ProductCollection();
productCollection.add(new Product(1, "apple"));
productCollection.add(new Product(2, "Iphone 17"));
productCollection.add(new Product(3, "Macbook"));
productCollection.add(new Product(4, "Ferrari"));

const iterator: Iterator = productCollection.createIterator();

while (iterator.hasNext()) {
  const product = iterator.current();
  console.log(product);
  iterator.next();
}
