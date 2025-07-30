const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl uppercase text-lightGrey font-body">
        MERN Stack Developer | Devops | Cloud Engineer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-bold text-orange font-special font-bold">
        Milan Gour
      </h1>
      <p className="text-lg mt-4 text-white ">
        Experienced MERN Stack Developer specializing in DevOps practices and
        <br />
        cloud-based automation to deliver scalable and high-performing
        applications.
      </p>
    </div>
  );
};
export default HeroText;
