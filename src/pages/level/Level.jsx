import { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useQueryClient } from "@tanstack/react-query";

const Level = () => {
  const { level, perk, total_energy, telegram_ID, } = useUser();
  const queryClient = useQueryClient();


  const levels = [
    {
      id: 1,
      title: 1,
      details: 5000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 565,
    },
    {
      id: 2,
      title: 2,
      details: 7000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 565,
    },
    {
      id: 3,
      title: 3,
      details: 7000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 565,
    },
    {
      id: 4,
      title: 4,
      details: 7000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 565,
    },
    {
      id: 5,
      title: 5,
      details: 7000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 565,
    },
    {
      id: 6,
      title: 6,
      details: 10000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 565,
    },
    {
      id: 7,
      title: 7,
      details: 20000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 565,
    },
    {
      id: 8,
      title: 8,
      details: 30000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 565,
    },
    {
      id: 9,
      title: 9,
      details: 50000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 565,
    },
    {
      id: 10,
      title: 10,
      details: 70000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 565,
    },
    // Add more levels as needed
  ];
  const [expandedIds, setExpandedIds] = useState([]);
  const [totalEnergy, setTotalEnergy] = useState(total_energy);
  const [userPerk, setPerk] = useState(perk);
  const [userLevel, setLevel] = useState(level);

  const handleClickToggle = (id) => {
    setExpandedIds((prevIds) => prevIds.includes(id) ? prevIds.filter((prevId) => prevId !== id) : [...prevIds, id]);
  };

  const handleBuyNow = async (levelId) => {
    const selectedLevel = levels.find((l) => l.id === levelId);
    try {
      const response = await fetch(`https://beamlol-server.onrender.com/allusers/update/${telegram_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ level: levelId, perk: userPerk - selectedLevel.perks_needed, total_energy: totalEnergy + selectedLevel.details }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Unknown error");
      }

      const updatedUserData = await response.json();
      console.log("User data updated:", updatedUserData);

      setLevel(levelId);
      setPerk((prevPerk) => prevPerk - selectedLevel.perks_needed);
      setTotalEnergy((prevEnergy) => prevEnergy + selectedLevel.details);

      // Trigger re-fetch of user data
      queryClient.invalidateQueries(["userDetails", telegram_ID]);
    } catch (error) {
      console.error("Failed to update user level and perks:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".toggle-container")) {
        setExpandedIds([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-[#000] h-full">
      {/* <Topbar perk={userPerk} /> */}
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
      <div
        className="mx-4 rounded-xl "
        style={{
          background:
            "linear-gradient(180deg, rgba(184, 212, 234, 0.30) 0%, rgba(185, 140, 235, 0.30) 50%, rgba(112, 117, 225, 0.30) 75%, rgba(185, 221, 235, 0.30) 87.5%, rgba(161, 125, 213, 0.30) 100%)",
        }}
      >
        <div className="grid grid-cols-2 gap-3 my-2 pb-0 p-4  justify-around">
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
              <p className="text-white font-bold">{totalEnergy} </p>
              <p className="text-white">Level {userLevel} Health</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gradient-to-b from-yellow-800 to-yellow-200 shadow-inner">
          <p className="text-[#4E341B] font-black text-xl py-4 text-center">
            Continue Playing
          </p>
        </div>
      </div>
      <div
        className="mx-4 rounded-xl "
        style={{
          background:
            "linear-gradient(180deg, rgba(184, 212, 234, 0.30) 0%, rgba(185, 140, 235, 0.30) 50%, rgba(112, 117, 225, 0.30) 75%, rgba(185, 221, 235, 0.30) 87.5%, rgba(161, 125, 213, 0.30) 100%)",
        }}
      >
        {/* Additional content here */}
      </div>
      {levels
        .filter((luvul) => luvul.title > level)
        .map((luvul) => (
          <div
            key={luvul.id}
            className="relative my-4 rounded-xl toggle-container"
          >
            <div className="flex justify-between items-center p-4 border-2 border-blue-100 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 bg-opacity-25">
              <div className="flex gap-3">
                <img className="w-6 h-6" src={luvul.crownImg} alt="" />
                <p className="text-white text-base font-semibold">
                  Level {luvul.title}
                </p>
              </div>
              <button
                onClick={() => handleClickToggle(luvul.id)}
                className="flex items-center"
              >
                <img
                  src={
                    expandedIds.includes(luvul.id)
                      ? "/level/minus.svg"
                      : "/level/plus.svg"
                  }
                  alt="Toggle"
                  className="w-6 h-6"
                />
              </button>
            </div>
            {expandedIds.includes(luvul.id) && (
              <div className="p-4 my-4 border-2 border-blue-100 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 bg-opacity-25 items-center">
                <div className="flex justify-center gap-2">
                  <img
                    className="rounded-full w-8 h-8"
                    src="/level/energy.svg"
                    alt=""
                  />
                  <p className="text-white font-bold text-center mb-3">
                    {luvul.details}
                  </p>
                </div>
                <div className="flex ">
                  <button
                    onClick={() => handleBuyNow(luvul.id)}
                    disabled={luvul.perks_needed > perk}
                    className="text-white flex gap-2 p-2 mx-auto font-semibold rounded-lg"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(204, 232, 254, 0.20) 0%, rgba(205, 160, 255, 0.20) 50%, rgba(132, 137, 245, 0.20) 75%, rgba(205, 241, 255, 0.20) 87.5%, rgba(181, 145, 233, 0.20) 100%)",
                    }}
                  >
                    BUY NOW
                    <div className="flex items-center">
                      <img className="w-4 h-4" src="/level/perk.webp" alt="" />
                      <p>{luvul.perks_needed}</p>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

// Add PropTypes for each component if needed...

export default Level;
