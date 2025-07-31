import AboutMain from "./component/AboutMe/AboutMain";
// import HelperSection from "./component/HelperSection";
import HeroGradient from "./component/HeroSection/HeroGradient";
import HeroMain from "./component/HeroSection/HeroMain";
import SubHero from "./component/HeroSection/SubHero";
import SkillsMain from "./component/MySkills/SkillsMain";
import SkillsSub from "./component/MySkills/SkillsSub";
import Navbar from "./component/Navbar/Navbar";

const App = () => {
  return (
    <div className="font-body">
      <Navbar />
      <HeroMain />
      <HeroGradient />
      <SubHero />
      <AboutMain />

      <SkillsMain />
      <SkillsSub />
      
    </div>
  );
};
export default App;
