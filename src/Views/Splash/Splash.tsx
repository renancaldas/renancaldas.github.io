import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Splash.scss";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let timer1 = setTimeout(() => {
      navigate("/home");
    }, 5 * 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="splash">
      <div className="footer"></div>
    </div>
  );
};

export default Splash;
