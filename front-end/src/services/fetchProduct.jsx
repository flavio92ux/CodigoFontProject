import endpoint from './enpointBackEnd';

export default function fetchProduct(body, token) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(body),
  };

  return fetch(`${endpoint}/product`, requestOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
