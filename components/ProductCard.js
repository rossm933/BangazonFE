import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function ProductCard({ productObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={productObj.imageUrl} alt={productObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title className="card-title">{productObj.title}</Card.Title>
        <Card.Text className="card-text">Price: {productObj.price}</Card.Text>
        <Card.Text className="card-text">{productObj.category ? productObj.category.name : 'No Category'}</Card.Text>
        <Card.Footer className="card-footer"><Button><Link href={`/products/${productObj.productId}`}>Details</Link></Button></Card.Footer>
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
};
