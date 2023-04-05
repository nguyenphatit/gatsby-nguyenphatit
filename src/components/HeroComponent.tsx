import React from "react";

const HeroComponent: React.FC<{}> = () => {
  return (
    <div className="min-h-screen bg-black bg-center bg-no-repeat bg-cover flex justify-center items-center">
      <div className="container mx-auto flex justify-center items-center flex-col absolute">
        <h1 className="text-9xl font-serif uppercase text-blue">Hello</h1>
        <h1 className="text-9xl font-serif uppercase text-blue">Hello</h1>
        <h1 className="text-9xl font-serif uppercase text-blue">Hello</h1>
      </div>
    </div>
  );
};

export default HeroComponent;
