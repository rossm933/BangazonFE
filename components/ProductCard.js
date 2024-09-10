import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { addProductToOrder, removeProductFromOrder } from '../api/orderData';

export default function ProductCard({
  productObj, onUpdate, isViewOrder, orderId,
}) {
  const addThisProduct = () => {
    if (window.confirm(`Add ${productObj.title} to your cart?`)) {
      const payload = {
        orderId: 3,
        productId: productObj.productId,
      };
      addProductToOrder(payload)
        .then(() => {
          onUpdate();
          console.warn(payload);
        })
        .catch((error) => {
          console.error('Error adding product to order:', error);
        });
    }
  };

  const deleteProductFromOrder = () => {
    if (window.confirm(`Delete ${productObj.title}?`)) {
      removeProductFromOrder(orderId, productObj.productId).then(() => onUpdate());
    }
  };

  return (
    <Card style={{
      width: '18rem', margin: '10px', border: 'solid 5px black', background: '#D4D4D4',
    }}
    >
      <Card.Img variant="top" src={productObj.imageUrl} alt={productObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title className="card-title">{productObj.title}</Card.Title>
        <Card.Text className="card-text">Price: {productObj.price}</Card.Text>
        <Card.Text className="card-text">{productObj.category ? productObj.category.name : 'No Category'}</Card.Text>
        <Card.Footer className="card-footer">
          <Button style={{ background: '#235347', border: 'solid 1px black' }}>
            <Link href={`/products/${productObj.productId}`}>Details</Link>
          </Button>
        </Card.Footer>
        {!isViewOrder && (
          <Button variant="danger" style={{ background: '#0000FF', border: 'solid 1px black' }} onClick={addThisProduct} className="m-2">
            Add to cart
          </Button>
        )}
        {isViewOrder && (
          <Button variant="danger" onClick={deleteProductFromOrder} className="m-2">
            Delete from order
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    productId: PropTypes.number,
    quantityAvailable: PropTypes.number,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func,
  isViewOrder: PropTypes.bool, // Add this line
  orderId: PropTypes.number,
};

ProductCard.defaultProps = {
  isViewOrder: false, // Default to false if not provided
  orderId: 3,
  onUpdate: () => {},
};
