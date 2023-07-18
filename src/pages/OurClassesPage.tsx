import { motion } from "framer-motion";
import { Pages } from "../contants/constants";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setSelectedPage } from "../store";
import { HText } from "../components/HText";
import { Class, ClassType } from "../components/Class";
import { classes } from "../contants/constants";

export const OurClassesPage = () => {
  const dispatch = useAppDispatch();
  return (
    <section
      id={Pages.OUR_CLASSES}
      className="pt-20 h-fit mt-30 bg-primary-100 pb-28"
    >
      <motion.div
        onViewportEnter={() => dispatch(setSelectedPage(Pages.OUR_CLASSES))}
        className="flex flex-col w-5/6 gap-6 mx-auto "
      >
        <HText>OUR CLASSES </HText>
        <p className="w-3/4 text-sm">
          Integer fermentum molestie neque quis pulvinar. Vestibulum sit amet
          ultrices tortor. Vestibulum posuere dolor libero, et ultricies elit
          malesuada at. Curabitur sit amet mi pulvinar, pellentesque ligula in,
          congue nibh. Nullam sed porttitor sapien, et suscipit diam. Sed et
          eros sit amet neque elementum aliquet. Donec commodo dolor non neque
          congue, et ultrices tortor efficitur. Sed sit amet ante libero. Fusce
          tortor massa, gravida sit amet rutrum sit amet, mollis non turpis.
        </p>
      </motion.div>
      <div className="flex flex-row gap-10 mx-auto mt-16 ml-5 overflow-auto">
        {classes.map((element: ClassType, index) => {
          return (
            <Class
              key={index}
              img={element.img}
              name={element.name}
              description={element.description}
            />
          );
        })}
      </div>
    </section>
  );
};
