import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const MainLayout = () => {
   return (
      <div className="w-full h-screen">
         <Header />
         <div className="mt-30">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default MainLayout;
