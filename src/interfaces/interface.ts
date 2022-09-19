export interface Product {
  id: string;
  imgUrl: string;
  name: string;
  price: string;
  rating: string;
}

export interface CartState {
  productCount: number;
  products: Product[];
  total: number;
}