import { useEffect, useRef } from "react";

const Audio = ({ type }: any) => {
  const audioRef = useRef<any>(null);

  useEffect(() => {
    // @ts-ignore
    if (navigator.userActivation.hasBeenActive) {
      audioRef.current.play();
    }
  }, []);

  return (
    <audio ref={audioRef}>
      <source src={require("../../assets/startup-95.mp3")} type="audio/mp3" />
    </audio>
  );
};

export default Audio;
