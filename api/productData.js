const endpoint = 'http://localhost:5024';

const getAllProducts = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleProduct = (productId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/products/${productId}`, {
    method: 'GET',
    headers: {
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getAllProducts, getSingleProduct };
