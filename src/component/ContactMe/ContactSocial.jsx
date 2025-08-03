import SingleContactSocial from "./SingleContactSocial";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4 ">
      <SingleContactSocial
        link="https://github.com/MilanGour750"
        Icon={AiFillGithub}
      />
      <SingleContactSocial
        link="https://www.linkedin.com/in/milan-gour-50176122b/"
        Icon={GrLinkedin}
      />
      <SingleContactSocial
        link="https://www.linkedin.com/in/milan-gour-50176122b/"
        Icon={FaInstagram}
      />
    </div>
  );
};
export default ContactSocial;
