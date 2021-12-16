import endpoint from './enpointBackEnd';

export default function fetchOrder(id, token) {
  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };

  return fetch(`${endpoint}/product/${id}`, requestOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
