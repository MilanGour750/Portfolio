const SingleExp = ({ experience }) => {
  return (
    <div className="md:h-[350px] md:w-[240px] sm:w-[500px] sm:h-auto border-2 border-orange border-dashed rounded-2xl p-4 bg-[#1f1f1f] hover:scale-105 transition-transform duration-300 ">
      <p className="font-bold text-cyan text-lg">{experience.job}</p>
      <p className="text-orange font-semibold">{experience.company}</p>
      <p className="text-lightGrey text-sm">{experience.date}</p>

      <ul className="list-disc mt-4 pl-4 text-white text-sm space-y-1">
        {Array.isArray(experience.responsibilities) &&
          experience.responsibilities.map((response, idx) => (
            <li key={idx}>{response}</li>
          ))}
      </ul>
    </div>
  );
};

export default SingleExp;
