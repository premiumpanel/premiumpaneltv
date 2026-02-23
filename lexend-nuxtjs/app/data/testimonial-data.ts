import testimonial_avatar_1 from "@/assets/images/avatars/01.png";
import testimonial_avatar_2 from "@/assets/images/avatars/02.png";
import testimonial_avatar_3 from "@/assets/images/avatars/03.png";
import testimonial_avatar_4 from "@/assets/images/avatars/08.png";
import testimonial_avatar_5 from "@/assets/images/avatars/05.png";
import testimonial_avatar_6 from "@/assets/images/avatars/06.png";
import testimonial_avatar_7 from "@/assets/images/avatars/07.png";
import testimonial_avatar_8 from "@/assets/images/avatars/10.png";
import testimonial_avatar_9 from "@/assets/images/avatars/11.png";

import { StaticImageData } from 'next/image';

interface TestimonialType {
	name: string;
	image: StaticImageData | string;
	text: string;
	rating: number;
	left: number;
	top: number;
}

const testimonial_data: TestimonialType[] = [
	{
		name: "Mark Zellers",
		image: testimonial_avatar_1,
		text: "We’re looking for people who share our vision! most of our time used to be taken up by most of alternate to help our employees.",
		rating: 5,
		left: 0,
		top: 0,
	},
	{
		name: "Jason Barella",
		image: testimonial_avatar_2,
		text: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
		rating: 5,
		left: 357.328,
		top: 0,
	},
	{
		name: "Sarah Edrissi",
		image: testimonial_avatar_3,
		text: "Look for service suppliers that comply with this regulation, and as we look to create our website, this builder is just outstanding!",
		rating: 5,
		left: 714.656,
		top: 0,
	},
	{
		name: "Anna Yon",
		image: testimonial_avatar_4,
		text: "We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
		rating: 5,
		left: 0,
		top: 317,
	},
	{
		name: "Jaden Karl",
		image: testimonial_avatar_5,
		text: "We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
		rating: 5,
		left: 714.656,
		top: 317,
	},
	{
		name: "Ederson Hani",
		image: testimonial_avatar_6,
		text: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
		rating: 5,
		left: 357.328,
		top: 371,
	},
	{
		name: "Matt Peterson",
		image: testimonial_avatar_7,
		text: "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder is just outstanding!",
		rating: 5,
		left: 0,
		top: 688,
	},
	{
		name: "Natalia Cherry",
		image: testimonial_avatar_8,
		text: "We’re looking for people who share our vision! Most of our time used to be taken up by most of the alternate administrative work whereas now we can focus on building out to help our employees.",
		rating: 5,
		left: 714.656,
		top: 688,
	},
	{
		name: "Muhammed Khan",
		image: testimonial_avatar_9,
		text: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
		rating: 5,
		left: 357.328,
		top: 742,
	},
];

export default testimonial_data;
