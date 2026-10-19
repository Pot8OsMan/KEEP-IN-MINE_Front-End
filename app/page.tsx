'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadingData();
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-container">
          <div className="coffee-header">
            <div className="coffee-header__buttons"></div>
            <div className="coffee-header__display"></div>
            <div className="coffee-header__details"></div>
          </div>
          <div className="coffee-medium">
            <div className="coffe-medium__exit"></div>
            <div className="coffee-medium__arm"></div>
            <div className="coffee-medium__liquid"></div>
            <div className="smoke one"></div>
            <div className="smoke two"></div>
            <div className="smoke three"></div>
            <div className="smoke four"></div>
            <div className="coffee-medium__cup"></div>
          </div>
        </div>
        <div className="loader-text">LOADING...</div>
    </div>
    );
  }
  return (
    <div>
      Home Page
    </div>
  );
}
