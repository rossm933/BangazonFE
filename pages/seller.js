// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import ProductCard from '../components/ProductCard';
// import { getAllProducts } from '../api/productData';

// export default function SellerPage() {
//   const [products, setProducts] = useState([]);
//   const sellerId = 1; // Replace with the actual seller ID, probably from user context or props

//   useEffect(() => {
//     getAllProducts()
//       .then((productArray) => {
//         const sellerProducts = productArray.filter((product) => product.sellerId === sellerId);
//         setProducts(sellerProducts);
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   return (
//     <Container>
//       <h1>Your Listed Products</h1>
//       <Row>
//         {products.map((product) => (
//           <Col key={product.productId} md={4}>
//             <ProductCard
//               productObj={product}
//               onUpdate={() => {
//                 // Optionally refresh product list or perform other actions
//                 console.log('Product updated');
//               }}
//             />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }
