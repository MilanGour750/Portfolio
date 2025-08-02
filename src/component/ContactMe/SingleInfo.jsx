const SingleInfo = ({ text, Img }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Img className="text-3xl" />
      <p>{text}</p>
    </div>
  );
};
export default SingleInfo;
