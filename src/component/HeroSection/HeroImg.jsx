import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const HeroImg = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="images/ProfilePic.png"
        alt="Milan Gour"
        className="max-h-[450px] w-auto"
      />
      <div className="absolute z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className="md:h-[80%] sm:h-[120%] min-h-[550px] w-[500px] text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};
export default HeroImg;
