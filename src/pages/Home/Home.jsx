import { Drawer, Progress } from "flowbite-react";
// import { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";

const Home = () => {
  // Example code for your web app to get user_id from URL

  // You can now use this userId for further processing, like storing it in a database or displaying it.

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  //   const [balance, setBalance] = useState(0);
  //   const [clickPosition, setClickPosition] = useState(null);

  //   const handleClick = (event) => {
  //     setBalance(balance + 1);

  //     const rect = event.target.getBoundingClientRect();
  //     const x = event.clientX - rect.left;
  //     const y = event.clientY - rect.top;

  //     setClickPosition({ x, y });

  //     setTimeout(() => setClickPosition(null), 3000);
  //   };
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("user_id");

  console.log("User's Telegram ID:", userId);
  return (
    <div className="bg-[url('/bggif.gif')] flex flex-col items-center p-4 bg-gray-700">
      <Topbar></Topbar>
      <div className="flex justify-end items-center w-full mb-4"></div>
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
          <span className="text-white text-xs">Epic </span>
          <span className="text-white text-xs">
            Level <br />
            6/10
          </span>
        </div>
        <Progress
          progress={60}
          color="teal"
          size="xl"
          className="rounded-full bg-teal-100 shadow-lg animate-pulse"
          labelPosition="inside"
          style={{
            width: "100%",
            background:
              "linear-gradient(120deg, #ADFAA1 0%, #C597CC 45%, #2F39A3 100%)",
          }}
        />
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

          <span className="text-white">Check In</span>
        </div>
        <div className=" flex-col items-center hidden">
          <img src="icons/airdrop.svg" alt="" />
          <span className="text-white">Air drop</span>
        </div>
        <NavLink to="/spin">
          <div className="flex flex-col items-center">
            <img className="rounded-full w-8" src="/icons/spin.svg" alt="" />
            <span className="text-white ">Spin</span>
          </div>
        </NavLink>
      </div>
      <div className="flex justify-center">
        <img
          src="/banner.png"
          alt="A cute robot with glowing eyes"
          className="h-[360px]"
        />
      </div>
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
      <div className="my-2 ">
        <Drawer
          className="bg-[url('/Premium/bg.gif')]"
          open={isOpen}
          onClose={handleClose}
          position="bottom"
        >
          <Drawer.Header />
          <Drawer.Items>
            <div></div>
            <div className="flex gap-2 items-center text-lg font-black mx-auto rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white w-1/2 justify-center">
              <img src="/Premium/Avatar Stack.svg" alt="" />
              <h1 className="text-white ">890,357 Joined</h1>
            </div>
            <div>
              <h1 className="text-4xl text-[#FBE67B] mb-4 font-bold text-center shadow-2xl">
                Get access to BeamLol Premium
              </h1>
            </div>
            <div className="p-2 rounded-lg bg-gray-500 border border-[rgba(255,255,255,0.53)] shadow-inner grid gap-2">
              <div className="flex items-center gap-4">
                <img src="/Premium/achievement.png" alt="" />
                <p className="text-base text-white font-medium">
                  To achieve permanent eligibility for the Grand Giveaway, an
                  exclusive series of events for BeamLol premium holders
                  featuring substantial USDT and luxury item prizes.
                </p>
                <hr />
              </div>
              <div className="flex items-center gap-4">
                <img src="/Premium/priority.png" alt="" />
                <p className="text-base text-white font-medium">
                  Ensure that your transaction is prioritized in the airdrop
                  claim queue.
                </p>
                <hr />
              </div>
              <div className="flex items-center gap-4">
                <img src="/Premium/bonus.png" alt="" />
                <p className="text-base text-white font-medium">
                  Receive a one-time bonus of 100,000,000 coins along with 1,000
                  spins.
                </p>
                <hr />
              </div>
              <div className="flex items-center gap-4">
                <img src="/Premium/specific.svg" alt="" />
                <p className="text-base text-white font-medium">
                  Enhance your profile presentation with a distinctive design
                  specifically crafted for premium users.
                </p>
                <hr />
              </div>
            </div>
            <div className="mx-auto flex justify-center gap-2">
              <button className="text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
                500
              </button>
              <button className="text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
                500
              </button>
              <button className="text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
                500
              </button>
            </div>
          </Drawer.Items>
          <Footer></Footer>
        </Drawer>
      </div>
      <div className="text-center">
        <div className=" py-1 rounded-t-xl shadow-2xl grid grid-cols-5 justify-center items-center ">
          <div onClick={() => setIsOpen(true)}>
            <img
              className="w-1/2 rounded-md mx-auto"
              src="/icons/Premium.png"
              alt=""
            />
            <p className="text-white text-xs text-center font-bold">Premium</p>
          </div>
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
          <NavLink to="/earn">
            <div>
              <img
                className="w-1/2 rounded-md mx-auto"
                src="/icons/earn.svg"
                alt=""
              />
              <p className="text-white text-xs text-center font-bold">Earn</p>
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

export default Home;
