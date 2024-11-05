const Topbar = () => {
  // Query to fetch the user's balance based on telegram ID

  return (
    <div className="mx-auto flex justify-around gap-2">
      <div className="flex gap-2 items-center text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
        <img className="w-6" src="/icons/booster.png" alt="" />
        <p className="text-[#555555] text-xs">100</p>
      </div>
      <div className="flex gap-2 items-center text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
        <img className="w-6" src="/shop/perk.webp" alt="" />
        <p className="text-[#555555] text-xs">900</p>
      </div>
      <div className="flex gap-2 items-center text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
        <img className="w-5 rounded-full" src="/icons/spin.svg" alt="" />
        <p className="text-[#555555] text-xs">236</p>
        <img className="w-4 rounded-full" src="/icons/plus.svg" alt="" />
      </div>
    </div>
  );
};

export default Topbar;
