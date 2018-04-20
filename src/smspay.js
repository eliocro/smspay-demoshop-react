
const endpoint = 'http://api.smspay.devz.no/v1';
let auth = {};

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
    })
  });
  const data = await res.json();

  if(!data.token) {
    throw data;
  }

  auth = data;
  return data;
}

export function getAuth () {
  return auth;
}

export function setAuth (_auth) {
  auth = _auth;
}

export function createOrder () {

}

export function getOrder () {

}
