export interface IProduct {
  id: string | number;
  name: string;
  image: string;
  price: number;
  rating: number;
  categoryId?: string | number;
}