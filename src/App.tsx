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
          src="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?auto=format&fit=crop&q=80&w=1200"
          alt="Loading"
          className="w-screen h-screen object-cover"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Square drummer image */}
      <div className="w-[500px] h-[500px] relative mb-8">
        <img 
          src={PorterDrummer} 
          alt="Drummer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Horizontal navigation menu */}
      <nav className="bg-black bg-opacity-95 px-8 py-4 w-[500px]">
        <ul className="flex justify-between items-center">
          <li>
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-200 text-sm tracking-widest">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-200 text-sm tracking-widest">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-200 text-sm tracking-widest">
              Collaborate
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-200 text-sm tracking-widest">
              Socials
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-200 text-sm tracking-widest">
              Gallery
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;