import { Progress } from "flowbite-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [balance, setBalance] = useState(0);
  const [clickPosition, setClickPosition] = useState(null);

  const handleClick = (event) => {
    setBalance(balance + 1);

    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setClickPosition({ x, y });

    setTimeout(() => setClickPosition(null), 3000);
  };

  return (
    <div className="bg-[url('/bggif.gif')] flex flex-col items-center p-4 bg-gray-700">
      <div className="flex justify-end items-center w-full mb-4">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-800 p-2 rounded-full">
            <img src="/name.svg" alt="" />
          </div>
          <span className="text-white">Nick Jay</span>
        </div>
      </div>
      <div className="flex  gap-5 w-full mb-4">
        <div className="w-full bg-gray-800 p-2 rounded-lg text-center">
          <span className="font-semibold text-xs block text-yellow-500">
            Giveaways
          </span>
          <span className="block">🪙</span>
        </div>
        <div className="bg-gray-800 w-full hidden p-2 rounded-lg text-center">
          <span className="font-semibold text-xs block text-blue-500">
            Leaderboard
          </span>
          <span className="text-white text-xs block">1st</span>
        </div>
        <div className="bg-gray-800 w-full p-2 rounded-lg text-center">
          <span className=" font-semibold text-xs block text-green-500">
            Level
          </span>
          <span className="block text-white text-xs">06</span>
        </div>
      </div>
      <div className="w-full mb-4">
        <div className=" flex justify-between items-center mb-1">
          <span className="text-white text-xs">Epic {">"}</span>
          <span className="text-white text-xs">
            Level <br />
            6/10
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <Progress
            progress={60}
            color="teal"
            size="lg"
            className="rounded-full bg-teal-100 shadow-lg animate-pulse"
            labelPosition="inside"
            style={{
              width: "100%",
              background:
                "linear-gradient(120deg, #ADFAA1 0%, #C597CC 45%, #2F39A3 100%)",
            }}
          />
        </div>
      </div>
      <div className="flex justify-evenly w-full mb-4">
        <div className="flex flex-col items-center">
          <img className="w-8" src="icons/booster.png" alt="" />
          <span className="text-white">Booster</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="icons/NFT.svg" alt="" />

          <span className="text-white">NFT</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="icons/transaction.svg" alt="" />

          <span className="text-white">Transaction</span>
        </div>
        <div className="flex flex-col items-center hidden">
          <img src="icons/airdrop.svg" alt="" />
          <span className="text-white">Air drop</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="rounded-full w-8" src="/icons/spin.svg" alt="" />
          <span className="text-white ">Spin</span>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="/banner.png"
          alt="A cute robot with glowing eyes"
          className=""
        />
      </div>

      <div className="text-center">
        <div className="bg-[#ff9c17] my-5 items-center justify-center w-1/3 gap-2 rounded-full flex">
          <img
            className="w-10 h-10 rounded-full"
            src="/icons/energy.svg"
            alt=""
          />
          <div>
            <p className="font-bold text-xs text-white">0000</p>

            <p className="text-[#ffe386] text-xs">/0000</p>
          </div>
        </div>
        <div className=" py-1 rounded-t-xl shadow-2xl grid grid-cols-5 justify-center items-center ">
          <NavLink to="premium">
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
          <div>
            <img
              className="w-1/2 rounded-md mx-auto"
              src="/icons/shop.png"
              alt=""
            />
            <p className="text-white text-xs text-center font-bold">Shop</p>
          </div>
          <div>
            <img
              className="w-1/2 rounded-md mx-auto"
              src="/icons/earn.svg"
              alt=""
            />
            <p className="text-white text-xs text-center font-bold">Earn</p>
          </div>
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

export default Home;
