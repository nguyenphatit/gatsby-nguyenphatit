import React from "react";
import ChangeTextEffect from "../components/ChangeTextEffect";
import GlitchText from "../components/GlitchText";

const HeroComponent: React.FC<{}> = () => {
  return (
    <div className="min-h-screen bg-black bg-center bg-no-repeat bg-cover flex justify-center items-center">
      <div className="container mx-auto flex justify-center items-center flex-col absolute">
        <h1 className="text-9xl font-serif uppercase text-blue">
          <ChangeTextEffect text="HTML structuredấdad" />
        </h1>
      </div>
    </div>
  );
};

export default HeroComponent;
