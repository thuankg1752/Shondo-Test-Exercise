import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import { IProductItem } from '../../../constant/interface.ts';
import { ItemPerPage } from '../../../constant';
import './ListProduct.less';
import Spin from '../../Spin';

const ListProduct: React.FC = () => {
  const [productItems, setProductItems] = useState<IProductItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  // logic pagination
  const indexOfLastItem: number = currentPage * ItemPerPage;
  const indexOfFirstItem: number = indexOfLastItem - ItemPerPage;
  const currentItems: IProductItem[] = productItems.slice(indexOfFirstItem, indexOfLastItem);

  // const totalPages: number = Math.ceil(productItems.length / ItemPerPage);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setTimeout(() => {
      fetch(`/api/dataMockup.json`).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then(json => {
        if (isMounted) {
          setProductItems(json);
        }
      }).catch(err => console.log(err)).finally(() => {
        setLoading(false);
      });
    }, 1000);

    return () => {
      isMounted = false;
    };
  }, []);

  const handlePageChange = (newPage: number) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setLoading(false);
    }, 1000);
  };
  return (
    <>{loading ? <Spin /> :
      <section className="list-product__container">
        <div>
        {/* filter */}
        </div>
        <div>
          <div className="list-product__item">
            {currentItems.map((productItem) => (
              <ProductItem productItem={productItem} key={productItem.id} />
            ))}
          </div>
        </div>
      </section>}
    </>
  );
};

export default ListProduct;
