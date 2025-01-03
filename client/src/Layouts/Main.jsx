import { Outlet } from "react-router-dom";
import Footer from "../Componnents/Shared/Footer/Footer";
import Navbar from "../Componnents/Shared/NavBar/Navbar";

const Main = () => {
  return (
    <div>
      
      <div>
        <Navbar />
        <div className=""><Outlet /></div>
        <Footer />
      </div>

    </div>
  );
};

export default Main;
