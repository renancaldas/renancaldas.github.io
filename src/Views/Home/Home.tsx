import { useEffect, useRef, useState } from "react";

import "./Home.scss";
import Audio from "../../Components/Audio";
import Desktop from "../../Components/Desktop";
import WinBar from "../../Components/WinBar";

const Home = () => {
  return (
    <div className="home">
      <Audio startup />
      <Desktop />
      <WinBar />
    </div>
  );
};

export default Home;
