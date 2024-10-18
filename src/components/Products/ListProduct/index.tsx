import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import { IFilterValues, IProductItem } from '../../../constant/interface.ts';
import { ITEM_PER_PAGE, SORT_TYPE, TIME_LOADING } from '../../../constant';
import './ListProduct.less';
import Spin from '../../Spin';
import { Pagination } from '../../Pagination';
import { ProductFilter } from '../ProductFilter';
import ProductSortPrice from '../ProductSortPrice';

const ListProduct: React.FC = () => {
  const [productItems, setProductItems] = useState<IProductItem[]>([]);
  const [productFromApi, setProductFromApi] = useState<IProductItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMainContent, setLoadingMainContent] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState('default');
  const [openFilterMobile, setOpenFilterMobile] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<IFilterValues>(
    {
      brand: [],
      category: [],
      color: [],
      size: [],
      isHot: false
    }
  );
  // logic pagination
  const indexOfLastItem: number = currentPage * ITEM_PER_PAGE;
  const indexOfFirstItem: number = indexOfLastItem - ITEM_PER_PAGE;
  const currentItems: IProductItem[] = productItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages: number = Math.ceil(productItems.length / ITEM_PER_PAGE);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`/api/dataMockup.json`).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then(json => {
        setProductItems(json);
        setProductFromApi(json);

      }).catch(err => console.log(err)).finally(() => {
        setLoading(false);
      });
    }, TIME_LOADING * 2);
  }, []);

  useEffect(() => {
    if (sortBy !== 'default') {
      setLoadingMainContent(true);
      setTimeout(() => {
        switch (sortBy) {
          case SORT_TYPE.ASC:
            setProductItems([...productItems].sort((a, b) => a.price - b.price));
            break;
          case SORT_TYPE.DESC:
            setProductItems([...productItems].sort((a, b) => b.price - a.price));
            break;
          default:
            break;
        }
        setLoadingMainContent(false);
      }, TIME_LOADING);
    }
  }, [sortBy]);

  useEffect(() => {
    if (filterValue.brand.length > 0 || filterValue.category.length > 0 || filterValue.color.length > 0 || filterValue.size.length > 0 || filterValue.isHot || !filterValue.isHot) {
      setLoadingMainContent(true);
      setTimeout(() => {
        const filterItems: IProductItem[] = productFromApi.filter((productItem) => {
          return (
            ( filterValue.brand.length === 0 || filterValue.brand.includes(productItem.brand) ) &&
            ( filterValue.category.length === 0 || filterValue.category.includes(productItem.category) ) &&
            ( filterValue.color.length === 0 || filterValue.color.some(color => productItem.colors.includes(color)) ) &&
            ( filterValue.size.length === 0 || filterValue.size.some(size => productItem.sizes.includes(size)) ) &&
            ( !filterValue.isHot || productItem.isHot )
          );
        });
        setProductItems(filterItems);
        setLoadingMainContent(false);
        setCurrentPage(1);
      }, TIME_LOADING);
    } else {
      setLoadingMainContent(true);
      setTimeout(() => {
        setProductItems(productFromApi);
        setLoadingMainContent(false);
        setCurrentPage(1);
      }, TIME_LOADING);
    }
  }, [filterValue]);

  const handlePageChange = (newPage: number) => {
    setLoadingMainContent(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setLoadingMainContent(false);
    }, 300);
  };


  return (
    <React.Fragment>{loading ? <Spin /> :
      <section className="list-product__container">
        <div className={`list-product__filter ${openFilterMobile ? 'list-product__filter--open' : ''}`}>
          <ProductFilter
            isLoadingFilter={loadingMainContent}
            filterValue={filterValue}
            openFilterMobile={openFilterMobile}
            setOpenFilterMobile={setOpenFilterMobile}
            setFilterValue={setFilterValue}
          />
        </div>
        <div className="list-product__block">
          <div className="list-product__sort-bar">
            <p className="list-product__sort-title">View {ITEM_PER_PAGE} in {productItems.length} products </p>
            <div className="list-product__action-sort-filter">
              <button
                className="list-product__filter-mobile" onClick={() => {
                setOpenFilterMobile(!openFilterMobile);
              }}
              >Filter
              </button>
              <ProductSortPrice sortBy={sortBy} setSortBy={setSortBy} />
            </div>
          </div>
          <div className="list-product__item">
            {loadingMainContent ? <Spin /> : currentItems.map((productItem) => (
              <ProductItem productItem={productItem} key={productItem.id} />
            ))}

          </div>
          {!loadingMainContent && <Pagination
            handlePageChange={handlePageChange}
            loading={loading}
            currentPage={currentPage}
            totalPages={totalPages}
          />}
        </div>
      </section>}
    </React.Fragment>
  );
};

export default ListProduct;
