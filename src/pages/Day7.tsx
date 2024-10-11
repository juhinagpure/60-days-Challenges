import GroupImg from "../assets/Images/Group.png";
import MaskImg from "../assets/Images/MaskGroup.png";
const Day7 = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border-l-8 border-r-8 border-b-8 border-red-500 w-[1000px] h-[600px]">
        <img src={GroupImg} alt="" />
        <h1 className="text-2xl text-red-600 font-bold text-lg-400 font-Inter leading-6 ml-3">
          Tropical <br /> Inspire
        </h1>
        <div className="max-w-xs mx-auto bg-white rounded-lg -mt-10">
          {" "}
          <h2 className="text-lg font-semibold mb-3">
            Create Your Inspiration
          </h2>
          <div className="mb-3">
            <label className="block text-sm font-medium text-red-500">
              Description
            </label>
            <input
              type="text"
              placeholder="Inspiration"
              className="mt-1 block w-full border-4 border-red-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 p-1"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-400">
              Topic
            </label>
            <input
              type="text"
              placeholder="Vacation"
              className="mt-1 block w-full border border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 p-1"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-400">
              Collaborators
            </label>
            <div className="flex items-center">
              <img
                src={MaskImg}
                alt="Collaborator"
                className="w-16 h-16 mr-2"
              />
            </div>
            <span className="block text-sm font-medium text-gray-400">
              Collaborators can
            </span>
            <div className="flex items-center">
              <span className="mr-2">Add more people</span>
              <input type="checkbox" className="form-checkbox" />
            </div>
          </div>
          <div className="mb-3">
            <span className="text-sm font-medium text-gray-400">
              People can
            </span>
            <div className="flex items-center">
              <span className="mr-2">Request to join</span>
              <input type="checkbox" className="form-checkbox" />
            </div>
          </div>
          <div className="mb-3">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm text-gray-400">
              Send me updates about Tropical Inspire products and services.{" "}
              <span className="text-blue-600 cursor-pointer">
                Privacy policy
              </span>
            </label>
          </div>
          <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-400 transition">
            continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Day7;
