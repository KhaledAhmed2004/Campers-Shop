export type TProduct = {
  _id: string;
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
