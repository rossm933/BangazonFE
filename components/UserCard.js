import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import Link from 'next/link';

function UserDetailCard({ userDetails, handleSwitchToSeller }) {
  return (
    <Card className="user-details-card" style={{ width: '22rem', margin: '20px' }}>
      <Card.Body>
        <Card.Title className="d-flex flex-column align-items-center justify-content-center" id="user-detail-card-title">User Details</Card.Title>
        <Card.Text><strong>First Name:</strong> {userDetails.firstName}</Card.Text>
        <Card.Text><strong>Last Name:</strong> {userDetails.lastName}</Card.Text>
        <Card.Text><strong>User Name:</strong> {userDetails.userName}</Card.Text>
        <Card.Text><strong>Address:</strong> {userDetails.address}</Card.Text>
        <Card.Text><strong>Email:</strong> {userDetails.email}</Card.Text>
        <div className="d-flex flex-column align-items-center justify-content-center">
          {/* <Link href={`/user/edit/${userDetails.uid}`} passHref>
            <Button className="user-card-button" variant="danger">EDIT</Button>
          </Link>

          {userDetails.Seller && (
            <Link href="/product/new" passHref>
              <Button className="user-card-button" variant="danger">Sell a Product</Button>
            </Link>
          )} */}

          {!userDetails.Seller && (
            <Button type="button" className="user-card-button" onClick={handleSwitchToSeller} variant="danger">
              Become a Seller
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

UserDetailCard.propTypes = {
  userDetails: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userName: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    Seller: PropTypes.bool,
    uid: PropTypes.string,
  }).isRequired,
  handleSwitchToSeller: PropTypes.func.isRequired,
};

export default UserDetailCard;
