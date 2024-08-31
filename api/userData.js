const endpoint = 'http://localhost:5024';

const getUserDetails = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/users/details/${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => resolve(data))
    .catch(reject);
});

const switchUserToSeller = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/users/sell/${uid}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => resolve(data))
    .catch(reject);
});
export {
  getUserDetails,
  switchUserToSeller,
};
