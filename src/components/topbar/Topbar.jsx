import { useUser } from "../../context/UserContext"; // Adjust the path accordingly

const Topbar = () => {
  const user = useUser();
  if (!user) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    ); // Show a loading state while fetching user data
  }

  const { balance, perk, spin } = user;

  return (
    <div className="mx-auto flex justify-around gap-2 bg-gray-800">
      <div className="flex gap-2 items-center text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
        <img className="w-6" src="/icons/booster.png" alt="" />
        <p className="text-[#555555] text-xs">{balance}</p>
      </div>
      <div className="flex gap-2 items-center text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
        <img className="w-6" src="/shop/perk.webp" alt="" />
        <p className="text-[#555555] text-xs">{perk}</p>
      </div>
      <div className="flex gap-2 items-center text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
        <img className="w-5 rounded-full" src="/icons/spin.svg" alt="" />
        <p className="text-[#555555] text-xs">{spin}</p>
        <img className="w-4 rounded-full" src="/icons/plus.svg" alt="" />
      </div>
    </div>
  );
};

export default Topbar;
