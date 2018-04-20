
const endpoint = 'http://api.smspay.devz.no/v1';

// Login on SMSpay
export async function login (user, password) {
  const res = await fetch(`${endpoint}/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      password,
    }),
  });
  const data = await res.json();

  if(!data.token) {
    throw data;
  }
  return data;
}


// Create a new order on SMSpay
export async function createOrder (order, auth) {
  if(!auth || !auth.token) {
    return null;
  }

  const res = await fetch(`${endpoint}/payments`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.token}`
    },
    body: JSON.stringify(order),
  });
  const data = await res.json();

  if(!data.reference) {
    throw data;
  }
  return data;
}


// Retrieve an order from SMSpay
export async function getOrder (id, auth) {
  if(!auth || !auth.token) {
    return null;
  }

  const res = await fetch(`${endpoint}/payments/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${auth.token}`
    },
  });
  const data = await res.json();

  if(!data.reference) {
    throw data;
  }
  return data;
}


// Retrieve an order from SMSpay
export async function getMerchant (id, auth) {
  if(!auth || !auth.token) {
    return null;
  }

  const res = await fetch(`${endpoint}/merchants/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${auth.token}`
    },
  });
  const data = await res.json();

  if(!data.reference) {
    throw data;
  }
  return data;
}
