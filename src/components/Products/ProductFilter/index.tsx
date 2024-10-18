import React, { useEffect, useState } from 'react';
import { ICategories, IProductFilterProps, TItemFilter } from '../../../constant/interface.ts';
import './ProductFilter.less';


export function ProductFilter ({ ...props }: IProductFilterProps) {

  const { filterValue, isLoadingFilter, setFilterValue } = props;
  const [dataCategories, setDataCategories] = useState<ICategories>(
    {
      color: [],
      size: [],
      brand: [],
      category: []
    }
  );

  useEffect(() => {
    fetch(`/api/dataCategories.json`).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(json => {
      setDataCategories(json);
    }).catch(err => console.log(err)).finally(() => {
    });
  }, []);


  return (
    <div className="filter-product__container">
      <div>
        <FilterItem
          dataMap={dataCategories.color}
          title={'color'}
          isBackground={true}
          filterValue={filterValue}
          isLoadingFilter={isLoadingFilter}
          isSelectOne={false}
          setFilterValue={setFilterValue}
        />
        <FilterItem
          dataMap={dataCategories.size}
          title={'Size'}
          isBackground={false}
          filterValue={filterValue}
          isLoadingFilter={isLoadingFilter}
          isSelectOne={false}
          setFilterValue={setFilterValue}
        />
        <FilterItem
          dataMap={dataCategories.brand}
          title={'Brand'}
          isBackground={false}
          filterValue={filterValue}
          isLoadingFilter={isLoadingFilter}
          isSelectOne={false}
          setFilterValue={setFilterValue}
        />
        <FilterItem
          dataMap={dataCategories.category}
          title={'Category'}
          isBackground={false}
          filterValue={filterValue}
          isLoadingFilter={isLoadingFilter}
          isSelectOne={false}
          setFilterValue={setFilterValue}
        />
      </div>
    </div>
  );
};

const FilterItem: React.FC<TItemFilter> = ({ ...props }: TItemFilter) => {
  const { dataMap, title, isBackground, filterValue, isLoadingFilter,isSelectOne, setFilterValue } = props;
  const handleFilter = (value: string|number) => {
    if (isSelectOne){
      setFilterValue({
        ...filterValue,
        [title.toLowerCase()]: filterValue[title.toLowerCase()].includes(value) ? [] : [value]
      });
    }
    else {
      const newValues = filterValue[title.toLowerCase()].includes(value)
        ? filterValue[title.toLowerCase()].filter((item: string) => item !== value)
        : [...filterValue[title.toLowerCase()], value];
      setFilterValue({
        ...filterValue,
        [title.toLowerCase()]: newValues
      });
    }
  }
  return (
    <React.Fragment>
      <h2>
        {title}
      </h2>
      <div className="filter-product__category">
        {Array.isArray(dataMap) && dataMap.map((value: string|number, index: number) => (
          <div className="filter-product__item-block" key={`${value}_${index}`}>
            <button
              type={'button'}
              disabled={isLoadingFilter}
              style={{ backgroundColor: isBackground ? value.toString() : 'white' }}
              onClick={() => {
                handleFilter(value);
              }}
              className={`filter-product__item-filer ${filterValue[title.toLowerCase()].includes(value) ?
                'filter-product__item-filer--active' :
                ''}`}
            >
              {!isBackground && <div title={value.toString()}>{value}</div>}
            </button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
ProductFilter.FilterItem = FilterItem;
