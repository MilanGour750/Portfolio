const AboutText = () => {
  return (
    <div className="flex flex-col md:items-start items-center md:text-sm sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white md:text-justify sm:text-center">
        I'm a passionate and dedicated software developer with comprehensive
        hands-on experience in full-stack web development, cloud infrastructure,
        and modern DevOps practices. Over time, I’ve designed and implemented
        scalable, responsive, and maintainable web applications that deliver
        real value to users and businesses alike. My skill set spans both
        frontend and backend technologies, as well as cloud platforms like AWS,
        allowing me to build end-to-end solutions that are robust, secure, and
        performance-optimized. <br /> Beyond development, I have a strong
        interest in automation, cloud monitoring, and CI/CD workflows, which has
        led me to explore tools like Docker, Kubernetes, and various
        infrastructure-as-code technologies. I take pride in solving real-world
        problems through clean, efficient code and thoughtful system design. I
        thrive in fast-paced, collaborative environments and am constantly
        seeking to expand my knowledge by exploring emerging technologies that
        improve productivity, reliability, and user experience.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 items-center mt-10 text-lg hover:bg-darkOrange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        My Projects
      </button>
    </div>
  );
};
export default AboutText;
