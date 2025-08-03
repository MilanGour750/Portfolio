import ProjectSingle from "./ProjectSingle";
import ProjectText from "./ProjectText";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const projects = [
  {
    name: "Online Auction",
    year: "AUG 2023",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://github.com/MilanGour750/Online_Auction_MERN",
  },
  {
    name: "AWS Alarm Triggering System",
    year: "NOV 2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://github.com/MilanGour750/CloudWatch_AlarmTrigger",
  },
  {
    name: "Suvidha",
    year: "APR 2024",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://suvidha-frontend.vercel.app/",
  },
  {
    name: "Sahayata",
    year: "APR 2025",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://github.com/MilanGour750/Sahayata_PrintingService",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => (
          <ProjectSingle
            key={index}
            name={item.name}
            year={item.year}
            align={item.align}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectMain;
