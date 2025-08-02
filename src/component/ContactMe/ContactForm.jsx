import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactFom = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message ❌");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex  flex-col gap-4 mt-4s"
      >
        <input
          name="from_name"
          className="h-12 rounded-lg px-2 bg-lightGrey  text-white focus:outline-none focus:ring-2 focus:ring-lightGrey"
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          name="from_email"
          className="h-12 rounded-lg px-2 text-white bg-lightGrey focus:outline-none focus:ring-2 focus:ring-lightGrey"
          type="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          className="rounded-lg bg-lightGrey text-white p-2 focus:outline-none focus:ring-2 focus:ring-lightGrey"
          placeholder="Message Me"
          rows="9"
          cols={50}
          required
        />
        <button
          type="submit"
          className="w-full bg-cyan rounded-lg px-4 py-2 border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default ContactFom;
