import HeroGradient from "./component/HeroSection/HeroGradient";
import HeroMain from "./component/HeroSection/HeroMain";
import SubHero from "./component/HeroSection/SubHero";
import Navbar from "./component/Navbar/Navbar";

const App = () => {
  return (
    <div className="font-body">
      <Navbar />
      <HeroMain />
      <HeroGradient />
      <SubHero />
    </div>
  );
};
export default App;
