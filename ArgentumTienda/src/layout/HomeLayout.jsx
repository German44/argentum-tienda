import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import BannerTop from "../components/bannerTop/BannerTop";

const HomeLayout = () => {
  return (
    <div className="relative w-full min-h-screen bg-fondo bg-no-repeat bg-cover bg-fixed">
    <div className="absolute inset-0 bg-black bg-opacity-50 blur-lg"></div>
    <div className="relative z-10">
      <BannerTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  </div>
  );
};

export default HomeLayout;
