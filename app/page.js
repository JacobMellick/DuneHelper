"use client";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("testing");
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return null; // This component does not render anything
};

export default Home;
