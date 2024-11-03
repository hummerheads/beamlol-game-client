import { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import { NavLink } from "react-router-dom";

const Earn = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Carousel slides with images and text overlays
  const carouselSlides = [
    {
      image: "/Earn/slide 1.jpg",
      text: "Special Offer!",
    },
    {
      image: "/Earn/slide 2.jpg",
      text: "Unlock Rewards!",
    },
    {
      image: "/Earn/slide 3.jpg",
      text: "Join the Community!",
    },
    {
      image: "/Earn/slide 4.jpg",
      text: "Join the Community!",
    },
  ];

  // Automatically change active slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-[url('/Earn/Earn.gif')]">
      <div className="mx-4">
        <Topbar />

        {/* Carousel Wrapper */}
        <div className="relative h-[300px] mt-4">
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                className="rounded-md w-full h-full object-cover"
                src={slide.image}
                alt={`Slide ${index + 1}`}
              />
              {/* Text Overlay */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 rounded-md">
                <p className="text-white text-xl font-bold">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Special Announcement */}
        <div className="text-base w-1/3 mx-auto font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
          <p className="text-[#555555] text-xl">Special</p>
        </div>

        {/* Connect Wallet Section */}
        <div className="w-2/3 mx-auto">
          <div className="flex gap-4 justify-center mb-5">
            <img
              className="w-10 bg-white px-1 rounded-md"
              src="/Earn/wallet.svg"
              alt=""
            />
            <div>
              <div>
                <p className="text-white text-xl">Connect wallet on sui</p>
              </div>
              <div className="flex justify-around">
                <div className="flex">
                  <img className="w-6" src="/icons/booster.svg" alt="" />
                  <p className="text-white ml-2">236,900,600</p>
                </div>
                <div className="flex">
                  <img className="w-6" src="/icons/booster.svg" alt="" />
                  <p className="text-white ml-2">+6</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Watch YouTube Videos Section */}
        <div className="w-2/3 mx-auto">
          <div className="flex gap-4 justify-center mb-5">
            <img
              className="w-10 bg-white rounded-md"
              src="/Earn/youtube.svg"
              alt=""
            />
            <div>
              <div>
                <p className="text-white text-xl">Watch YouTube videos</p>
              </div>
              <div className="flex justify-around">
                <div className="flex">
                  <img className="w-6" src="/icons/booster.svg" alt="" />
                  <p className="text-white ml-2">236,900,600</p>
                </div>
                <div className="flex">
                  <img className="w-6" src="/icons/booster.svg" alt="" />
                  <p className="text-white ml-2">+6</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Watch Promo Videos Section */}
        <div className="w-2/3 mx-auto">
          <div className="flex gap-4 justify-center mb-5">
            <img
              className="w-10 bg-white rounded-md"
              src="/Earn/video.svg"
              alt=""
            />
            <div>
              <div>
                <p className="text-white text-xl">Watch promo videos</p>
              </div>
              <div className="flex justify-around">
                <div className="flex">
                  <img className="w-6" src="/icons/booster.svg" alt="" />
                  <p className="text-white ml-2">236,900,600</p>
                </div>
                <div className="flex">
                  <img className="w-6" src="/icons/booster.svg" alt="" />
                  <p className="text-white ml-2">+6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Links */}
      <div className="text-center">
        <div className="py-1 rounded-t-xl shadow-2xl grid grid-cols-5 justify-center items-center">
          <NavLink to="/premium">
            <div>
              <img
                className="w-1/2 rounded-md mx-auto"
                src="/icons/Premium.png"
                alt=""
              />
              <p className="text-white text-xs text-center font-bold">
                Premium
              </p>
            </div>
          </NavLink>
          <NavLink to="/shop">
            <div>
              <img
                className="w-1/2 rounded-md mx-auto"
                src="/icons/shop.png"
                alt=""
              />
              <p className="text-white text-xs text-center font-bold">Shop</p>
            </div>
          </NavLink>
          <NavLink to="/">
            <div>
              <img
                className="w-1/2 rounded-md mx-auto"
                src="/home.svg"
                alt=""
              />
              <p className="text-white text-xs text-center font-bold">Home</p>
            </div>
          </NavLink>
          <div>
            <img
              className="w-1/2 rounded-md mx-auto"
              src="/icons/invite.png"
              alt=""
            />
            <p className="text-white text-xs text-center font-bold">Invite</p>
          </div>
          <div>
            <img
              className="w-1/2 rounded-md mx-auto"
              src="/icons/wallet.svg"
              alt=""
            />
            <p className="text-white text-xs text-center font-bold">Wallet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;
