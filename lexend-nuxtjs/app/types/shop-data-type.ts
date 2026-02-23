
export default interface shopDataType {
  id: number;
  name: string;
  image: string;
  alt: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating?: number;
  hasFavorite?: boolean;
}
