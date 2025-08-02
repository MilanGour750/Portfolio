import ProjectSingle from "./ProjectSingle";
import ProjectText from "./ProjectText";

const projects = [
  {
    name: "EventPro",
    year: "OCT 2023",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "AWS Alarm Triggering System",
    year: "NOV 2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Suvidha",
    year: "OCT 2023",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Sahayata",
    year: "NOV 2023",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectText />
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
