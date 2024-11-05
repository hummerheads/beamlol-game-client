import { useState, useEffect, useRef } from 'react';
import Topbar from "../../components/topbar/Topbar";
const Level = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleContainerRef = useRef(null); // Reference the whole toggle container
  
    // This function toggles the expanded content
    const toggleExpand = () => {
      setIsExpanded(prev => !prev); // Toggle the state to expand or collapse
    };
  
    // This hook handles clicks outside of the toggle area
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (toggleContainerRef.current && !toggleContainerRef.current.contains(event.target)) {
          setIsExpanded(false); // Collapse the content if click is outside of the component
        }
      };
  
      // Bind the event listener for clicks
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  return (
    <div className="bg-[#000] h-screen">
      <Topbar></Topbar>
      <div
        className="flex justify-center items-center gap-2 mx-16 py-2 rounded-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(204, 232, 254, 0.20) 0%, rgba(205, 160, 255, 0.20) 50%, rgba(132, 137, 245, 0.20) 75%, rgba(205, 241, 255, 0.20) 87.5%, rgba(181, 145, 233, 0.20) 100%)",
        }}
      >
        <img src="/level/tick.svg" alt="" />
        <p className="text-white font-bold">Upgrade Level</p>
        <img src="/level/arrow.svg" alt="" />
      </div>
      <div className="mx-4 rounded-xl " style={{
            background:
              "linear-gradient(180deg, rgba(184, 212, 234, 0.30) 0%, rgba(185, 140, 235, 0.30) 50%, rgba(112, 117, 225, 0.30) 75%, rgba(185, 221, 235, 0.30) 87.5%, rgba(161, 125, 213, 0.30) 100%)",
          }}>
        <div
          className="grid grid-cols-2 gap-3 my-2 pb-0 p-4  justify-around"
          
        >
          <div
            className="flex rounded-lg items-center gap-2 p-2 justify-around"
            style={{
              background:
                "linear-gradient(180deg, rgba(204, 232, 254, 0.20) 0%, rgba(205, 160, 255, 0.20) 50%, rgba(132, 137, 245, 0.20) 75%, rgba(205, 241, 255, 0.20) 87.5%, rgba(181, 145, 233, 0.20) 100%)",
            }}
          >
            <img
              className="rounded-full w-8 h-8"
              src="/level/balance.gif"
              alt=""
            />
            <div className="">
              <p className="text-white font-bold">50,000 </p>
              <p className="text-white">Coin prize</p>
            </div>
          </div>
          <div
            className="flex rounded-lg items-center gap-2 p-2 justify-around"
            style={{
              background:
                "linear-gradient(180deg, rgba(204, 232, 254, 0.20) 0%, rgba(205, 160, 255, 0.20) 50%, rgba(132, 137, 245, 0.20) 75%, rgba(205, 241, 255, 0.20) 87.5%, rgba(181, 145, 233, 0.20) 100%)",
            }}
          >
            <img
              className="rounded-full w-8 h-8"
              src="/level/energy.svg"
              alt=""
            />
            <div className="">
              <p className="text-white font-bold">50,000 </p>
              <p className="text-white">Level 1 Health</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gradient-to-b from-yellow-800 to-yellow-200 shadow-inner">
          <p className="text-[#4E341B] font-black text-xl py-4 text-center">
            Continue Playing
          </p>
        </div>
      </div>
      <div className="mx-4 rounded-xl " style={{
          background:
            "linear-gradient(180deg, rgba(184, 212, 234, 0.30) 0%, rgba(185, 140, 235, 0.30) 50%, rgba(112, 117, 225, 0.30) 75%, rgba(185, 221, 235, 0.30) 87.5%, rgba(161, 125, 213, 0.30) 100%)",
        }}>
        {/* Additional content here */}
      </div>
      <div ref={toggleContainerRef} className="relative mx-4 mt-4 rounded-xl">
        <div className="flex rounded-xl justify-around my-4 py-2 mx-4 border-2 border-blue-100 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 bg-opacity-25">
          <div className="flex gap-3">
            <img className="w-6 h-6" src="/level/crown.svg" alt="" />
            <p className="text-white text-base font-semibold">Level 1</p>
          </div>
          <div className="flex gap-3">
            <img className="w-6 h-6" src="/level/perk.webp" alt="" />
            <p className="text-white text-base font-bold">200</p>
          </div>
          {!isExpanded && (
            <button
              onClick={toggleExpand}
              className="absolute inset-y-0 top-12 flex items-center"
            >
              <img src="/level/plus.svg" alt="Toggle" className="w-12 h-12"/>
            </button>
          )}
        </div>
        {isExpanded && (
          <div className=" rounded-xl justify-around my-4 py-2 mx-4 border-2 border-blue-100 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 bg-opacity-25">
            <p className='text-white text-center font-semibold mb-3'>You Will Get</p>
            <div className='flex justify-around items-center'>
            <div className="flex gap-1">
              <img className="w-6 h-6" src="/level/energy.svg" alt="" />
              <p className="text-white text-base font-semibold">5000</p>
            </div>
            <div className="flex gap-3">
              <div className='text-white p-2 rounded-xl font-semibold hover:bg-black'
              style={{
                background:
                  "linear-gradient(180deg, rgba(204, 232, 254, 0.20) 0%, rgba(205, 160, 255, 0.20) 50%, rgba(132, 137, 245, 0.20) 75%, rgba(205, 241, 255, 0.20) 87.5%, rgba(181, 145, 233, 0.20) 100%)",
              }}
              >
                Buy Now
              </div>
            </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Level;
