import AnchorLink from "react-anchor-link-smooth-scroll"; // react component for anchor links using the smoothscroll polyfill
import { Pages } from "../contants/constants";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setSelectedPage } from "../store";
type Props = {
  pageName: string;
  onClick?: (e?: any) => void;
};

export const Link = ({ pageName, onClick }: Props) => {
  const pageInLowerCase = pageName.toLowerCase() as Pages;
  const selectedPage = useAppSelector((state) => state.navigation.selectedPage);
  const dispatch = useAppDispatch();

  // Handle onCLick
  const handleOnClick = () => {
    dispatch(setSelectedPage(pageInLowerCase));
    if (onClick) onClick();
  };

  return (
    <div
      className={`${
        selectedPage === pageInLowerCase ? "text-primary-500 " : ""
      } transition duration-100 hover:text-primary-500 `}
      onClick={handleOnClick}
    >
      <AnchorLink href={`#${pageInLowerCase}`}>{pageName}</AnchorLink>
    </div>
  );
};
