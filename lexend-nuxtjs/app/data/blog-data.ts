


// blog img 
import blog_img_1 from "~/assets/images/blog/img-11.jpg";
import blog_img_2 from "~/assets/images/blog/img-12.jpg";
import blog_img_3 from "~/assets/images/blog/img-13.jpg";


import avatar_img_1 from "~/assets/images/avatars/02.png";
import avatar_img_2 from "~/assets/images/avatars/06.png";
import avatar_img_3 from "~/assets/images/avatars/01.png";


interface BlogDataType {
  category: string;
  categoryLink: string;
  image: string;
  title: string;
  link: string;
  author: {
    name: string;
    avatar: string;
    link: string;
  };
  date: string;
}[]


const blog_data: BlogDataType[] = [
  {
    category: "Strategy",
    categoryLink: "/blog",
    image: blog_img_1,
    title: "Top 5 reasons to invest in marketing",
    link: "/blog-details",
    author: {
      name: "David",
      avatar: avatar_img_1,
      link: "#",
    },
    date: "Apr 3, 2025",
  },
  {
    category: "Marketing",
    categoryLink: "/blog",
    image: blog_img_2,
    title: "How can marketing help your business?",
    link: "/blog-details",
    author: {
      name: "Allen",
      avatar: avatar_img_2,
      link: "#",
    },
    date: "Apr 3, 2025",
  },
  {
    category: "Business",
    categoryLink: "/blog",
    image: blog_img_3,
    title: "The ultimate guide to marketing success",
    link: "/blog-details",
    author: {
      name: "Kevin",
      avatar: avatar_img_3,
      link: "#",
    },
    date: "Apr 1, 2025",
  },
];


export default blog_data;