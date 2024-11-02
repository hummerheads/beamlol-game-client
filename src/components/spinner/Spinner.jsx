import { useState } from 'react';

const Spinner = () => {
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 3000); // Adjust to control spin duration
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-96 h-96 rounded-full border-8 border-black ${
          spinning ? 'animate-spin-slow' : ''
        }`}
        style={{
          background: 'conic-gradient(#ff0000, #ff8000, #00ff00, #0000ff, #ff00ff, #ff0000)',
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
          ★
        </div>
      </div>
      <button
        onClick={handleSpin}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Spin
      </button>
    </div>
  );
};

export default Spinner;
