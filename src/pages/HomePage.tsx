import HomePageText from "../assets/HomePageText.png";
import HomePageGraphic from "../assets/HomePageGraphic.png";
import SponsorForbes from "../assets/SponsorForbes.png";
import SponsorFortune from "../assets/SponsorFortune.png";
import SponsorRedbull from "../assets/SponsorRedbull.png";

import { ActionButton } from "../components/ActionButton";
import { Pages } from "../contants/constants";
import { LearnMoreButton } from "../components/LearnMoreButton";
import { motion } from "framer-motion";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setSelectedPage } from "../store";
type Props = {};

export const HomePage = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <section
      id={Pages.HOME}
      className="flex flex-col border-2 border-blue-600 border-solid md:h-full"
    >
      <motion.div
        onViewportEnter={() => dispatch(setSelectedPage(Pages.HOME))}
        className="flex flex-col h-full mt-32 "
      >
        <div className="flex flex-col items-center justify-between w-5/6 mx-auto md:flex-row md:basis-4/5">
          {/* LEFT-SIDE */}
          <div className="relative flex flex-col gap-8 md:basis-2/5">
            <div className="before:absolute md:before:content-evolvetext before:z-[-1] before:-top-20 before:-left-[70px]">
              <img alt="home-page-text" src={HomePageText} />
            </div>

            <p>
              Unrivaled Gym. Unparalleded Training Fitness Classess. Wold Class
              Studios to get the Body Shapes that you Dream of. Get Your Dream
              Body Now.
            </p>
            <div className="flex flex-row items-center gap-10">
              <ActionButton label="Join Now" />
              <LearnMoreButton />
            </div>
          </div>
          {/* RIGHT-SIDE */}
          <div className=" md:basis-2/5">
            <img alt="home-page-graphic" src={HomePageGraphic} />
          </div>
        </div>
        {/* sponsors */}
        <div className="flex items-center bg-primary-100 md:basis-1/5">
          <div className="flex flex-row items-center w-5/6 gap-20 py-6 mx-auto">
            <img alt="forbes" src={SponsorRedbull} className="h-10 w-15" />
            <img alt="forbes" src={SponsorForbes} className="h-7 w-15" />
            <img alt="forbes" src={SponsorFortune} className="h-7 w-15" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
