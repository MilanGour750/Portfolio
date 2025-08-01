const HeroGradient = () => {
  return (
    <>
      <div>
        <div className="shadow-cyanmidshadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
        <div className="shadow-orgmidshadow absolute top-0 right-[0px] -z-10 animate-pulse"></div>
        <div className="shadow-cyanmidshadow absolute top-[300px] left-0 -z-10 animate-pulse"></div>
        <div className="shadow-orgmidshadow absolute top-[500px] left-0 -z-10 animate-pulse"></div>
      </div>
    </>
  );
};
export default HeroGradient;
