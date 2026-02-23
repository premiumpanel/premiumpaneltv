 
import img01 from '@/assets/images/common/products/img-01.jpg'
import img02 from '@/assets/images/common/products/img-02.jpg'
import img03 from '@/assets/images/common/products/img-03.jpg'
import img04 from '@/assets/images/common/products/img-04.jpg'
import img05 from '@/assets/images/common/products/img-05.jpg'
import img06 from '@/assets/images/common/products/img-06.jpg'
import img07 from '@/assets/images/common/products/img-07.jpg'
import img08 from '@/assets/images/common/products/img-08.jpg'
import img09 from '@/assets/images/common/products/img-09.jpg'
import img10 from '@/assets/images/common/products/img-10.jpg'
import img11 from '@/assets/images/common/products/img-11.jpg'
import img12 from '@/assets/images/common/products/img-12.jpg'
import img13 from '@/assets/images/common/products/img-13.jpg'
import img14 from '@/assets/images/common/products/img-14.jpg'
import img15 from '@/assets/images/common/products/img-15.jpg'
import img16 from '@/assets/images/common/products/img-16.jpg'

interface ShopDataType {
    id: number;
    name: string;
    image: string;
    price: number;
    old_price: number | string;
    discount: string;
    rating: number | string;
    has_discount: boolean;
    link:  string ;

}[]


const shop_data:ShopDataType[] = [
  {
    id: 1,
    name: "Elegant Watch",
    image: img01,
    price: 49.00,
    old_price: 99.00,
    discount: "51%",
    rating: 5,
    has_discount: true,
    link: "/shop-product-detail"
  },
  {
    id: 2,
    name: "Hemp Seed",
    image: img02,
    price: 49.00,
    old_price: '',
    discount: '',
    rating: 4,
    has_discount: false,
    link: "/shop-product-detail"
  },
  {
    id: 3,
    name: "White Classic Watch",
    image: img03,
    price: 29.00,
    old_price: 89.00,
    discount: "67%",
    rating: 5,
    has_discount: true,
    link: "/shop-product-detail"
  },
  {
    id: 4,
    name: "Stylish Starbucks",
    image: img04,
    price: 20.00,
    old_price: '',
    discount: '',
    rating: 5,
    has_discount: false,
    link: "/shop-product-detail"
  },
  {
    id: 5,
    name: "Black AirTag",
    image: img05,
    price: 74.00,
    old_price: '',
    discount: '',
    rating: 3,
    has_discount: false,
    link: "/shop-product-detail"
  },
  {
    id: 6,
    name: "Modern Headsets",
    image: img06,
    price: 24.00,
    old_price: '',
    discount: '',
    rating: 5,
    has_discount: false,
    link: "/shop-product-detail"
  },
  {
    id: 7,
    name: "Laptop Cover",
    image: img07,
    price: 24.00,
    old_price: 80.00,
    discount: "70%",
    rating: 5,
    has_discount: true,
    link: "/shop-product-detail"
  },
  {
    id: 8,
    name: "Disney Toys",
    image: img08,
    price: 5.00,
    old_price: 20.00,
    discount: "75%",
    rating: 4,
    has_discount: true,
    link: "/shop-product-detail"
  },
  {
    id: 9,
    name: "Screen Axe",
    image: img09,
    price: 19.00,
    old_price: 38.00,
    discount: "50%",
    rating: 4,
    has_discount: true,
    link: "/shop-product-detail"
  },
  {
    id: 10,
    name: "Airpods Pro",
    image: img10,
    price: 49.00,
    old_price: 70.00,
    discount: "30%",
    rating: 5,
    has_discount: true,
    link: "/shop-product-detail"
  },
  {
    id: 11,
    name: "USB Cable",
    image: img11,
    price: 1.00,
    old_price: 5.00,
    discount: "80%",
    rating: '',
    has_discount: true,
    link: "/shop-product-detail"
  },
  {
    id: 12,
    name: "Stylish Decoration",
    image: img12,
    price: 120.00,
    old_price: '',
    discount: '',
    rating: 4,
    has_discount: false,
    link: "/shop-product-detail"
  },
  {
    id: 13,
    name: "Elegant Tree",
    image: img13,
    price: 25.00,
    old_price: 50.00,
    discount: "50%",
    rating: '',
    has_discount: true,
    link: "/shop-product-detail"
  },
  {
    id: 14,
    name: "Classic Printer",
    image: img14,
    price: 49.00,
    old_price: '',
    discount: '',
    rating: 5,
    has_discount: false,
    link: "/shop-product-detail"
  },
  {
    id: 15,
    name: "Sportive Shoes",
    image: img15,
    price: 80.00,
    old_price: 100.00,
    discount: "20%",
    rating: 5,
    has_discount: true,
    link: "/shop-product-detail"
  },
  {
    id: 16,
    name: "Old School Camera",
    image: img16,
    price: 99.00,
    old_price: '',
    discount: '',
    rating: 4,
    has_discount: false,
    link: "/shop-product-detail"
  }
]

export default shop_data