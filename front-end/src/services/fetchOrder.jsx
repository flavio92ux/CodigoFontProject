import endpoint from './enpointBackEnd';

export default function fetchOrder(listId, token) {
  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };

  const response = listId.map((id) => (
    fetch(`${endpoint}/product/${id}`, requestOptions)
      .then((res) => res.json())
      .catch((err) => console.log(err))
  ));

  return response;
}
