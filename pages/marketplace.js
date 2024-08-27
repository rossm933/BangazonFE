import { useEffect, useState } from 'react';
import { getAllProducts } from '../api/productData';
import ProductCard from '../components/ProductCard';

export default function ShowAllProducts() {
  const [products, setProducts] = useState([]);
  const showProducts = () => {
    getAllProducts()?.then(setProducts);
  };

  useEffect(() => {
    showProducts();
  }, []);

  return (
    <div id="product-page-div">
      <h1 className="h1"> Products </h1><br />
      <div>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {products.map((product) => (
            <ProductCard key={product.productId} productObj={product} onUpdate={showProducts} />
          ))}
        </div>
      </div>
    </div>
  );
}
