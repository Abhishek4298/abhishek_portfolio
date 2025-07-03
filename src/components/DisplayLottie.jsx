import React, { Suspense } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Loading from "./Loading";

const GreetingLottie = ({ animationData }) => {
  return (
    <Suspense fallback={<Loading />}>
      <div onClick={() => null}>
        <Player
          autoplay
          loop
          src={animationData}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </Suspense>
  );
};

export default GreetingLottie;
