import ExpInfo from "./ExpInfo";

const ExpTopLeft = () => {
  return (
    <>
      <div className="flex flex-col gap-6 w-[300px] items-center">
        <p className="text-orange font-bold uppercase text-3xl font-special">
          Since 2022
        </p>
        <div className="flex justify-center items-center gap-4 ">
          <ExpInfo number="3" text="Years" />
          <p className="font-bold text-6xl text-lightBrown"></p>
          <ExpInfo number="8" text="Websites" />
        </div>
        <p className="text-center text-white">
          With 3 Years of Experience In Building Real Time Problem Solving Web
          Applications.
        </p>
        <ExpInfo number="₹10K" text="Max Budget" />
      </div>
    </>
  );
};
export default ExpTopLeft;
