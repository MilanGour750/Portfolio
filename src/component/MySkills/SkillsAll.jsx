import { FaJava, FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbCloudComputing } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import SkillSingle from "./SkillSingle";
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

const SkillsAll = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 relative max-w-[1200px] mx-auto">
        {skills.map((item, index) => (
          <SkillSingle
            key={index}
            text={item.skillName}
            imgSvg={<item.icon />}
          />
        ))}
      </div>
    </div>
  );
};
export default SkillsAll;
