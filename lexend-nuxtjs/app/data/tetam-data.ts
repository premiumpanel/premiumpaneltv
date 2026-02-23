

import team_avatar_1 from "@/assets/images/template/team-01.jpg";
import team_avatar_2 from "@/assets/images/template/team-02.jpg";
import team_avatar_3 from "@/assets/images/template/team-03.jpg";
import team_avatar_4 from "@/assets/images/template/team-04.jpg";
import team_avatar_5 from "@/assets/images/template/team-05.jpg";
import team_avatar_6 from "@/assets/images/template/team-06.jpg";
import team_avatar_7 from "@/assets/images/template/team-07.jpg";
import team_avatar_8 from "@/assets/images/template/team-08.jpg";

interface teamDataType {
    img: string;
    name: string;
    role: string;
}[]



const team_data:teamDataType[] = [
  {
    img: team_avatar_1,
    name: "Mark Zellers",
    role: "Founder & CEO",
  },
  {
    img: team_avatar_2,
    name: "John Zellers",
    role: "Co-Founder",
  },
  {
    img: team_avatar_3,
    name: "Kim Yun Son",
    role: "Engineering Manager",
  },
  {
    img: team_avatar_4,
    name: "André Garcia",
    role: "Product Manager",
  },
  {
    img: team_avatar_5,
    name: "Peter Lary",
    role: "UX Researcher",
  },
  {
    img: team_avatar_6,
    name: "Henry Matt",
    role: "Customer Success",
  },
  {
    img: team_avatar_7,
    name: "Natalia",
    role: "Lead of fun",
  },
  {
    img: team_avatar_8,
    name: "Larry",
    role: "Director of Joy",
  },
]

export default team_data