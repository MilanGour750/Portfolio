import AllExp from "./AllExp";
import ExpText from "./ExpText";
import ExpTop from "./ExpTop";

const ExpMain = () => {
  return (
    <>
      <div id="experience" className="max-w-[1200px] mx-auto px-4">
        <ExpText />
        <ExpTop />
        <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
        <AllExp />
      </div>
    </>
  );
};
export default ExpMain;
