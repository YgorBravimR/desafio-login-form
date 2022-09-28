import "./styles/main.css";
import sideBgImg from "/side-image.jpg";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

export function App() {
  return (
    <div className="lg:grid grid-cols-2">
      <div className="bg-background h-[100vh] w-[100vw] lg:w-[50vw] lg:h-[100vh] text-textBase py-10 px-5 font-poppins">
        <Header />
        <Home />
      </div>
      <div>
        <img src={sideBgImg} className="lg:w-[50vw] lg:h-[100vh]" alt="" />
      </div>
    </div>
  );
}
