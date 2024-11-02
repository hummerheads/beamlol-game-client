import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import an arrow icon for the spike

const Spin = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [rotation, setRotation] = useState(0); // State to track rotation

  // Define segments with different colors
  const segments = [
    { text: "Segment 1", icon: "🍎", color: "#FF5733" },
    { text: "Segment 2", icon: "🍌", color: "#FFC300" },
    { text: "Segment 3", icon: "🍇", color: "#DAF7A6" },
    { text: "Segment 4", icon: "🍉", color: "#FF33A8" },
    { text: "Segment 5", icon: "🍊", color: "#FF8D1A" },
    { text: "Segment 6", icon: "🍒", color: "#C70039" },
    { text: "Segment 7", icon: "🍓", color: "#900C3F" },
    { text: "Segment 8", icon: "🍍", color: "#581845" },
  ];

  const handleSpin = () => {
    setSpinning(true);
    const spins = Math.floor(Math.random() * 10) + 5; // Random spins between 5 and 15
    const finalPosition = Math.floor(Math.random() * segments.length); // Random segment index

    // Calculate total rotation
    const totalRotation = spins * 360 + (finalPosition * (360 / segments.length));

    // Immediately set rotation for visual feedback
    setRotation(totalRotation);

    // Set result after a delay to simulate spinning
    setTimeout(() => {
      setSpinning(false);
      setResult(finalPosition);
    }, spins * 2000); // Adjust duration as needed for slower spin
  };

  useEffect(() => {
    let interval;

    if (spinning) {
      interval = setInterval(() => {
        // Calculate which segment is currently active based on rotation
        const activeSegmentIndex = Math.floor(((rotation % 360) / 360) * segments.length);
        setResult(activeSegmentIndex); // Update result with active segment index
      }, 1000); // Check every second
    }

    return () => clearInterval(interval); // Clear interval on component unmount or when spinning stops
  }, [spinning, rotation]);

  return (
    <div className="flex bg-[url('/Spin/background.gif')] flex-col items-center relative">
      {/* Spike Icon - Upside Down */}
      <div className="absolute top-0 transform rotate-180">
        <FaArrowUp className="text-red-500" size={30} />
      </div>

      {/* Spinner */}
      <svg
        width="320" // Increased width
        height="320" // Increased height
        viewBox="-160 -160 320 320" // Adjusted viewBox for new dimensions
        style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 2s ease-in-out' }} // Apply rotation to SVG with longer duration
      >
        {segments.map((segment, index) => {
          const angleStart = (index * (360 / segments.length)) * (Math.PI / 180);
          const angleEnd = ((index + 1) * (360 / segments.length)) * (Math.PI / 180);

          const x1 = Math.cos(angleStart) * 120; // Start point on circle (increased radius)
          const y1 = Math.sin(angleStart) * 120; // Start point on circle (increased radius)
          const x2 = Math.cos(angleEnd) * 120;   // End point on circle (increased radius)
          const y2 = Math.sin(angleEnd) * 120;   // End point on circle (increased radius)

          return (
            <g key={index}>
              <path
                d={`M0,0 L${x1},${y1} A120,120,0,0,1,${x2},${y2} Z`} // Draw arc with increased radius
                fill={segment.color}
                stroke="white" // Set border color
                strokeWidth="2" // Set border width
              />
              {/* Text and Icon Positioning */}
              <text
                x={(x1 + x2) / 2 * 0.75} // Positioning text in the middle of the segment
                y={(y1 + y2) / 2 * 0.75} 
                fill="white"
                fontSize="14"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {segment.icon} {segment.text}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Spin Button */}
      <button onClick={handleSpin} className="mt-10 bg-blue-500 text-white py-2 px-4 rounded">
        Spin
      </button>

      {/* Result Display */}
      {result !== null && (
        <p className="mt-2">Result: {segments[result].text} ({segments[result].icon})</p>
      )}
    </div>
  );
};

export default Spin;