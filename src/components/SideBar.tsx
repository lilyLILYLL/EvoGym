import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "./Link";

type Props = {
  toggle: () => void;
};

export const SideBar = ({ toggle }: Props) => {
  return (
    <div className="bg-primary-100 w-[300px] top-0 bottom-0 right-0 fixed h-full z-40">
      <div className="flex flex-row justify-end w-full p-10 ">
        <XMarkIcon
          className="w-8 text-gray-100 hover:cursor-pointer hover:text-primary-500 "
          onClick={toggle}
        />
      </div>
      <div className="flex flex-col gap-10 ml-20 text-lg">
        <Link pageName={"Home"} />
        <Link pageName={"Benefits"} />
        <Link pageName={"Our Classes"} />
        <Link pageName={"Contact Us"} />
      </div>
    </div>
  );
};
