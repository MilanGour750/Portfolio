const Links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <>
      <ul
        className="flex gap-6 text-[#f1e1d9] font-bold text-center py-4 
  lg:flex-row sm:flex-col 
  lg:relative sm:absolute sm:top-[120%] sm:left-1/2 sm:-translate-x-1/2 
  lg:text-md md:text-xl 
  sm:bg-cyan/30 lg:bg-black 
  sm:w-full backdrop-blur-lg"
      >
        {Links.map((links, index) => (
          <li key={index} className="group">
            <a
              className="cursor-pointer text-[#f1e1d9] hover:text-cyan transition-all duration-500"
              href="#"
            >
              {links.link}
            </a>
            <div className="mx-auto bg-[#15d1e9] w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default NavbarLinks;
