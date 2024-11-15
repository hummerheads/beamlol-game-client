import { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const Level = () => {
  const { level, perk, total_energy, telegram_ID } = useUser();
  const queryClient = useQueryClient();

  const levels = [
    {
      id: 1,
      title: 1,
      details: 10000,
      crownImg: "/level/crown.svg",
      perks_needed: 200,
    },
    {
      id: 2,
      title: 2,
      details: 50000,
      crownImg: "/level/crown.svg",
      perks_needed: 400,
    },
    {
      id: 3,
      title: 3,
      details: 500000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 800,
    },
    {
      id: 4,
      title: 4,
      details: 2000000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 1600,
    },
    {
      id: 5,
      title: 5,
      details: 10000000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 5000,
    },
    {
      id: 6,
      title: 6,
      details: 25000000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 10000,
    },
    {
      id: 7,
      title: 7,
      details: 50000000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 20000,
    },
    {
      id: 8,
      title: 8,
      details: 100000000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 40000,
    },
    {
      id: 9,
      title: 9,
      details: 200000000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 80000,
    },
    {
      id: 10,
      title: 10,
      details: 5000000000,
      perkImg: "/level/energy.svg",
      crownImg: "/level/crown.svg",
      perks_needed: 160000,
    },
    // Add more levels as needed
  ];
  const [expandedIds, setExpandedIds] = useState([]);
  const [totalEnergy, setTotalEnergy] = useState(total_energy);
  const [userPerk, setPerk] = useState(perk);
  const [userLevel, setLevel] = useState(level);

  const handleClickToggle = (id) => {
    setExpandedIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((prevId) => prevId !== id)
        : [...prevIds, id]
    );
  };

  const handleBuyNow = async (levelId) => {
    const selectedLevel = levels.find((l) => l.id === levelId);
    try {
      const response = await fetch(
        `https://beamlol-server.onrender.com/allusers/update/${telegram_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            level: levelId,
            perk: userPerk - selectedLevel.perks_needed,
            total_energy: totalEnergy + selectedLevel.details,
          }),
        }
      );

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
    <div
      className="bg-[#000]"
      style={{ height: "calc(100vh - 132px)", overflow: "auto" }}
    >
      <div
        className="flex justify-center items-center gap-2 mx-16 py-5 mt-2 rounded-xl"
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
        <div
          className="flex rounded-lg items-center gap-2 p-2 justify-center my-2"
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
            <p className="text-white text-2xl">Coin prize</p>
          </div>
        </div>
        <NavLink to="/">
          <div className="rounded-lg border border-gray-200 bg-gradient-to-b from-yellow-800 to-yellow-200 shadow-inner">
            <p className="text-[#4E341B] font-black text-xl py-4 text-center">
              Continue Playing
            </p>
          </div>
        </NavLink>
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
                    src="/level/balance.gif"
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
