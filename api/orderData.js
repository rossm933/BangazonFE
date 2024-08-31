const endpoint = 'http://localhost:5024';

const getAllOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      return response.json();
    })
    .then((data) => {
      const ordersWithPaymentType = data.map((order) => ({
        ...order,
        paymentType: order.paymentType ? order.paymentType.category : null,
      }));
      resolve(ordersWithPaymentType);
    })
    .catch((error) => {
      reject(error);
    });
});

const getSingleOrder = (orderId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${orderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const addProductToOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/addProduct`, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
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

const removeProductFromOrder = (orderId, productId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${orderId}/products/${productId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      resolve(response.json());
    })
    .catch(reject);
});

const getOrderProducts = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${id}/products`, {
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
    .then((data) => {
      // Assuming the API returns an Order object with a Products property
      const products = data?.products || []; // Safely access Products and default to an empty array if undefined
      resolve(products);
    })
    .catch((error) => reject(error));
});

export {
  getSingleOrder,
  getAllOrders,
  createOrder,
  updateOrder,
  addProductToOrder,
  getOrderProducts,
  removeProductFromOrder,
};
