import { useState } from "react";
import { Drawer, Progress } from "flowbite-react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { useUser } from "../../context/UserContext"; // Adjust the path accordingly
import Topbar from "../../components/topbar/Topbar";

const Home = () => {
  const { level, available_energy, total_energy } = useUser();

  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="bg-[url('/bggif.gif')] flex flex-col items-center p-2 bg-gray-700">
      {/* Balance Display */}
      <Topbar></Topbar>

      {/* Giveaway, Leaderboard, and Level Section */}
      <div className="flex gap-5 w-full mb-1">
        {["Giveaways", "Leaderboard", "Level"].map((label, index) => (
          <div
            key={index}
            className="w-full bg-gray-800 p-2 rounded-lg text-center"
          >
            <span
              className={`font-semibold text-xs block ${
                index === 0
                  ? "text-yellow-500"
                  : index === 1
                  ? "text-blue-500"
                  : "text-green-500"
              }`}
            >
              {label}
            </span>
            <span className="block text-white">
              {index === 1 ? "1st" : index === 2 ? `0${level}` : "🪙"}
            </span>
          </div>
        ))}
      </div>

      {/* Level Progress */}
      <NavLink to="/level">
        <div className="w-full mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-white text-xs">Epic</span>
            <span className="text-white text-xs">
              Level <br /> {level}/10
            </span>
          </div>
          <Progress
            progress={level * 10}
            color="teal"
            size="xl"
            className="rounded-full bg-teal-100 shadow-lg animate-pulse"
            style={{
              width: "100%",
              background:
                "linear-gradient(120deg, #ADFAA1 0%, #C597CC 45%, #2F39A3 100%)",
            }}
          />
        </div>
      </NavLink>

      {/* Feature Icons */}
      <div className="flex justify-evenly w-full mb-4">
        {["Booster", "NFT", "Check In", "Air Drop", "Spin"].map(
          (label, index) => (
            <NavLink key={index} to={label === "Spin" ? "/spin" : "#"}>
              <div className="flex flex-col items-center">
                <img
                  className="w-8"
                  src={`/icons/${label.toLowerCase().replace(" ", "")}.png`}
                  alt={label}
                />
                <span className="text-white">{label}</span>
              </div>
            </NavLink>
          )
        )}
      </div>

      {/* Banner */}
      <div className="flex justify-center">
        <img
          src="/banner.png"
          alt="A cute robot with glowing eyes"
          className="h-[360px]"
        />
      </div>

      {/* Premium Drawer */}
      <Drawer open={isOpen} onClose={handleClose} position="bottom">
        <Drawer.Header />
        <Drawer.Items>
          <h1 className="text-4xl text-[#FBE67B] mb-4 font-bold text-center shadow-2xl">
            Get access to BeamLol Premium
          </h1>
          {/* Benefits */}
          <div className="p-2 rounded-lg bg-gray-500 border border-[rgba(255,255,255,0.53)] shadow-inner grid gap-2">
            {[
              {
                img: "achievement.png",
                text: "Permanent eligibility for Grand Giveaway events with USDT and luxury item prizes.",
              },
              {
                img: "priority.png",
                text: "Transaction prioritization in the airdrop claim queue.",
              },
              {
                img: "bonus.png",
                text: "Receive a one-time bonus of 100,000,000 coins and 1,000 spins.",
              },
              {
                img: "specific.svg",
                text: "Exclusive profile design for premium users.",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <img src={`/Premium/${benefit.img}`} alt="" />
                <p className="text-base text-white font-medium">
                  {benefit.text}
                </p>
                <hr />
              </div>
            ))}
          </div>
        </Drawer.Items>
      </Drawer>

      <div className="bg-[#ff9c17] my-2 items-center justify-center w-1/3 gap-2 rounded-full flex">
        <img
          className="w-10 h-10 rounded-full"
          src="/icons/energy.svg"
          alt=""
        />
        <div>
          <p className="font-bold text-xs text-white">{available_energy}</p>

          <p className="text-[#ffe386] text-xs">/{total_energy}</p>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
