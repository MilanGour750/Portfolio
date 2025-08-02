import SingleContactSocial from "./SingleContactSocial";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";

const ContactSocial = () => {
  return (
    <div className="flex gap-4 ">
      <SingleContactSocial link="#" Icon={AiFillGithub} />
      <SingleContactSocial link="#" Icon={GrLinkedin} />
    </div>
  );
};
export default ContactSocial;
