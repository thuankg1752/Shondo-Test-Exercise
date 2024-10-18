import React, { useEffect, useState } from 'react';
import './ProductDetail.less';
import { IFilterValues, IProductItem } from '../../constant/interface.ts';
import { TIME_LOADING } from '../../constant';
import Spin from '../Spin';
import { ProductFilter } from '../Products/ProductFilter';
import { formatToVND, valueDiscountPercent } from '../../helper';
import ProductItem from '../Products/ProductItem';

const ProductDetail: React.FC = () => {
  const productId = window.location.pathname.split('/')[2];
  const [loading, setLoading] = useState<boolean>(false);
  const [productSameBrand, setProductSameBrand] = useState<IProductItem[]>([]);
  const [filterValue, setFilterValue] = useState<IFilterValues>(
    {
      brand: [],
      category: [],
      color: [],
      size: []
    }
  );
  const [productDetail, setProductDetail] = useState<IProductItem>({
    id: 0,
    name: '',
    image: [],
    description: '',
    price: 0,
    discountPrice: 0,
    brand: '',
    category: '',
    colors: [],
    sizes: [],
    isHot: false,
    quantity: 0
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`/api/dataMockup.json`).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then(json => {
        const product = json.find((item: IProductItem) => item.id === Number(productId));
        setProductDetail(product);
        setProductSameBrand(json.filter((item: IProductItem) => item.brand === product.brand).slice(0, 6));
      }).catch(err => console.log(err)).finally(() => {
        setLoading(false);
      });
    }, TIME_LOADING * 2);
  }, [productId]);


  return ( loading ? <Spin /> : <section className="product-detail__container">
    <div style={{ width: 400, height: 400, gridArea:'gallery' }}>
    </div>
    <div className="product-detail__main-content">
      <div className="product-detail__product-name">
        <h1 className="product-detail__page-title">
            <span>
              {productDetail.name}
            </span>
          <p className={`${productDetail.isHot ? 'product-detail__item--hot' : 'product-detail__item--not-hot'}`}>🔥</p>
        </h1>
      </div>
      <div className="product-detail__product-brand">
        <h3>
          <span>
              {productDetail.brand}
          </span>
        </h3>
      </div>
      <div className="product-detail__sub-info">
        <div className="product-detail__price-block">
          <p className="product-detail__price"><span>{formatToVND(productDetail.price)}</span></p>
          <p className="product-detail__discount-percent">
            <span>{valueDiscountPercent(productDetail.price, productDetail.discountPrice)}</span></p>
        </div>
        <p className="product-detail__price-discount"><span>{formatToVND(productDetail.discountPrice)}</span></p>
        <p
          className={`${productDetail.quantity > 0 ?
            'product-detail__stock--in' :
            'product-detail__stock--out'}`}
        >{productDetail.quantity > 0 ? 'In Stock' : 'Out Stock'}<span>{}</span></p>
      </div>
      <ProductFilter.FilterItem
        title={'Color'}
        filterValue={filterValue}
        isLoadingFilter={false}
        setFilterValue={setFilterValue}
        isBackground={true}
        dataMap={productDetail.colors}
        isSelectOne={true}
      />
      <ProductFilter.FilterItem
        title={'Size'}
        filterValue={filterValue}
        isLoadingFilter={false}
        setFilterValue={setFilterValue}
        isBackground={false}
        dataMap={productDetail.sizes}
        isSelectOne={true}
      />
      <div className="product-detail__action-container">
        <div className="product-detail__quantity">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" max={productDetail.quantity} />
        </div>
        <button type={'button'} className="product-detail__button--cart">Add to cart</button>
        <button type={'button'} className="product-detail__button--buy-now">Buy now</button>
      </div>
    </div>
    <div className="product-detail__description">
      <p>
        {productDetail.description}
      </p>
    </div>
    <div className="product-detail__same-brand-containter">
      <h3>
        Other products same brand
      </h3>
      <div className="product-detail__same-brand">
        {productSameBrand.map((productItem: IProductItem) => (
          <ProductItem productItem={productItem} key={productItem.id} />
        ))}
      </div>
    </div>
  </section> );
};

export default ProductDetail;
