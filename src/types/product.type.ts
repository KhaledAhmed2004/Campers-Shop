export type TProduct = {
  _id?: string;
  key?: string;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  category: string;
  image: string;
  ratings: number;
  isFeatured?: boolean;
};
export type TUpdateProduct = {
  message(message: any, arg1: { id: string | number; }): unknown;
  _id?: string;
  name?: string;
  price?: number;
  stockQuantity?: number;
  description?: string;
  category?: string;
  image?: string;
  ratings?: number;
  isFeatured?: boolean;
};
