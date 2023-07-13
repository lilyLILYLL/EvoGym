import { BenefitType } from "../components/BenefitCard";
import { ClassType } from "../components/Class";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.png";
import Image6 from "../assets/image6.png";

export const enum Pages {
  HOME = "home",
  BENEFITS = "benefits",
  OUR_CLASSES = "our classes",
  CONTACT_US = "contact us",
}

export const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="w-6 h-6" />,
    label: "State if The Art Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur ella elit. Curabitur ut tortor id justo congue ultrices in sed est.",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    label: "100's of Diverse Classes",
    description:
      "Donec efficitur fermentum ipsum sed sodales. Nam eu interdum libero. Donec ut rhoncus leo. .",
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    label: "Expert and Pro Trainers",
    description:
      "Integer fermentum molestie neque quis pulvinar elit. Vestibulum sit amet ultrices tortor. ",
  },
];

export const classes: ClassType[] = [
  {
    img: <img alt="img1" src={Image1} />,
    name: " M2M Strength Class",
    description:
      "Integer fermentum molestie neque quis pulvinar. Vestibulum sit amet ultrices tortor. Vestibulum posuere dolor libero, et ultricies elit malesuada at. Curabitur sit amet mi pulvinar, pellentesque ligula in, congue nibh.",
  },
  {
    img: <img alt="img2" src={Image2} />,
    name: "Leaner Athletic Class",
    description:
      "Integer fermentum molestie neque quis pulvinar. Vestibulum sit amet ultrices tortor. Vestibulum posuere dolor libero, et ultricies elit malesuada at. Curabitur sit amet mi pulvinar, pellentesque ligula in, congue nibh.",
  },
  {
    img: <img alt="img3" src={Image3} />,
    name: "HEATHCOTE STRENGTH",
    description:
      "Integer fermentum molestie neque quis pulvinar. Vestibulum sit amet ultrices tortor. Vestibulum posuere dolor libero, et ultricies elit malesuada at. Curabitur sit amet mi pulvinar, pellentesque ligula in, congue nibh.",
  },
  {
    img: <img alt="img4" src={Image4} />,
    name: "KIRRAWEE AMPLIFY",
    description:
      "Integer fermentum molestie neque quis pulvinar. Vestibulum sit amet ultrices tortor. Vestibulum posuere dolor libero, et ultricies elit malesuada at. Curabitur sit amet mi pulvinar, pellentesque ligula in, congue nibh.",
  },
  {
    img: <img alt="img5" src={Image5} />,
    name: "Stronghuman",
    description:
      "Integer fermentum molestie neque quis pulvinar. Vestibulum sit amet ultrices tortor. Vestibulum posuere dolor libero, et ultricies elit malesuada at. Curabitur sit amet mi pulvinar, pellentesque ligula in, congue nibh.",
  },
  {
    img: <img alt="img6" src={Image6} />,
    name: "KIRRAWEE AMPLIFY",
    description:
      "Integer fermentum molestie neque quis pulvinar. Vestibulum sit amet ultrices tortor. Vestibulum posuere dolor libero, et ultricies elit malesuada at. Curabitur sit amet mi pulvinar, pellentesque ligula in, congue nibh.",
  },
];
