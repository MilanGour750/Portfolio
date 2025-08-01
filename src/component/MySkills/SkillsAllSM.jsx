import { FaJava, FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbCloudComputing } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { GrCloudComputer } from "react-icons/gr";

const skills = [
  { icon: FaJava, skillName: "Java" },
  { icon: IoLogoJavascript, skillName: "JavaScript" },
  { icon: SiTypescript, skillName: "TypeScript" },
  { icon: RiReactjsFill, skillName: "ReactJS" },
  { icon: SiExpress, skillName: "Express" },
  { icon: FaAws, skillName: "AWS" },
  { icon: TbCloudComputing, skillName: "Cloud" },
  { icon: GrCloudComputer, skillName: "DevOps" },
];

const SkillsAllSM = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
        {skills.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange" />
            <p className="text-white text-center mt-4">{item.skillName}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default SkillsAllSM;
