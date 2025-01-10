import React, { useState, useEffect } from 'react';
import PorterDrummer from "../src/assets/466604986_18464309254053626_5160230373881321912_n.jpg"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <img 
          src={PorterDrummer}
          alt="Loading"
          className="w-screen h-screen object-cover"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Title */}
      <h1 className="text-white text-4xl mb-12 tracking-widest">
        PORTER CHAPMAN
      </h1>

      {/* Vertical navigation menu */}
      <nav className="bg-black bg-opacity-95 px-8 py-4">
        <ul className="flex flex-col space-y-6">
          <li>
            <a href="#" className="text-white hover:text-red-500 hover:translate-x-2 inline-block transition-all duration-200 text-lg tracking-widest capitalize">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-500 hover:translate-x-2 inline-block transition-all duration-200 text-lg tracking-widest capitalize">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-500 hover:translate-x-2 inline-block transition-all duration-200 text-lg tracking-widest capitalize">
              Collaborate
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-500 hover:translate-x-2 inline-block transition-all duration-200 text-lg tracking-widest capitalize">
              Socials
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-500 hover:translate-x-2 inline-block transition-all duration-200 text-lg tracking-widest capitalize">
              Gallery
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;