import { NavLink } from "react-router-dom";

const LeftBar = () => {
    return (
      <div className="text-center mx-2 my-16">
        <div className="text-xs grid gap-10">
          <div className="relative w-10">
            <img className=" bg-white rounded-md" src="/icons/binance.png" alt="" />
            <div className="absolute left-0 -bottom-2">
            <NavLink className="bg-black  text-white p-1 font-bold text-xs rounded-full">Binance</NavLink>
            </div>
          </div>
          <div className="relative w-10">
            <img className=" bg-white rounded-md" src="/icons/bitget.svg" alt="" />
            <div className="absolute left-0 -bottom-2">
            <NavLink className="bg-black  text-white p-1 font-bold text-xs rounded-full">Bitget</NavLink>
            </div>
          </div>
          <div className="relative w-10 h-10">
            <img className=" bg-black rounded-md" src="/icons/bybit.webp" alt="" />
            <div className="absolute left-0 -bottom-2">
            <NavLink className="bg-black  text-white p-1 font-bold text-xs rounded-full">Bybit</NavLink>
            </div>
          </div>
          <div className="relative w-10">
            <img className=" bg-white rounded-md" src="/icons/gate.io.svg" alt="" />
            <div className="absolute left-0 -bottom-2">
            <NavLink className="bg-black  text-white p-1 font-bold text-xs rounded-full">Gate.io</NavLink>
            </div>
          </div>
          

          

        </div>
      </div>
    );
  };
  
  export default LeftBar;
  