export interface IProductItem {
  id: number,
  image: string[],
  name: string,
  description: string,
  category: string,
  brand: string,
  isHot: boolean,
  price: number,
  discountPrice: number,
  colors: string,
  sizes: number,
}

export interface IPagination {
  totalPages: number,
  currentPage: number,
  loading: boolean,
  handlePageChange: (page: number) => void,
}
