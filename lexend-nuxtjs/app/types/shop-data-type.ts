import { StaticImageData } from 'next/image';

export default interface shopDataType {
  id: number;
  name: string;
  image: StaticImageData | string;
  alt: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating?: number;
  hasFavorite?: boolean;
}
