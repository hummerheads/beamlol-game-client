import  { useState, useRef,  } from "react";


import { PiSpinnerBallFill } from "react-icons/pi";
import { Link } from "react-router-dom";


const symbols = ["🍒", "🍉", "🍊", "🍓", "🍇", "🥝"];
const winMessages = [
  "Congratulations! You hit the jackpot!",
  "Amazing! You’ve won big!",
  "Lucky day! Here’s your prize!",
  "You’re on a winning streak!",
  "Well done! That’s a win!",
  "Keep going, you’re on fire!"
];
const loseMessages = [
  "Better luck next time!",
  "Almost there, try again!",
  "Don’t give up!",
  "So close! Spin again!",
  "You can do it! Spin again!",
  "Keep trying, you’re bound to win!"
];

const Spin = () => {
  const [spinning, setSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState(["🍒", "🍒", "🍒"]);
  const [message, setMessage] = useState("");

  const reelRefs = [useRef(null), useRef(null), useRef(null)];

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    setShowModal(false);

    const newResult = [];
    reelRefs.forEach((reel,) => {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      const chosenSymbol = symbols[randomIndex];
      newResult.push(chosenSymbol);

      const reelHeight = reel.current.children[0].offsetHeight;
      const spins = 10 + Math.floor(Math.random() * 5); // Slower spins between 10 and 15
      const finalPosition = -randomIndex * reelHeight;

      // Slower transition for smoother effect
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

      // Delay modal to show reels for a moment
      setTimeout(() => {
        const isWin = newResult[0] === newResult[1] && newResult[1] === newResult[2];
        setMessage(isWin ? winMessages[Math.floor(Math.random() * winMessages.length)] : loseMessages[Math.floor(Math.random() * loseMessages.length)]);
        setShowModal(true);
      }, 1000); // 1 second delay for viewing result on reels
    }, 2500); // Spin duration adjusted for slower spin effect
  };

  return (
    <div className=" slot-machine-container font-heading-aldrich" 
    style={{ height: "calc(100vh - 132px)", overflow: "auto" }}
    >
    <div>
      <h1 className="tracking-wider font-heading-aldrich mt-36 text-yellow-400 font-bold text-3xl text-center p-4">Welcome to BeamLOL Spinning Game!</h1>
      <p className="tracking-wider font-heading-aldrich  text-yellow-400 font-bold text-xl text-center p-4">Spin To Win! </p>
    </div>
      <div className="slot-machine mt-10">
        {/* Lever Icon */}
        <PiSpinnerBallFill
          className={`lever-icon ${spinning ? "lever-pulled" : ""}`}
          onClick={handleSpin}
        />

        {/* Slot Reels */}
        <div className="reels mx-auto">
          {reelRefs.map((ref, index) => (
            <div className="slot mx-auto" key={index}>
              <div className="reel" ref={ref}>
                {Array(30)
                  .fill()
                  .map((_, i) => (
                    <div className="symbol mx-auto" key={i}>
                      {symbols[i % symbols.length]}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Spin Button */}
        <button
          className={`spin-button ${spinning ? "disabled" : ""}`}
          onClick={handleSpin}
          disabled={spinning}
        >
          {spinning ? "Spinning..." : "Spin"}
        </button>

        {/* Result Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2 className="modal-title">Result</h2>
              <p className="modal-result">
                {result[0]} {result[1]} {result[2]}
              </p>
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
      <Link to="/"><button className="mt-10 bg-amber-400 font-bold tracking-wider font-headinf-aldrich px-6 py-3 text-black rounded-full">Home</button></Link>
      
    </div>
  );
};

export default Spin;
