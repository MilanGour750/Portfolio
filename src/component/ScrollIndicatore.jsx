import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;

      setWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-2 bg-gray-300 z-50 w-full">
      <div className="h-full bg-orange" style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default ScrollIndicator;
