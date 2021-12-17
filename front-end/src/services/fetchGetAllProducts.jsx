import endpoint from './enpointBackEnd';

export default async function fetchGetAllProducts() {
  return fetch(`${endpoint}/products`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
