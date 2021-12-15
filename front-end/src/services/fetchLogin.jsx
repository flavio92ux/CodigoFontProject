import endpoint from './enpointBackEnd';

export default function fetchLogin(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${endpoint}/login`, requestOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
