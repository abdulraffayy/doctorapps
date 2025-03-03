import { useState } from "react";
import { FaHome, FaUserAlt, FaCog, FaBell, FaBars } from "react-icons/fa";
import PropTypes from "prop-types";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <div className={`bg-gray-900 text-white ${isOpen ? "w-64" : "w-16"} min-h-screen transition-all duration-300 flex flex-col`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </button>
        </div>

        <div className="flex-grow p-4">
          <ul className="space-y-6">
            <SidebarItem icon={<FaHome />} text="Dashboard" isOpen={isOpen} />
            <SidebarItem icon={<FaUserAlt />} text="Profile" isOpen={isOpen} />
            <SidebarItem icon={<FaCog />} text="Settings" isOpen={isOpen} />
            <SidebarItem icon={<FaBell />} text="Notifications" isOpen={isOpen} />
          </ul>
        </div>
      </div>

    </div>
  );
};

const SidebarItem = ({ icon, text, isOpen, isActive }) => (
  <li>
    <a
      href="#"
      className={`flex items-center space-x-3 px-4 py-3 rounded-md transition duration-300 
        ${isOpen ? "justify-start" : "justify-center"} 
        ${isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}
      `}
    >
      <span className="text-xl">{icon}</span>
      {isOpen && <span className="text-base font-medium">{text}</span>}
    </a>
  </li>
);


SidebarItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isActive: PropTypes.bool,
};

SidebarItem.defaultProps = {
  isActive: false,
};

export default Sidebar;
