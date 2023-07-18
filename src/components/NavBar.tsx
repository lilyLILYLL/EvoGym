import { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "./Link";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { SideBar } from "./SideBar";
import { ActionButton } from "./ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Pages } from "../contants/constants";

type Props = {
  isTopOfPage: boolean;
};

export const NavBar = ({ isTopOfPage }: Props) => {
  const isAboveMidumScreen = useMediaQuery();
  const [isSideBarToggle, setIsSideBarToggle] = useState(false);

  const flexBox = "flex items-center justify-between";
  const navBarBackGround = isTopOfPage ? "" : "bg-primary-100";

  return (
    <div
      className={` ${navBarBackGround} ${flexBox} fixed top-0 z-30 w-full  py-2`}
    >
      <div className={`${flexBox} mx-auto  w-5/6 py-3 gap-16`}>
        {/* Left side: logo */}
        <div className={`${flexBox}`}>
          <AnchorLink href={`#${Pages.HOME}`}>
            <img alt="Logo" src={Logo} />
          </AnchorLink>
        </div>

        {/* right side: links, signin, become a memeber buttons */}

        {isAboveMidumScreen ? (
          <div className={`${flexBox} w-full gap-40 text-sm`}>
            <div className={`${flexBox} gap-8`}>
              <Link pageName={"Home"} />
              <Link pageName={"Benefits"} />
              <Link pageName={"Our Classes"} />
              <Link pageName={"Contact Us"} />
            </div>
            <div className={`${flexBox} gap-8`}>
              <p className="cursor-pointer hover:text-primary-300 hover:text-lg">
                Sign In
              </p>
              <ActionButton label="Become a Memeber" />
            </div>
          </div>
        ) : (
          <div
            className="p-2 rounded-full bg-secondary-500 hover:cursor-pointer hover:bg-primary-300"
            onClick={() => setIsSideBarToggle(!isSideBarToggle)}
          >
            <Bars3Icon className="w-6 h-6 text-white" />
          </div>
        )}

        {/* isNotAboveMediumScreen && isSideBarToggle => dipslay a side bar */}
        {!isAboveMidumScreen && isSideBarToggle && (
          <SideBar toggle={() => setIsSideBarToggle(!isSideBarToggle)} />
        )}
      </div>
    </div>
  );
};
