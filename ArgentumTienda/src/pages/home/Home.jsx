import BannerTop from "../../components/bannerTop/BannerTop";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/heroSection/HeroSection";
import NavBar from "../../components/navBar/NavBar";
import PromoSection from "../../components/promoSection/PromoSection";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <BannerTop />
      <NavBar />
      <HeroSection />
      <PromoSection />
      <Footer />
    </div>
  );
};

export default Home;
