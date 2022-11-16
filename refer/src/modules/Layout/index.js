import { Outlet } from "react-router-dom";
import Path from "../../components/Path";
import Header from "../Header";
import "./index.scss";

const Layout = () => {
  return (
    <div>
      <Header />
       <Path/>
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
  );
};

export default Layout;
