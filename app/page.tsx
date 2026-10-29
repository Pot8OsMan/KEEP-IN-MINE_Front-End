'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isStopLoading, setIsStopLoading] = useState(false);

  useEffect(() => {
    const loadingData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setIsLoading(false);
    };

    const commenceEntry = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsStopLoading(true);
    };

    loadingData();
    commenceEntry();
  }, []);

  if (isLoading || !isStopLoading) {
    return (
      <div className={`loader ${isStopLoading ? 'exit' : ''}`}>
        <div className="item1"></div>
        <div className="item2"></div>
        <div className="item3"></div>
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
