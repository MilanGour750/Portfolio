import ExpTopLeft from "./ExpTopLeft";
import ExpTopMiddle from "./ExpTopMiddle";
import ExpTopRight from "./ExpTopRight";

const ExpTop = () => {
  return (
    <>
      <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
        <ExpTopLeft />

        <ExpTopMiddle />

        <ExpTopRight />
      </div>
    </>
  );
};
export default ExpTop;
