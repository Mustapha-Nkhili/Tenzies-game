import { useState, useEffect } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const Confetti = ({tenzies}) => {
  const [fire, setFire] = useState(false);

  const onClickFire = () => {
    setFire({});
  };


  useEffect(() => {
    onClickFire();
  }, [tenzies]);

  const style = {
    position: "absolute",
    width: "100%",
    height: "50%",
    left: "50%",
    top: "0",
    transform: "translateX(-50%)",
    zIndex: 1,
  };

  return (
    <>
      <ReactCanvasConfetti
        style={style}
        className={"yourClassName"}
        fire={fire}
      />
    </>
  );
};

export default Confetti;
