import SingleExp from "./SingleExp";
import { FaArrowRight } from "react-icons/fa6";

const experiences = [
  {
    job: "Market Analyst",
    company: "FinTech Club VIT-Bhopal",
    date: "Jun 2023 - Jun 2024",
    responsibilities: [
      "Stock and equity market analysis.",
      "Participated in the core team responsible for planning events such as Beyond The Blocks and BNB Chain.",
      "Used technical analysis to simplify the futures and options chart pattern.",
    ],
  },
  {
    job: "FullStack Developer",
    company: "Cognifyz Solutions PVT LTD",
    date: "Dec 2024 - Jan 2025",
    responsibilities: [
      "Implemented payment feature using Razorpay for a client.",
      "Integrated CI/CD pipelines to automate deployment and reduce AWS billing.",
      "Used Docker containers for mini projects to optimize resource usage.",
    ],
  },
];

const AllExp = () => {
  return (
    <div className="flex flex-wrap items-start justify-center gap-6 mt-10">
      {experiences.map((exp, index) => (
        <div key={index} className="flex items-center gap-6">
          <SingleExp experience={exp} />
          {index < experiences.length - 1 && (
            <FaArrowRight className="text-4xl text-orange hidden lg:block" />
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExp;
