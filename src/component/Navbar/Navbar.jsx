import { useState } from "react";
import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
        <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
          <NavbarLogo />
          <div className={`${open ? "sm:block" : "sm:hidden"} lg:block`}>
            <NavbarLinks />
          </div>
          <NavbarBtn />
        </div>
        <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full  border-orange border-[0.5px] ">
          <button
            className="text-2xl p-3 border border-orange rounded-full text-white "
            onClick={toggle}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
