import React from 'react';
import { IProductItem } from '../../../constant/interface.ts';
import './ProductItem.less';
import { CLIENT_ROUTE_PATH } from '../../../constant/routes.ts';
import { formatToVND, valueDiscountPercent } from '../../../helper';

interface IProductItemProps {
  productItem: IProductItem;
}

const ProductItem: React.FC<IProductItemProps> = ({ ...props }: IProductItemProps) => {
  const { productItem } = props;
  const { id, image, name, description, price, discountPrice } = productItem;

  return (
    <div id={id.toString()} className="product-item__container">
      <a href={CLIENT_ROUTE_PATH.PRODUCT_DETAIL(id)}>
        <img src={`${image[0]}`} alt={`${image[0]}`} loading="lazy" className="product-item__image" />
      </a>
      <div className="product-item__info-container">
        <a href={CLIENT_ROUTE_PATH.PRODUCT_DETAIL(id)} className="product-item__name">{name}</a>
        <p className="product-item__description">{description}</p>
        <div className="product-item__price-box">
          <p className="product-item__price">{formatToVND(price)}</p>
          <span className="product-item__discount-percent">{valueDiscountPercent(price, discountPrice)}</span>
        </div>
        <p className="product-item__price-discount">{formatToVND(discountPrice)}</p>
      </div>
    </div>
  );
};
export default ProductItem;
