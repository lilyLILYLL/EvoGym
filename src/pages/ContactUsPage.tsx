import { Pages } from "../contants/constants";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setSelectedPage } from "../store";
import { motion } from "framer-motion";
import { HText } from "../components/HText";
import ContactUsPageGraphic from "../assets/ContactUsPageGraphic.png";
import { ContactForm } from "../components/ContactForm";
import EvolveText from "../assets/EvolveText.png";

export const ContactUsPage = () => {
  const dispatch = useAppDispatch();
  return (
    <section id={Pages.CONTACT_US} className="w-full pt-36 h-fit ">
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
        <div className="md:flex md:flex-row md:justify-between">
          {/* CONTACT FORM */}
          <ContactForm />

          {/* CONTACT IMG */}
          <div className="relative md:w-1/2">
            <img
              alt="contact-us"
              src={ContactUsPageGraphic}
              className="md:h-[385px] mx-auto"
            />
            <img
              alt="evolve"
              src={EvolveText}
              className="absolute -bottom-10 -left-12 z-[-1] "
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
