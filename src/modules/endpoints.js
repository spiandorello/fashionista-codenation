import Config from '../config';

export const endpoints = {
  getCatalog: {
    url: `${Config.CLIENTS.servicesUri}/v1/catalog`,
    options: {
      method: 'GET'
    }
  }
}
