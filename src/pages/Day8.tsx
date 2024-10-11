import profilePic from "../assets/Images/MaskGroup.png";
import flagPH from "../assets/Images/girl.png";
import flagOther from "../assets/Images/girl2.png";

const EmergencyCard = () => {
  return (
    <div className="bg-pink-100 flex flex-col lg:flex-row items-center justify-center min-h-screen py-10 space-x-0 lg:space-x-10">
      <div className="relative w-full max-w-xs bg-red-500 rounded-xl shadow-lg p-6 text-white">
        <h2 className="text-xl font-bold mb-4 uppercase">
          In Case of Emergency
        </h2>
        <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="red"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2.25v19.5m9.75-9.75h-19.5"
            />
          </svg>
        </div>
        <div className="w-full max-w-xs bg-white rounded-xl shadow-lg p-6 text-black">
          <h2 className="text-xl font-bold mb-4 uppercase">
            In Case of Emergency
          </h2>
          <div className="flex items-center mb-4">
            <img
              src={profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div className="ml-4">
              <p className="text-lg font-semibold">Mark Rio Padilla</p>
            </div>
          </div>
          <div className="space-y-4 text-sm">
            <p>
              <span className="font-semibold">Blood type:</span> O
            </p>
            <p>
              <span className="font-semibold">Allergies:</span> Grass,
              shellfish, eggs
            </p>
            <p>
              <span className="font-semibold">Medications:</span> Ventolin
            </p>
            <p>
              <span className="font-semibold">Address:</span> 204 Sen. Gil Puyat
              Ave, Makati City, Metro Manila, Philippines
            </p>
            <p>
              <span className="font-semibold">Medical notes:</span> None
            </p>
            <p>
              <span className="font-semibold">Organ donor:</span> Yes/No
            </p>
          </div>
        </div>

        <div className="w-full max-w-xs bg-white rounded-xl shadow-lg p-6 text-red-500 relatives">
          <h2 className="text-xl font-bold mb-4 uppercase">
            Emergency Contacts
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <img
                src={profilePic}
                alt="Contact 1"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">Paola De Jesus</p>
                <p className="text-sm">+00 8560 6024</p>
              </div>
              <img src={flagPH} alt="Flag PH" className="w-5 h-5 ml-auto" />
            </li>
            <li className="flex items-center">
              <img
                src={profilePic}
                alt="Contact 2"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">Imran Salim</p>
                <p className="text-sm">+00 8787 7250</p>
              </div>

              <img
                src={flagOther}
                alt="Flag Other"
                className="w-5 h-5 ml-auto"
              />
            </li>
            <li className="flex items-center">
              <img
                src={profilePic}
                alt="Contact 3"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">Jan-Dirk Hageman</p>
                <p className="text-sm">+00 9107 5762</p>
              </div>
              <img
                src={flagOther}
                alt="Flag Other"
                className="w-5 h-5 ml-auto"
              />
            </li>
          </ul>
          <div className="mt-6 text-sm text-gray-400 absolute bottom-4 right-4">
            See reverse →
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCard;
