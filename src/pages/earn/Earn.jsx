import { useState, useEffect } from "react";
import { FaWallet, FaYoutube, FaVideo, FaCoins, FaBolt } from "react-icons/fa"; // Importing relevant icons

const Earn = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Carousel slides with images and text overlays
  const carouselSlides = [
    { image: "/Earn/slide 1.jpg", text: "Special Offer!" },
    { image: "/Earn/slide 2.jpg", text: "Unlock Rewards!" },
    { image: "/Earn/slide 3.jpg", text: "Join the Community!" },
    { image: "/Earn/slide 4.jpg", text: "Join the Community!" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-[url('/Earn/bg.webp')] bg-cover bg-center font-heading-aldrich"
      style={{ height: 'calc(100vh - 132px)', overflow: 'auto' }}
    >
      <div className="mx-4">
        
        {/* Carousel */}
        <div className="relative h-[280px] my-5 rounded-lg overflow-hidden shadow-lg">
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                className="w-full h-full object-cover rounded-lg"
                src={slide.image}
                alt={`Slide ${index + 1}`}
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-center justify-center">
                <p className="text-white text-2xl font-bold drop-shadow-md">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Special Announcement */}
        <div className="w-1/3 mx-auto text-center font-semibold text-gray-800 text-lg bg-yellow-300 rounded-full py-2 my-3 shadow-md">
          <p>Special</p>
        </div>

        {/* Feature Sections */}
        {[
          { icon: <FaWallet />, title: "Connect wallet on sui", primaryValue: "236,900,600", secondaryValue: "+6" },
          { icon: <FaYoutube />, title: "Watch YouTube videos", primaryValue: "236,900,600", secondaryValue: "+6" },
          { icon: <FaVideo />, title: "Watch promo videos", primaryValue: "236,900,600", secondaryValue: "+6" },
        ].map((feature, index) => (
          <div key={index} className="w-11/12 mx-auto mb-4">
            <div className="flex items-center p-4 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-lg shadow-lg gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white text-blue-600 text-2xl rounded-full shadow">
                {feature.icon}
              </div>
              <div className="text-left">
                <p className="text-white text-lg font-semibold">{feature.title}</p>
                <div className="flex gap-4 mt-1">
                  <div className="flex items-center">
                    <FaCoins className="text-yellow-300 mr-2" /> {/* Coin icon */}
                    <span className="text-white font-medium">{feature.primaryValue}</span>
                  </div>
                  <div className="flex items-center">
                    <FaBolt className="text-yellow-300 mr-2" /> {/* Booster icon */}
                    <span className="text-white font-medium">{feature.secondaryValue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Earn;
