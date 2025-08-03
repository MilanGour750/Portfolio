import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-scroll";
const obj = {
  section: "contact",
};

const NavbarBtn = () => {
  return (
    <>
      <Link
        to={obj.section}
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
      >
        <button className="px-4 py-2 rounded-full text-xl font-bold text-[#f1e1d9] border border-[#15d1e9] flex items-center gap-1 bg-gradient-to-r from-[#15d1e9] to-[#ff7f11] hover:border-orange hover:scale-110 transition-all duration-500 cursor-pointer hover:shadow-[0_0_20px_rgba(94,206,220,0.5)]">
          Hire Me
          <div className="sm:hidden md:block">
            <FiArrowDownRight />
          </div>
        </button>
      </Link>
    </>
  );
};
export default NavbarBtn;
