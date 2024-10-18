import React from 'react';

export interface IImageProduct{
  id: number;
  url: string;
}
export interface IHumburgerProps {
  toggleIcon: boolean;
  setToggleIcon: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IProductItem {
  id: number,
  image: IImageProduct[],
  name: string,
  description: string,
  category: string,
  brand: string,
  isHot: boolean,
  price: number,
  discountPrice: number,
  colors: string[],
  sizes: number[],
  quantity: number,
}

export interface ICategories {
  color: string[];
  size: string[];
  brand: string[];
  category: string[];
}

export interface IPagination {
  totalPages: number,
  currentPage: number,
  loading: boolean,
  handlePageChange: (page: number) => void,
}


export interface IProductFilterProps {
  isLoadingFilter: boolean;
  filterValue: IFilterValues;
  setFilterValue: (filter: IFilterValues) => void;
  openFilterMobile: boolean;
  setOpenFilterMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TItemFilter {
  dataMap: string[] | number[];
  title: string;
  isLoadingFilter: boolean;
  isBackground: boolean;
  filterValue: IFilterValues;
  setFilterValue: (filter: IFilterValues) => void;
  isSelectOne: boolean;
}

export interface ISortBar {
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export interface IFilterValues {
  brand: string[];
  category: string[];
  color: string[];
  size: number[];
  isHot: boolean;
}
