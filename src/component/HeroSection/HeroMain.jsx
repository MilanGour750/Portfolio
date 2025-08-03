import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

const HeroMain = () => {
  return (
    <div id="" className="pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroImg />
      </div>
    </div>
  );
};
export default HeroMain;
