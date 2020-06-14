import _ from 'underscore';

const INITIAL_STATE = {
  products: {}
};

const convertPrice = (value) => {
  value = value.split(" ");
  value = value[1].split(',');
  value = parseFloat(value[0]) + parseFloat(value[1]) / 100;
  value = value.toFixed(2);
  
  return value;
}

const cartReducer = (state = INITIAL_STATE, action) => {
  let { products } = state;
  let product = {};
  
  switch (action.type) {
    case 'add-cart-item':
      if (_.has(products, action.payload.sku)) {
        
        products[action.payload.sku] = {
          ...products[action.payload.sku],
          qtd: products[action.payload.sku].qtd + 1,
        }
        
      } else {
        
        product = {
          [action.payload.sku]: {
            ...action.payload,
            qtd: 1,
            currentPrice: action.payload.on_sale ? convertPrice(action.payload.actual_price) : convertPrice(action.payload.regular_price)
          }
          
        };
      }
      
      return {...state, products: {...state.products, ...product}};
    case 'remove-cart-item':
  
      if (products[action.payload.sku].qtd === 1) {
        delete products[action.payload.sku];
        return {...state, products: {...products, }};
      }
      
      products[action.payload.sku] = {
        ...products[action.payload.sku],
        qtd: products[action.payload.sku].qtd - 1,
      };
      
      return {...state, products: {...state.products, ...product}};
    case 'remove-all-cart-item':
      delete products[action.payload.sku];
      return {...state, products: {...products, }};
    default:
      return state;
  }
};

export default cartReducer;