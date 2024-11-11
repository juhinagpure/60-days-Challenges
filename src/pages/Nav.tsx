const Nav = () => {
  return (
    <>
      <ul className="hidden md:flex space-x-14 mr-10">
        <li>
          <a href="#" className="text-gray-300 text-xl  hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 text-xl hover:text-white">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 text-xl hover:text-white">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 text-xl hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
