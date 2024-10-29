import { useState } from "react";
import Footer from "../../components/footer/Footer";
import LeftBar from "../../components/leftbar/LeftBar";
import RightBar from "../../components/Rightbar/RightBar";
import Topbar from "../../components/topbar/Topbar";

const Home = () => {
  const [balance, setBalance] = useState(0);
  const [clickPosition, setClickPosition] = useState(null);

  const handleClick = (event) => {
    setBalance(balance + 1);

    // Get the position of the click relative to the image
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Set the position for the "1" element
    setClickPosition({ x, y });

    // Remove the "1" element after the animation
    setTimeout(() => setClickPosition(null), 1000);
  };

  return (
    <div className="text-center bg-opacity-10 bg-[url('https://i.ibb.co.com/b7csHpT/jack-b-zgr-QNSgp38c-unsplash.jpg')]">
      <Topbar balance={balance} />
      <div className="flex justify-center">
        <div>
          <LeftBar />
        </div>
        <div onClick={handleClick} className="relative">
          <img src="/banner.png" alt="Banner" className="cursor-pointer" />

          {clickPosition && (
            <div
              className="absolute text-white font-bold text-5xl fade-up"
              style={{
                left: clickPosition.x,
                top: clickPosition.y,
              }}
            >
              +1
            </div>
          )}
        </div>
        <div>
          <RightBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
