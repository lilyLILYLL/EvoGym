import React from "react";
import { Pages } from "../contants/constants";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setSelectedPage } from "../store";
import { motion } from "framer-motion";
import { HText } from "../components/HText";
import ContactUsPageGraphic from "../assets/ContactUsPageGraphic.png";
import { ActionButton } from "../components/ActionButton";
import EvolveText from "../assets/EvolveText.png";
import { Footer } from "../components/Footer";

type Props = {};

export const ContactUsPage = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <section id={Pages.CONTACT_US} className="w-full mt-32 h-fit">
      <motion.div
        onViewportEnter={() => dispatch(setSelectedPage(Pages.CONTACT_US))}
        className="flex flex-col w-5/6 gap-6 pb-20 mx-auto"
      >
        <HText>JOIN NOW TO GET IN SHAPE</HText>
        <p className="text-sm md:w-1/2">
          Integer fermentum molestie neque quis pulvinar. Vestibulum sit amet
          ultrices tortor. Vestibulum posuere dolor libero, et ultricies elit
          malesuada at. Curabitur sit amet mi pulvinar, pellentesque ligula in,
          congue nibh. Nullam sed porttitor sapien, et suscipit diam.
        </p>
        <div className="justify-between md:flex ">
          <div className="flex flex-col gap-2 md:w-1/2 ">
            <input
              placeholder="NAME"
              className="w-full py-2 pl-4 text-white rounded-lg bg-primary-300 placeholder:text-white"
              type="text"
            />
            <br />
            <input
              placeholder="EMAIL"
              className="w-full py-2 pl-4 text-white rounded-lg bg-primary-300 placeholder:text-white"
              type="email"
            />
            <br />
            <textarea
              placeholder="MESSAGE"
              className="w-full py-2 pl-4 text-white rounded-lg bg-primary-300 placeholder:text-white h-[100px]"
            />
            <div className="py-10">
              <ActionButton label="SUMBIT" />
            </div>
          </div>
          <div className="relative md:w-1/2">
            <img
              alt="contact-us"
              src={ContactUsPageGraphic}
              className="md:h-[385px] mx-auto"
            />
            <img
              alt="evolve"
              src={EvolveText}
              className="absolute -bottom-10 -left-12 z-[-1]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
