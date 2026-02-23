 
import img02 from '@/assets/images/blog/img-02.jpg'
import img03 from '@/assets/images/blog/img-03.jpg'
import img04 from '@/assets/images/blog/img-04.jpg'
import img05 from '@/assets/images/blog/img-05.jpg'
import img06 from '@/assets/images/blog/img-06.jpg'
import img07 from '@/assets/images/blog/img-07.jpg'
import img08 from '@/assets/images/blog/img-08.jpg'
import img09 from '@/assets/images/blog/img-09.jpg'
import img10 from '@/assets/images/blog/img-10.jpg'
import img11 from '@/assets/images/blog/img-11.jpg'
import img12 from '@/assets/images/blog/img-12.jpg'
import img13 from '@/assets/images/blog/img-13.jpg'
import img14 from '@/assets/images/blog/img-14.jpg'
import img15 from '@/assets/images/blog/img-15.jpg'
import img16 from '@/assets/images/blog/img-16.jpg'

import avatar01 from '@/assets/images/avatars/01.png'
import avatar02 from '@/assets/images/avatars/02.png'
import avatar04 from '@/assets/images/avatars/04.png'
import avatar06 from '@/assets/images/avatars/06.png'
import avatar07 from '@/assets/images/avatars/07.png'

import { StaticImageData } from 'next/image';

interface BlogDataType {
  id: number;
  title: string;
  category: string;
  image: StaticImageData | string;
  author: {
    name: string;
    avatar: StaticImageData | string;
    link: string;
  };
  date: string;
  link: string;
}


// page-author
 const blog_category_data:BlogDataType[] = [
  {
    id: 1,
    title: "How can marketing help your business?",
    category: "Business",
    image: img02,
    author: {
      name: "Kevin",
      avatar: avatar01,
      link: "#"
    },
    date: "Apr 24, 2025",
    link: "/blog-details"
  },
  {
    id: 2,
    title: "The ultimate guide to marketing success",
    category: "Marketing",
    image: img03,
    author: {
      name: "Sarah",
      avatar: avatar04,
      link: "#"
    },
    date: "Apr 22, 2025",
    link: "/blog-details"
  },
  {
    id: 3,
    title: "A comprehensive guide to marketing",
    category: "Strategy",
    image: img04,
    author: {
      name: "Amir",
      avatar: avatar04,
      link: "#"
    },
    date: "Apr 20, 2025",
    link: "/blog-details"
  },
  {
    id: 4,
    title: "Maximizing your reach with marketing strategies",
    category: "Strategy",
    image: img05,
    author: {
      name: "David",
      avatar: avatar02,
      link: "#"
    },
    date: "Apr 15, 2025",
    link: "/blog-details"
  },
  {
    id: 5,
    title: "Top 5 reasons to invest in marketing",
    category: "Marketing",
    image: img06,
    author: {
      name: "Sarah",
      avatar: avatar04,
      link: "#"
    },
    date: "Apr 12, 2025",
    link: "/blog-details"
  },
  {
    id: 6,
    title: "How can marketing help your business?",
    category: "Boost",
    image: img07,
    author: {
      name: "Kevin",
      avatar: avatar01,
      link: "#"
    },
    date: "Apr 12, 2025",
    link: "/blog-details"
  },
  {
    id: 7,
    title: "The ultimate guide to marketing success",
    category: "Advertising",
    image: img08,
    author: {
      name: "Amir",
      avatar: avatar07,
      link: "#"
    },
    date: "Apr 10, 2025",
    link: "/blog-details"
  },
  {
    id: 8,
    title: "A comprehensive guide to marketing",
    category: "Strategy",
    image: img09,
    author: {
      name: "Amir",
      avatar: avatar07,
      link: "#"
    },
    date: "Apr 8, 2025",
    link: "/blog-details"
  },
  {
    id: 9,
    title: "Maximizing your reach with marketing strategies",
    category: "Advertising",
    image: img10,
    author: {
      name: "Allen",
      avatar: avatar06,
      link: "#"
    },
    date: "Apr 4, 2025",
    link: "/blog-details"
  },
  {
    id: 10,
    title: "Top 5 reasons to invest in marketing",
    category: "Strategy",
    image: img11,
    author: {
      name: "David",
      avatar: avatar02,
      link: "#"
    },
    date: "Apr 3, 2025",
    link: "/blog-details"
  },
  {
    id: 11,
    title: "How can marketing help your business?",
    category: "Marketing",
    image: img12,
    author: {
      name: "Allen",
      avatar: avatar06,
      link: "#"
    },
    date: "Apr 3, 2025",
    link: "/blog-details"
  },
  {
    id: 12,
    title: "The ultimate guide to marketing success",
    category: "Business",
    image: img13,
    author: {
      name: "Kevin",
      avatar: avatar01,
      link: "#"
    },
    date: "Apr 1, 2025",
    link: "/blog-details"
  },
  {
    id: 13,
    title: "A comprehensive guide to marketing",
    category: "Strategy",
    image: img14,
    author: {
      name: "Sarah",
      avatar: avatar04,
      link: "#"
    },
    date: "Jan 1, 1970",
    link: "/blog-details"
  },
  {
    id: 14,
    title: "Maximizing your reach with marketing strategies",
    category: "Advertising",
    image: img15,
    author: {
      name: "Sarah",
      avatar: avatar04,
      link: "#"
    },
    date: "Jan 1, 1970",
    link: "/blog-details"
  },
  {
    id: 15,
    title: "Top 5 reasons to invest in marketing",
    category: "Media",
    image: img16,
    author: {
      name: "David",
      avatar: avatar02,
      link: "#"
    },
    date: "Jan 1, 1970",
    link: "/blog-details"
  }
]


export default blog_category_data