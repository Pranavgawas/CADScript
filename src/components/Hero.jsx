import React from "react";
import InfoModal from "./Modal/InfoModal";

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://t3.ftcdn.net/jpg/05/39/18/84/360_F_539188436_WYHqq4PKFjGoDlZfFKSoaeabLQMfcYHd.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Welcome to our website! Explore a vast collection of VBA code
            snippets designed specifically for mechanical design engineers.
            Streamline your workflow and enhance productivity with our
            user-friendly platform, featuring ready-to-use code for various
            components and assemblies in SolidWorks, CATIA, and other popular
            CAD software.
          </p>
          <InfoModal />
        </div>
      </div>
    </div>
  );
}

export default Hero;
