import "./App.css";
import BannerTop from "./components/bannerTop/BannerTop";
import Carousel from "./components/carousel/Carousel";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <div className="w-full min-h-screen">
        <BannerTop />
        <NavBar />
      </div>
    </>
  );
}

export default App;
