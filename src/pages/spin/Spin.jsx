import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import an arrow icon for the spike
import Footer from "../../components/footer/Footer";

const Spin = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [rotation, setRotation] = useState(0); // State to track rotation
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Define segments with different colors
  const segments = [
    { text: "1", icon: "/shop/perk.webp", color: "#FF5733" },
    { text: "5", icon: "/shop/perk.webp", color: "#FFC300" },
    { text: "10,000", icon: "/shop/perk.webp", color: "#DAF7A6" },
    { text: "20,000", icon: "/shop/perk.webp", color: "#FF33A8" },
    { text: "1,00,000", icon: "/shop/perk.webp", color: "#FF8D1A" },
    { text: "1", icon: "/shop/perk.webp", color: "#C70039" },
    { text: "5", icon: "/shop/perk.webp", color: "#900C3F" },
    { text: "10", icon: "/shop/perk.webp", color: "#581845" },
  ];

  const handleSpin = () => {
    if (spinning) return; // Prevent re-spinning while in motion
    setSpinning(true);
    setShowModal(false); // Hide modal when a new spin starts

    const spins = Math.floor(Math.random() * 10) + 5; // Random spins between 5 and 15
    const finalPosition = Math.floor(Math.random() * segments.length); // Random segment index
    const segmentAngle = 360 / segments.length;

    // Calculate total rotation to perfectly align the chosen segment's middle with the arrowhead
    const totalRotation =
      spins * 360 + segmentAngle * finalPosition + segmentAngle / 2;

    setRotation(totalRotation);

    // Set result after the spin animation
    setTimeout(() => {
      setSpinning(false);
      setResult(finalPosition);
      setShowModal(true); // Show modal after spin ends
    }, spins * 200); // Adjust duration to suit animation time
  };

  useEffect(() => {
    // Optional: Any effect to handle component updates during spinning
  }, [spinning, rotation, segments.length]);

  return (
    <div className="bg-[url('/Spin/spin.jpg')] py-10">
      <div className="py-3 mb-10 shadow-xl rounded-xl mx-6 flex justify-around gap-2 bg-gray-500 bg-opacity-50">
        <div className="flex gap-2 items-center text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
          <img className="w-6" src="/icons/booster.png" alt="" />
          <p className="text-[#555555] text-xs">236,900,600</p>
        </div>
        <div className="flex gap-2 items-center text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
          <img className="w-5 rounded-full" src="/icons/spin.svg" alt="" />
          <p className="text-[#555555] text-xs">236</p>
          <img className="w-4 rounded-full" src="/icons/plus.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center relative shadow-2xl">
        {/* Spike Icon - Upside Down */}
        <div className="absolute top-0 transform rotate-180">
          <FaArrowUp className="text-red-500" size={50} />
        </div>

        {/* Responsive Spinner */}
        <svg
          width="calc(100% - 8px)" // Full width with 4px margin on each side
          height="calc(100% - 8px)" // Maintain aspect ratio with full height
          viewBox="-200 -200 400 400" // Adjusted viewBox for increased size
          className="mt-8"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 2s ease-in-out",
          }} // Apply rotation to SVG with animation
        >
          {segments.map((segment, index) => {
            const angleStart =
              index * (360 / segments.length) * (Math.PI / 180);
            const angleEnd =
              (index + 1) * (360 / segments.length) * (Math.PI / 180);

            const x1 = Math.cos(angleStart) * 180; // Increased radius for more space
            const y1 = Math.sin(angleStart) * 180; // Increased radius for more space
            const x2 = Math.cos(angleEnd) * 180; // Increased radius for more space
            const y2 = Math.sin(angleEnd) * 180; // Increased radius for more space

            // Calculate icon position (center of the segment)
            const iconX = ((x1 + x2) / 2) * 0.75;
            const iconY = ((y1 + y2) / 2) * 0.75;

            return (
              <g key={index}>
                <path
                  d={`M0,0 L${x1},${y1} A180,180,0,0,1,${x2},${y2} Z`} // Draw arc with increased radius
                  fill={segment.color}
                  stroke="black" // Set border color
                  strokeWidth="2" // Set border width
                />
                {/* Display icon and text together using <foreignObject> for flex alignment */}
                <foreignObject
                  x={iconX - 30} // Adjust x to center the flex container
                  y={iconY - 35} // Adjust y to center the flex container
                  width="60" // Width of the container
                  height="70" // Height of the container
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <img
                      src={segment.icon}
                      alt={segment.text}
                      className="w-8 h-8"
                    />
                    <span className="text-sm text-white">{segment.text}</span>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>

        {/* Spin Button */}
        <button
          onClick={handleSpin}
          className="mt-10 bg-blue-500 text-white py-2 px-4 rounded"
          disabled={spinning}
        >
          {spinning ? "Spinning..." : "Spin"}
        </button>

        {/* Modal */}
        {showModal && result !== null && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white bg-opacity-30 rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
              <p className="text-lg">You won: {segments[result].text}</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>

    </div>
  );
};

export default Spin;
