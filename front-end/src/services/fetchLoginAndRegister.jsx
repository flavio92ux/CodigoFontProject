import endpoint from './enpointBackEnd';

export default function fetchLogin(email, password, role) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${endpoint}/${role}`, requestOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
