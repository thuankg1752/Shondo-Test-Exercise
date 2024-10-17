const CLIENT: string = '';

export const CLIENT_ROUTE_NAME = {
  PRODUCT: '',
  PRODUCT_DETAIL: 'product-detail',
};
export const CLIENT_ROUTE_PATH = {
  PRODUCT: `${CLIENT}/${CLIENT_ROUTE_NAME.PRODUCT}`,
  PRODUCT_DETAIL: (id: string|number) => `${CLIENT}/${CLIENT_ROUTE_NAME.PRODUCT_DETAIL}/${id}`,
};
