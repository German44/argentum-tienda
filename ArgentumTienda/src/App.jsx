import "./App.css";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="w-full h-screen">
        <Carousel />
      </div>
    </>
  );
}

export default App;
