import endpoint from './enpointBackEnd';

export default async function fetchImageProduct(idProduct, formData, token) {
  const id = await idProduct;

  const requestOptions = {
    method: 'PATCH',
    headers: {
      Authorization: token,
    },
    body: formData,
  };

  return fetch(`${endpoint}/product/${id}/image`, requestOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
