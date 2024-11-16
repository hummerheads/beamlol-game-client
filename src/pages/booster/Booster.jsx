import { useUser } from "../../context/UserContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booster = () => {
  const { telegram_ID, total_energy, tap_power, balance, refetchUserData } =
    useUser();
  refetchUserData(telegram_ID);

  const boosters = [
    { id: 1, tap: 2, energy: 200, price: 2000 },
    { id: 2, tap: 4, energy: 400, price: 4000 },
    { id: 3, tap: 6, energy: 600, price: 8000 },
    { id: 4, tap: 8, energy: 800, price: 16000 },
    { id: 5, tap: 10, energy: 1000, price: 32000 },
    { id: 6, tap: 12, energy: 1200, price: 64000 },
    { id: 7, tap: 14, energy: 1400, price: 128000 },
    { id: 8, tap: 16, energy: 1600, price: 256000 },
    { id: 9, tap: 18, energy: 1800, price: 512000 },
    { id: 10, tap: 20, energy: 2000, price: 1024000 },
    { id: 11, tap: 22, energy: 2200, price: 2048000 },
    { id: 12, tap: 24, energy: 2400, price: 4096000 },
    { id: 13, tap: 26, energy: 2600, price: 8192000 },
    { id: 14, tap: 28, energy: 2800, price: 16384000 },
    { id: 15, tap: 30, energy: 3000, price: 32768000 },
    { id: 16, tap: 32, energy: 3200, price: 65536000 },
    { id: 17, tap: 34, energy: 3400, price: 131072000 },
    { id: 18, tap: 36, energy: 3600, price: 262144000 },
    { id: 19, tap: 38, energy: 3800, price: 524288000 },
    { id: 20, tap: 40, energy: 4000, price: 1048576000 },
  ];

  const handlePurchase = async (boost) => {
    if (!telegram_ID) {
      toast.error("User ID is missing. Please log in again.");
      return;
    }

    if (balance < boost.price) {
      toast.error("Insufficient balance!");
      return;
    }

    try {
      const response = await fetch(
        `https://pcooogcck4k8kkksk4s80g8k.92.112.181.229.sslip.io/purchase-booster/${telegram_ID}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            energy: boost.energy,
            price: boost.price,
            tap: boost.tap,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Update the local state after the purchase
        refetchUserData(telegram_ID);

        // Show dynamic toast with updated energy and tap power
        toast.success(
          `Booster purchased successfully! You now have ${
            total_energy + boost.energy
          } total energy and ${
            tap_power + boost.tap
          } tap power. Please Relaunch the game for getting you assests updated.`
        );
      } else {
        toast.error(
          data.message || "Failed to purchase booster. Please try again."
        );
      }
    } catch (error) {
      console.error("Error during purchase:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      className="bg-[url('/booster/bg.png')] items-center px-2 pt-5"
      style={{ height: "calc(100vh - 132px)", overflow: "auto" }}
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
      />
      <h1 className="text-3xl text-center text-white mb-5">Boosters</h1>
      <div className="grid grid-cols-1 gap-4">
        {boosters.map((boost) => (
          <div
            key={boost.id}
            className={balance >= boost.price ? "" : "hidden"}
          >
            <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg shadow-lg flex flex-col items-center ">
              <h2 className="text-xl text-center text-white mb-2">
                Earn Per Tap: +{boost.tap}
              </h2>
              <div className="flex items-center gap-2">
                <img
                  className="w-8"
                  src="/icons/energy.svg"
                  alt="Energy Icon"
                />
                <h3 className="text-xl text-white">{boost.energy}</h3>
              </div>
              <button onClick={() => handlePurchase(boost)}>
                <div className="flex items-center gap-1 mt-2 bg-white w-full justify-center py-1 rounded-lg ">
                  <img
                    className="w-8"
                    src="/icons/booster.png"
                    alt="Price Icon"
                  />
                  <h3 className="text-xl text-gray-800">
                    {boost.price.toLocaleString()}
                  </h3>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booster;
