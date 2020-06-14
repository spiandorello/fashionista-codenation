export function addCartItem(product) {
  return {
    type: 'add-cart-item',
    payload: product
  };
}

export function removeCartItem(product) {
  return {
    type: 'remove-cart-item',
    payload: product
  };
}


export function removeAllCartItem(product) {
  return {
    type: 'remove-all-cart-item',
    payload: product
  };
}

