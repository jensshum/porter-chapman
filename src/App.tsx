import React, { useState, useEffect } from 'react';
import PorterDrummer from "../src/assets/466604986_18464309254053626_5160230373881321912_n.jpg"
import { Facebook, Instagram, Twitter, Youtube, Music } from 'lucide-react';

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
      <img src="https://web.archive.org/web/20091026115428/http://geocities.com/cannabis_corner420/images/420clock.gif"></img>
      <img src="https://web.archive.org/web/20090808102404/http://www.geocities.com/freerusty/drugsenseorgwodclockhtm.gif"></img>
      <img src="https://web.archive.org/web/20090808092914/http://www.geocities.com/for_real_grrl2000/kittyclock.gif"></img>
      <img src="https://web.archive.org/web/20090831090234/http://www.geocities.com/ezr4k/clockrun.gif"></img>

      <h1 className="text-white text-4xl mb-12 tracking-widest">
        PORTER CHAPMAN
      </h1>

      {/* Vertical navigation menu */}
      <nav className="bg-black bg-opacity-95  py-10">
        <ul className="flex flex-col space-y-6">
          <li>
            <a href="#" className="text-white hover:text-red-500 hover:translate-x-2 inline-block transition-all duration-200 text-sm tracking-widest capitalize">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-500 hover:translate-x-2 inline-block transition-all duration-200 text-sm tracking-widest capitalize">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-500 hover:translate-x-2 inline-block transition-all duration-200 text-sm tracking-widest capitalize">
              Collaborate
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-500 hover:translate-x-2 inline-block transition-all duration-200 text-sm tracking-widest capitalize">
              Socials
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-500 hover:translate-x-2 inline-block transition-all duration-200 text-sm tracking-widest capitalize">
              Gallery
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex space-x-9">
        <a href="#" className="text-white hover:text-red-500 transition-colors duration-200">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="text-white hover:text-red-500 transition-colors duration-200">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="text-white hover:text-red-500 transition-colors duration-200">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="text-white hover:text-red-500 transition-colors duration-200">
          <Youtube className="w-5 h-5" />
        </a>
        <a href="#" className="text-white hover:text-red-500 transition-colors duration-200">
          <Music className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

export default App;