import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/topbar/Topbar";



const Earn = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Divs to be displayed
  const slidingDivs = [
    <div key={0} className="text-white p-4 text-center">
      Slide 1: Special Offer!
    </div>,
    <div key={1} className="text-white p-4 text-center">
      Slide 2: Unlock Rewards!
    </div>,
    <div key={2} className="text-white p-4 text-center">
      Slide 3: Join the Community!
    </div>,
    <div key={3} className="text-white p-4 text-center">
      Slide 4: Exclusive Benefits!
    </div>,
    <div key={4} className="text-white p-4 text-center">
      Slide 5: Start Earning Now!
    </div>,
  ];

  // Change active index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slidingDivs.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-[url('/Earn/Earn.gif')] ">
      <div className="mx-4">
<Topbar></Topbar>

        {/* Wrapper for the banner with sliding divs */}
        <div className="relative">
          <img
            className="rounded-md w-full"
            src="/Earn/Banner.gif"
            alt="Banner"
          />

          {/* Overlay with sliding effect */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 rounded-md transition-all duration-700">
            {slidingDivs[activeIndex]}
          </div>
        </div>
        <div className="text-base w-1/3 mx-auto font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
          <p className="text-[#555555] text-xl  ">Special</p>
        </div>
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
                  <div>
                    <img className="w-6" src="/icons/booster.svg" alt="" />
                  </div>
                  <div>
                    <p className="text-white">236,900,600</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img className="w-6" src="/icons/booster.svg" alt="" />
                  </div>
                  <div>
                    <p className="text-white">+6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 mx-auto">
          <div className="flex gap-4 justify-center mb-5">
            <img
              className="w-10 bg-white rounded-md"
              src="/Earn/youtube.svg"
              alt=""
            />
            <div>
              <div>
                <p className="text-white text-xl">Watch youtube videos</p>
              </div>
              <div className="flex justify-around">
                <div className="flex">
                  <div>
                    <img className="w-6" src="/icons/booster.svg" alt="" />
                  </div>
                  <div>
                    <p className="text-white">236,900,600</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img className="w-6" src="/icons/booster.svg" alt="" />
                  </div>
                  <div>
                    <p className="text-white">+6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 mx-auto">
          <div className="flex gap-4 justify-center mb-5">
            <img className="w-10 bg-white rounded-md" src="/Earn/video.svg" alt="" />
            <div>
              <div>
                <p className="text-white text-xl">Watch promo videos</p>
              </div>
              <div className="flex justify-around">
                <div className="flex">
                  <div>
                    <img className="w-6" src="/icons/booster.svg" alt="" />
                  </div>
                  <div>
                    <p className="text-white">236,900,600</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img className="w-6" src="/icons/booster.svg" alt="" />
                  </div>
                  <div>
                    <p className="text-white">+6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Earn;
