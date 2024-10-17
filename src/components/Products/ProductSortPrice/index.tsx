import React from 'react';
import './ProductSortPrice.less';
import { ISortBar } from '../../../constant/interface.ts';
import { SORT_TYPE } from '../../../constant';


const ProductSortPrice: React.FC<ISortBar> = ({ ...props }: ISortBar) => {
  const {sortBy, setSortBy } = props;

  return (
    <div className="sort-price__container">
      Sort by: &nbsp;
      <select
        className="sort-price__box"
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <option value={`${SORT_TYPE.ASC}`}>Price from low to high</option>
        <option value={`${SORT_TYPE.DESC}`}>Price from high to low</option>
      </select>
    </div>
  );
};
export default ProductSortPrice;

