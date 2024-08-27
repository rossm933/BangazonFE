import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleProduct } from '../../api/productData';

export default function ViewProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    getSingleProduct(productId).then(setProductDetails);
  }, [productId]);

  return (
    <div
      className="mt-5 d-flex flex-wrap"
    >
      <div className="d-flex flex-column">
        <img src={productDetails.imageUrl} alt={productDetails.title} style={{ width: '300px', border: 'solid 2px black' }} />
      </div>
      <div className="text-black ms-5 details">
        <h5>
          Name: {productDetails.title}
        </h5>
        <p> Description: {productDetails.description || ''}</p>
        <hr />
        <p>
          Price: {productDetails.price}
        </p>
        <p> Number Available: {productDetails.quantityAvailable}</p>
      </div>
    </div>
  );
}
