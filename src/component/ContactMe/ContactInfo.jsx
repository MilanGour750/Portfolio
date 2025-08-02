import { MdEmail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";


import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <>
      <div className="flex flex-col gap-4 text-white">
        <SingleInfo text="milan.gour97XXX@gmail.com" Img={MdEmail} />
        <SingleInfo text="+91 903938XXXX" Img={RiContactsFill} />
        <SingleInfo text="Khandwa, Madhya Pradesh" Img={FaLocationDot} />
        
      </div>
    </>
  );
};
export default ContactInfo;
