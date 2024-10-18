export interface IImageProduct{
  id: number;
  url: string;
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
}

export interface TItemFilterColorSize {
  color: string;
  size: string;
}

export interface TItemFilterCateBrand {
  brand: string;
  category: string;
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
}
