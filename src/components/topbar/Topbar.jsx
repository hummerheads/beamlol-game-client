const Topbar = ({ balance }) => {
  return (
    <div className="text-center text-xs py-2">
      <h1 className="bg-[#ff9c17] text-[#ffe386] py-3 font-black rounded-full text-xl my-2">
        Weekly Giveaway: 100 TON
      </h1>
      <div className="flex justify-center gap-10 py-2">
        <div className="flex items-center">
          <div>
            <img className="w-12" src="/icons/balance.gif" alt="" />
          </div>
          <div className="bg-[#ff9c17] text-[#ffe386] shadow-2xl font-black py-3 px-10 text-xl rounded-full">
            {balance}
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <img className="w-12" src="/icons/level1.svg" alt="" />
          </div>
          <div className="bg-[#ff9c17] text-[#ffe386] shadow-xl font-black py-3 px-5 text-xl rounded-full">
            Level 1
          </div>
        </div>
      </div>
      <div className="bg-[#ff9c17] text-[#ffe386] py-1 font-black rounded-full text-md my-2 flex justify-center gap-10 mx-16">
        <div className="flex items-center gap-2">
          <img className="w-7 h-7 rounded-full" src="/icons/boost.jpg" alt="" />
          <p>Boosters</p>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-7 h-7 rounded-full" src="/icons/lederbord.webp" alt="" />
          <p>Leaderboard</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
