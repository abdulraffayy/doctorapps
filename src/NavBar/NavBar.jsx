import { FaHome, FaUserAlt, FaCog, FaBell } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex">
      <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
        <div className="flex items-center justify-center py-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold">App Logo</h2>
        </div>
        <div className="flex-grow px-4 py-8 space-y-6">
          <ul>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-white hover:bg-gray-700 px-4 py-3 rounded-md transition duration-200"
              >
                <FaHome />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-white hover:bg-gray-700 px-4 py-3 rounded-md transition duration-200"
              >
                <FaUserAlt />
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-white hover:bg-gray-700 px-4 py-3 rounded-md transition duration-200"
              >
                <FaCog />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-white hover:bg-gray-700 px-4 py-3 rounded-md transition duration-200"
              >
                <FaBell />
                <span>Notifications</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <nav className="bg-white shadow-md p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-gray-900">
              <FaUserAlt />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <FaBell />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <FaCog />
            </button>
          </div>
        </nav>
        <div className="flex-1 p-6">
          <h2 className="text-3xl font-semibold">Welcome to your Dashboard</h2>
          <p className="mt-4 text-lg text-gray-600">
            Here is your content. You can add sections, widgets, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
