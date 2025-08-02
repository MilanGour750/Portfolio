const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full items-center justify-center p-3">
      <a className="cursor-pointer" href={link}>
        <Icon />
      </a>
    </div>
  );
};
export default SingleContactSocial;
