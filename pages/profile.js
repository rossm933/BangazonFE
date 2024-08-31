import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import UserCard from '../components/UserCard';
import { getUserDetails, switchUserToSeller } from '../api/userData';

const UserDetailsPage = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const authenticatedUserId = user.uid;
        getUserDetails(authenticatedUserId)
          .then((data) => {
            setUserDetails(data);
          })
          .catch((error) => {
            console.error('Error fetching user details:', error);
          });
      } else {
        console.log('No user is signed in.');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSwitchToSeller = () => {
    switchUserToSeller(userDetails.uid)
      .then((updatedUser) => {
        setUserDetails(updatedUser);
        console.log('User updated to seller:', updatedUser);
      })
      .catch((error) => {
        console.error('Error updating user to seller:', error);
      });
  };

  return (
    <div className="user-details-container">
      {userDetails && (
        <>
          <UserCard userDetails={userDetails} handleSwitchToSeller={handleSwitchToSeller} />
        </>
      )}
    </div>
  );
};

export default UserDetailsPage;
