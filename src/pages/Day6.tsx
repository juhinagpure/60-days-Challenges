import girl2Img from "../assets/Images/girl2.png";

const Day6 = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 w-[1240px] h-[590px] text-center mx-auto mt-12">
      <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
      <div className="bg-slate-100 rounded-lg p-6 w-[700px] h-[500px] text-left mx-auto mt-5 shadow-lg">
        <div className="bg-white rounded-lg p-6 w-[600px] h-[400px] text-left mx-auto mt-5 shadow-md flex">
          <div className="w-1/2 pr-4">
            <img className="rounded-lg" src={girl2Img} alt="" />
          </div>
          <div className="w-1/2">
            <h3 className="text-xl font-semibold mt-24">Becky Nelson</h3>
            <p className="mt-2">
              Ask agreed answer rather joy nature admire wisdom. Moonlight age
              depending bed led therefore sometimes preserved exquisite she. An
              fail up so shot leaf wise in. Minuter highest his arrived for put
              and. Hopes lived by rooms oh in no death house.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day6;
