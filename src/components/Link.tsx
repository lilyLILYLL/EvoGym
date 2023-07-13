import AnchorLink from "react-anchor-link-smooth-scroll"; // react component for anchor links using the smoothscroll polyfill
import { Pages } from "../contants/constants";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setSelectedPage } from "../store";
type Props = {
  pageName: string;
};

export const Link = ({ pageName }: Props) => {
  const pageInLowerCase = pageName.toLowerCase() as Pages;
  const selectedPage = useAppSelector((state) => state.navigation.selectedPage);
  const dispatch = useAppDispatch();
  const selected = selectedPage === pageInLowerCase ? "text-primary-500 " : "";
  const handleOnClick = () => {
    dispatch(setSelectedPage(pageInLowerCase));
  };

  return (
    <div
      className={`${selected} transition duration-100 hover:text-primary-500 `}
      onClick={handleOnClick}
    >
      <AnchorLink href={`#${pageInLowerCase}`}>{pageName}</AnchorLink>
    </div>
  );
};
