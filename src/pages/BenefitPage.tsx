import AbstractWaves from "../assets/AbstractWaves.png";
import BenefitsPageGraphic from "../assets/BenefitsPageGraphic.png";
import Sparkles from "../assets/Sparkles.png";
import { Pages } from "../contants/constants";

import { BenefitCard, BenefitType } from "../components/BenefitCard";
import { benefits } from "../contants/constants";
import { HText } from "../components/HText";
import { ActionButton } from "../components/ActionButton";
import { motion } from "framer-motion";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setSelectedPage } from "../store";

export const BenefitPage = () => {
  const dispatch = useAppDispatch();
  return (
    <section
      id={Pages.BENEFITS}
      className="flex flex-col w-5/6 gap-6 pt-32 mx-auto h-fit"
    >
      <motion.div
        onViewportEnter={() => dispatch(setSelectedPage(Pages.BENEFITS))}
      >
        {/* TEXT */}
        <HText>MORE THAN JUST A GYM.</HText>
        <div className="md:w-3/4 ">
          <p>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide truw
            care into each and very member
          </p>
        </div>
        {/* BENEFIT CARD */}
        <div className="items-center justify-between md:flex">
          {benefits.map((benefit: BenefitType, index) => {
            return (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                label={benefit.label}
                description={benefit.description}
              />
            );
          })}
        </div>
        {/* IMG AND A PARAGRAPH */}
        <div className="flex-row mt-10 md:flex">
          <div className="p-10 ">
            <img
              alt="benefit-page"
              src={BenefitsPageGraphic}
              className="mx-auto"
            />
          </div>
          <div className="flex items-center justify-center py-10 md:basis-2/3">
            <div className="relative flex flex-col gap-4">
              <img
                alt="Wave"
                src={AbstractWaves}
                className="absolute h-16 w-28 -left-20 -top-16"
              />

              <HText>MILLIONS OF HAPPY MEMBERS GETTING FIT</HText>
              <p className="text-sm">
                Donec efficitur fermentum ipsum sed sodales. Nam eu interdum
                libero. Donec ut rhoncus leo. Vestibulum a suscipit massa, vitae
                pellentesque erat. Mauris sit amet condimentum sem, ut finibus
                sapien. Vestibulum sem nunc, faucibus imperdiet erat et, posuere
              </p>
              <p className="text-sm">
                Nam vulputate erat a aliquet iaculis. Ut scelerisque risus id
                lectus gravida, ac mollis tellus placerat. Donec dictum nisi non
                sem
              </p>
              <div className="flex flex-row items-center justify-between w-5/6">
                <ActionButton label="Join Now" />
                <img alt="Sparkles" src={Sparkles} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
