const Topbar = () => {
  return (
    <div className="text-center text-xs py-5">
      <h1 className="bg-[#ff9c17] text-[#ffe386] py-2 font-black rounded-full text-lg mx-10">Giveaway Notification</h1>
      <div className="flex justify-center gap-10 py-2">
        <div className="flex items-center">
          <div>
            <img className="w-8 " src="/icons/balance.gif" alt="" />
          </div>
          <div className="bg-[#ff9c17] text-[#ffe386] shadow-xl font-black  py-1 px-5 rounded-lg">
            222222
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <img className="w-7 " src="/icons/level1.svg" alt="" />
          </div>
          <div className="bg-[#ff9c17] text-[#ffe386] shadow-xl font-black  py-1 px-5 rounded-lg">
            LVL 1 : Beginner
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
