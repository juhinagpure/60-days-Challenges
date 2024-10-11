import { EnvelopeSimple } from "@phosphor-icons/react";
import GirlImg from "../assets/Images/girl.png";

const Day3 = () => {
  return (
    <div className="bg-gray-200 rounded-lg pb-6 w-80 h-100 text-center shadow-lg mx-auto mt-16">
      <div className="relative">
        <img src={GirlImg} alt="Profile" className=" mx-auto mb-4" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 to-gray-200/100 from-50% mix-blend-lighten" />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">Jane Doe</h1>
        <p className="text-gray-500 mb-4 mt-3 text-xl">
          Product Manager
          <br />
          📍 London, UK
        </p>
        <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 flex items-center gap-2 mx-auto">
          <EnvelopeSimple weight="bold" />
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Day3;
