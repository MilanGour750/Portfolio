import SkillsAll from "./SkillsAll";
import SkillsAllSM from "./SkillsAllSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const SkillsMain = () => {
  return (
    <>
      <div id="skills">
        <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <SkillsText />
          </motion.div>
          <div className="bottom-[50px] absolute left-[50%] translate-x-[-50%] lg:block sm:hidden">
            <SkillsAll />
          </div>
          <div className="sm:block lg:hidden">
            <SkillsAllSM />
          </div>
        </div>
      </div>
    </>
  );
};
export default SkillsMain;
