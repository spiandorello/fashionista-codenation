export function addCart(product) {
  return {
    type: 'add-cart',
    payload: product
  };
}