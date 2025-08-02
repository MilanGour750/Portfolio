import { IoIosArrowDroprightCircle } from "react-icons/io";

const ProjectSingle = ({ name, year, align, image, link }) => {
  return (
    <div
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          href={link}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-center ${
            align === "left" ? "md:justify-end" : "md:justify-start"
          }`}
        >
          View <IoIosArrowDroprightCircle />
        </a>
      </div>

      <div className="relative max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 border border-white">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-transparent opacity-50 hover:opacity-[0%] transition-all duration-500 z-10 pointer-events-none "></div>

        {/* Image */}
        <img className="w-full h-full object-cover" src={image} alt="Project" />
      </div>
    </div>
  );
};

export default ProjectSingle;
