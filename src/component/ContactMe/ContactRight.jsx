import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactRight = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-12">
        <img
          className="max-w-[300px] "
          src="images/email-image.png"
          alt="contactImage"
        />
        <ContactInfo />
        <ContactSocial />
      </div>
    </>
  );
};
export default ContactRight;
