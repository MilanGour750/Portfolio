import AboutMain from "./component/AboutMe/AboutMain";
import ContactMain from "./component/ContactMe/ContactMain";
import ExpMain from "./component/Experience/ExpMain";
import FooterMain from "./component/Footer/FooterMain";
// import HelperSection from "./component/HelperSection";
import HeroGradient from "./component/HeroSection/HeroGradient";
import HeroMain from "./component/HeroSection/HeroMain";
import SubHero from "./component/HeroSection/SubHero";
import SkillsMain from "./component/MySkills/SkillsMain";
import SkillsSub from "./component/MySkills/SkillsSub";
import Navbar from "./component/Navbar/Navbar";
import ProjectMain from "./component/Projects/ProjectMain";
import { Toaster } from "sonner";

const App = () => {
  return (
    <div className="font-body w-full overflow-hidden">
      <Toaster richColors position="top-center" />

      <Navbar />
      <HeroMain />
      <HeroGradient />
      <SubHero />
      <AboutMain />

      <SkillsMain />
      <SkillsSub />
      <ExpMain />
      <ProjectMain />
      <ContactMain />
      <FooterMain />
    </div>
  );
};
export default App;
