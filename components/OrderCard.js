import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function OrderCard({ orderObj }) {
  return (
    <Card className="complete-order-card" style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title className="card-title">{orderObj.orderId}</Card.Title>
        {orderObj.orderComplete ? (
          <Card.Text>Closed</Card.Text>
        ) : (
          <Card.Text>Current Order</Card.Text>
        )}
        {orderObj.paymentType && ( // Check if paymentType is not null
        <Card.Text>Payment Type: {orderObj.paymentType}</Card.Text>
        )}
        <Link href={`order/${orderObj.orderId}`} passHref>
          <Button className="user-card-button" style={{ background: '#235347', border: 'solid 1px black' }}>VIEW DETAILS</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    orderId: PropTypes.number,
    orderComplete: PropTypes.bool,
    paymentType: PropTypes.string,
  }).isRequired,
};

export default OrderCard;
