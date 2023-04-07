import React from "react";
import ChangeTextEffect from "../ChangeTextEffect";
import GlitchText from "../GlitchText";
import theme from "../../tailwind-theme";

const Hero: React.FC<{}> = () => {
  return (
    <div className="min-h-screen bg-black bg-center bg-no-repeat bg-cover flex justify-center items-center">
      <div className="container mx-auto flex justify-center items-center flex-col absolute">
        <ChangeTextEffect text="Hello world" className="text-9xl font-serif uppercase text-blue" />
        <GlitchText text="HelloWorld" className="text-9xl font-serif uppercase text-blue" background={theme.colors.black} />
        <h1 className="text-9xl font-serif uppercase text-blue">Hello World</h1>
      </div>
    </div>
  );
};

export default Hero;
