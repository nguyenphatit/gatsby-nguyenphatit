import React from "react";

const HeroComponent: React.FC<{}> = () => {
  return (
    <div className="min-h-screen bg-purple-light flex justify-center items-center">
      <div className="container mx-auto">
        <h3 className="font-bold text-center text-4xl text-green-dark">Welcome to</h3>
        <h1 className="font-bold text-center text-6xl text-green-dark">nguyenphatit</h1>
      </div>
    </div>
  );
};

export default HeroComponent;
