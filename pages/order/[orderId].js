import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { getOrderProducts } from '../../api/orderData';

export default function ViewOrder() {
  const [order, setOrder] = useState([]);
  const router = useRouter();
  const { orderId } = router.query;

  useEffect(() => {
    if (orderId) {
      getOrderProducts(orderId).then((products) => {
        setOrder(products); // Set the state with the products array
      }).catch((error) => {
        console.error('Error fetching order products:', error);
        setOrder([]); // Handle error by setting an empty array
      });
    }
  }, [orderId]);

  const handleUpdate = () => {
    // Logic to update the state or re-fetch the products
    getOrderProducts(orderId).then((products) => {
      setOrder(products);
    });
  };

  return (
    <div className="flex flex-col">
      <div className="shop-layout">
        {order.length > 0 ? (
          order.map((product) => (
            <ProductCard key={product.productId} productObj={product} onUpdate={handleUpdate} isViewOrder />
          ))
        ) : (
          <p>No products found in this order.</p>
        )}
      </div>
    </div>
  );
}

// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import ProductCard from '../../components/ProductCard';
// import { getOrderProducts } from '../../api/orderData';

// export default function ViewOrder() {
//   const [orderDetails, setOrderDetails] = useState({});
//   const [orderId, setOrderId] = useState(null);
//   const router = useRouter();
//   useEffect(() => {
//     if (router.query.id) {
//       setOrderId(router.query.id);
//       getOrderProducts(router.query.id).then((data) => {
//         console.log('Fetched order details:', data);
//         setOrderDetails(data);
//       });
//     }
//   }, [router.query.id]);
//   const handleUpdate = () => {
//     getOrderProducts(orderId).then((data) => {
//       console.log('Updated order details:', data);
//       setOrderDetails(data);
//     });
//   };

//   return (
//     <div className="flex flex-col">
//       <div className="shop-layout">
//         {orderDetails.products?.map((product) => (
//           <ProductCard key={product.productId} productObj={product} orderId={orderId} onUpdate={handleUpdate} isViewOrder />
//         ))}
//       </div>
//     </div>
//   );
// }
