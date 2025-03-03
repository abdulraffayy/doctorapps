import Sidebar from "../Sidebar/Sidebar.jsx";
import Header from "../Header/Header.jsx";

const Layout = ({ children}) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 mt-16">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
