import { FaUserCircle, FaBell, FaCog } from "react-icons/fa";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Your Name</h1>
        <div className="flex items-center space-x-6">
          <IconButton icon={<FaBell />} />
          <IconButton icon={<FaUserCircle />} />
          <IconButton icon={<FaCog />} />
        </div>
      </div>
    </header>
  );
};

const IconButton = ({ icon }) => (
    <button className="text-gray-300 hover:text-white transition duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-600">
      {icon}
    </button>
  );
  
  IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
  };
  
  IconButton.defaultProps = {
    icon: null,
  };
  

export default Header;
