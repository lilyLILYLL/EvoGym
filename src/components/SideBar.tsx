import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "./Link";

type Props = {
  isOpen: boolean;
  toggleSideBar: () => void;
};

export const SideBar = ({ toggleSideBar, isOpen }: Props) => {
  return (
    <div
      className={`bg-primary-100 sm:w-[300px] w-full top-0 bottom-0 fixed h-full z-40 transition-all duration-500 ease-in-out ${
        isOpen ? "right-0" : "right-[-100%]"
      }`}
    >
      <XMarkIcon
        className="w-10 text-gray-100 hover:cursor-pointer hover:text-primary-500 absolute right-10 top-10"
        onClick={toggleSideBar}
      />

      <div className="flex flex-col gap-10  items-center text-lg h-screen justify-center">
        <Link pageName={"Home"} onClick={toggleSideBar} />
        <Link pageName={"Benefits"} onClick={toggleSideBar} />
        <Link pageName={"Our Classes"} onClick={toggleSideBar} />
        <Link pageName={"Contact Us"} onClick={toggleSideBar} />
      </div>
    </div>
  );
};
