import { 
  Facebook, 
  Youtube, 
  Twitter, 
  Instagram, 
  MessageCircle,

} from "lucide-react";
import { useEffect, useState } from "react";

const Earn = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Carousel slides with images and text overlays
  const carouselSlides = [
    { image: "/Earn/slide 1.jpg", text: "Special Offer!" },
    { image: "/Earn/slide 2.jpg", text: "Unlock Rewards!" },
    { image: "/Earn/slide 3.jpg", text: "Join the Community!" },
    { image: "/Earn/slide 4.jpg", text: "Join the Community!" },
  ];

  const features = [
    { 
      clickHandle: "https://www.facebook.com/beamlolclub", 
      icon: <Facebook className="w-6 h-6" />, 
      title: "Like Beamlol Official Facebook", 
      primaryValue: "+2,00,000", 
      secondaryValue: "+6" 
    },
    { 
      clickHandle: "https://www.youtube.com/@beamlolclub", 
      icon: <Youtube className="w-6 h-6" />, 
      title: "Follow BeamLOL Official Youtube Channel", 
      primaryValue: "2,00,000", 
      secondaryValue: "+6" 
    },
    { 
      clickHandle: "https://x.com/beamlolclub", 
      icon: <Twitter className="w-6 h-6" />, 
      title: "Follow Beamlol Official X", 
      primaryValue: "2,00,000", 
      secondaryValue: "+6" 
    },
    { 
      clickHandle: "https://www.instagram.com/beamlolclub", 
      icon: <Instagram className="w-6 h-6" />, 
      title: "Follow Beamlol Official Instagram", 
      primaryValue: "2,00,000", 
      secondaryValue: "+6" 
    },
    { 
      clickHandle: "https://t.me/beamlolclub_chat", 
      icon: <MessageCircle className="w-6 h-6" />, 
      title: "Follow Beamlol Official Telegram Channel", 
      primaryValue: "2,00,000", 
      secondaryValue: "+6" 
    },
    { 
      clickHandle: "https://t.me/beamlolclub", 
      icon: <MessageCircle className="w-6 h-6" />, 
      title: "Follow Beamlol Official Telegram Community", 
      primaryValue: "2,00,000", 
      secondaryValue: "+6" 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
    style={{ height: 'calc(100vh - 132px)', overflow: 'auto' }}

    className="bg-[url('/Earn/bg.webp')] bg-cover bg-center font-heading-aldrich">
      <div className="mx-4 py-4">
        {/* Carousel */}
        <div className="relative h-72 my-5 rounded-lg overflow-hidden shadow-lg">
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                className="w-full h-full object-cover rounded-lg"
                src={slide.image}
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-center justify-center">
                <p className="text-white text-2xl font-bold">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Special Announcement */}
        <div className="w-1/3 mx-auto text-center font-semibold text-gray-800 text-lg bg-yellow-300 rounded-full py-2 my-3 shadow-md">
          <p>Special</p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.clickHandle}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <div className="flex items-center p-4 bg-gradient-to-r from-blue-500 via-blue-200 to-yellow-400 rounded-lg shadow-lg gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white text-blue-600 rounded-full shadow">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <p className="text-white text-lg font-semibold">{feature.title}</p>
                  <div className="flex gap-4 mt-1">
                    <div className="flex items-center">
                      <img className="w-7" src="/icons/balancelogo.png" alt="" />
                      <span className="text-white font-medium">{feature.primaryValue}</span>
                    </div>
                    <div className="flex items-center">
<img className="w-7" src="/icons/spin.png" alt="" />
                      <span className="text-white font-medium">{feature.secondaryValue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Earn;