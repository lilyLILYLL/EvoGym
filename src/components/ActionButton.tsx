import { useAppDispatch } from "../hooks/reduxHooks";
import { setSelectedPage } from "../store";
import { Pages } from "../contants/constants";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
  label: string;
};

export const ActionButton = ({ label }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="inline px-8 py-3 rounded-lg cursor-pointer w-fit h-fit bg-secondary-500 hover: hover:bg-primary-500 hover:text-white"
      onClick={() => dispatch(setSelectedPage(Pages.CONTACT_US))}
    >
      <AnchorLink href={`#${Pages.CONTACT_US}`}>{label}</AnchorLink>
    </div>
  );
};
