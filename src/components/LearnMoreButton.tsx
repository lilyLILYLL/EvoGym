import AnchorLink from "react-anchor-link-smooth-scroll";
import { Pages } from "../contants/constants";

export const LearnMoreButton = () => {
  return (
    <div className="underline text-primary-300 underline-offset-1 hover:cursor-pointer">
      <AnchorLink href={`#${Pages.OUR_CLASSES}`}>Learn More</AnchorLink>
    </div>
  );
};
