import AboutImg from "./AboutImg";
import AboutText from "./AboutText";

const AboutMain = () => {
  return (
    <div className="flex sm:flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
      <div>
        <AboutText />
      </div>
      <div>
        <AboutImg />
      </div>
    </div>
  );
};
export default AboutMain;
