import { useState, useEffect, useRef } from "react";
import { PiSpinnerBallFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import diamondIcon from "/icons/balancelogo.png";
import pickaxeIcon from "/icons/perklogo.png";
import robotIcon from "/icons/spin.png";
import { useUser } from "../../context/UserContext";

const symbols = [diamondIcon, pickaxeIcon, robotIcon];
const loseMessages = [
  "Better luck next time!",
  "Almost there, try again!",
  "Don’t give up!",
  "So close! Spin again!",
  "You can do it! Spin again!",
  "Keep trying, you’re bound to win!",
];

const Spin = () => {
  const [spinning, setSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState([symbols[0], symbols[1], symbols[2]]);
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState(null);

  const reelRefs = [useRef(null), useRef(null), useRef(null)];

  const { telegram_ID } = useUser();

  // Fetch user data
  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://pcooogcck4k8kkksk4s80g8k.92.112.181.229.sslip.io/allusers/${telegram_ID}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Fetch user data on component mount and set interval for refetching
  useEffect(() => {
    fetchUserData();
    const interval = setInterval(fetchUserData, 1000); // Refetch every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [telegram_ID]);

  const handleSpin = async () => {
    if (spinning || !userData || userData.spin <= 0) return;

    setSpinning(true);
    setShowModal(false);

    const newResult = [];
    reelRefs.forEach((reel) => {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      const chosenSymbol = symbols[randomIndex];
      newResult.push(chosenSymbol);

      const reelHeight = reel.current.children[0].offsetHeight;
      const spins = 10 + Math.floor(Math.random() * 5);
      const finalPosition = -randomIndex * reelHeight;

      reel.current.style.transition = `top ${spins * 2}s cubic-bezier(0.33, 1, 0.68, 1)`;
      reel.current.style.top = `${spins * reelHeight * -symbols.length + finalPosition}px`;
    });

    setTimeout(() => {
      reelRefs.forEach((reel, index) => {
        reel.current.style.transition = "none";
        const symbolIndex = symbols.indexOf(newResult[index]);
        reel.current.style.top = `-${symbolIndex * reel.current.children[0].offsetHeight}px`;
      });
      setSpinning(false);
      setResult(newResult);

      setTimeout(async () => {
        let message;
        let updateData = { spinDecrement: 1 };

        if (newResult.every((symbol) => symbol === diamondIcon)) {
          message = "You hit the jackpot with coins! Balance increased by 100,000!";
          updateData.balanceIncrement = 25000;
        } else if (newResult.every((symbol) => symbol === pickaxeIcon)) {
          message = "You struck gold with Perks! Perk increased by 2!";
          updateData.perkIncrement = 2;
        } else if (newResult.every((symbol) => symbol === robotIcon)) {
          message = "Robots galore! Spins increased by 10!";
          updateData.spinIncrement = 9;
        } else {
          message = loseMessages[Math.floor(Math.random() * loseMessages.length)];
        }

        try {
          const response = await fetch(`https://pcooogcck4k8kkksk4s80g8k.92.112.181.229.sslip.io/allusers/${telegram_ID}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              telegram_ID: telegram_ID,
              ...updateData,
            }),
          });

          if (!response.ok) {
            throw new Error("Failed to update user data");
          }
          // Refetch user data after updating
          await fetchUserData();
        } catch (error) {
          console.error("Error updating user data:", error);
        }

        setMessage(message);
        setShowModal(true);
      }, 1000);
    }, 500);
  };

  return (
    <div className="slot-machine-container font-heading-aldrich">
      <div>
        <h1 className="tracking-wider font-heading-aldrich mt-16 text-yellow-400 font-bold text-3xl text-center p-4">
          Welcome to BeamLOL Spinning Game!
        </h1>
        <p className="tracking-wider font-heading-aldrich text-yellow-400 font-bold text-xl text-center p-4">
          Spin To Win!
        </p>
      </div>
      <div className="slot-machine mt-10">
        <PiSpinnerBallFill
          className={`lever-icon ${spinning ? "lever-pulled" : ""}`}
          onClick={handleSpin}
        />

        <div className="reels mx-auto">
          {reelRefs.map((ref, index) => (
            <div className="slot mx-auto" key={index}>
              <div className="reel" ref={ref}>
                {Array(30)
                  .fill()
                  .map((_, i) => (
                    <div className="symbol mx-auto" key={i}>
                      <img
                        src={symbols[i % symbols.length]}
                        alt={`symbol-${i}`}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className={`spin-button ${spinning ? "disabled" : ""}`}
          onClick={handleSpin}
          disabled={spinning || !userData || userData.spin <= 0}
        >
          {spinning ? "Spinning..." : "Spin"}
        </button>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2 className="modal-title">Result</h2>
              <div className="modal-result flex justify-around mb-10">
                <img src={result[0]} className="h-16 w-16" alt="result-1" />
                <img src={result[1]} className="h-16 w-16" alt="result-2" />
                <img src={result[2]} className="h-16 w-16perk" alt="result-3" />
              </div>
              <p className="modal-message">{message}</p>
              <button
                className="modal-close-button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Link to="/">
        <button className="mt-10 bg-amber-400 font-bold tracking-wider font-headinf-aldrich px-6 py-3 text-black rounded-full">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Spin;
