import { NavLink } from "react-router-dom";

const RightBar = () => {
  return (
    <div className="text-center mx-2 my-16">
    <div className="text-xs grid gap-10">
      <div className="relative w-10">
        <img className=" bg-white rounded-md" src="/icons/spin.jpg" alt="" />
        <div className="absolute left-0 -bottom-2">
        <NavLink className="bg-black  text-white p-1 font-bold text-xs rounded-full">Spin</NavLink>
        </div>
      </div>
      <div className="relative w-10">
        <img className=" bg-white rounded-md" src="/icons/boost.jpg" alt="" />
        <div className="absolute left-0 -bottom-2">
        <NavLink className="bg-black  text-white p-1 font-bold text-xs rounded-full">Boost</NavLink>
        </div>
      </div>
      <div className="relative w-10">
        <img className=" bg-white rounded-md" src="/icons/daily.jpg" alt="" />
        <div className="absolute left-0 -bottom-2">
        <NavLink className="bg-black  text-white p-1 font-bold text-xs rounded-full">Daily Transaction</NavLink>
        </div>
      </div>
      <div className="relative w-10">
        <img className=" bg-white rounded-md" src="/icons/Referral Bonus.png" alt="" />
        <div className="absolute left-0 -bottom-2">
        <NavLink className="bg-black  text-white p-1 font-bold text-xs rounded-full">Airdrop</NavLink>
        </div>
      </div>

      

    </div>
  </div>
  );
};

export default RightBar;
