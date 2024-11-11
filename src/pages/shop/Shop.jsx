import { Button, Clipboard, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

const modalData = [
  {
    id: 1,
    title: "Send Pi",
    price_PI: 20,
    price_STAR: 30,
    price_TON: 2,
    description: "Copy the Wallet Address and send 20 Pi. Submit your Transaction hash ID below.",
    walletAddress: "GAJS3BIZH7IB55IRFMPR45KTLJQIEDDQRZSHBODD6ARGWXNH6MS2EXWN",
    spins: 500
  },
  {
    id: 2,
    title: "Send Pi",
    price_PI: 1,
    price_STAR: 3,
    price_TON: 20,    description: "Copy the Wallet Address and send 1 Pi. Submit your Transaction hash ID below.",
    walletAddress: "YUJC8BFG6JK55IRFMPR45KTLPERDQRZNH6MSEWXNH6MS2EXWN",
    spins: 500

  },
  {
    id: 3,
    title: "Send Pi",
    price_PI: 1,
    price_STAR: 3,
    price_TON: 20,
    description: "Copy the Wallet Address and send 8.5 Pi. Submit your Transaction hash ID below.",
    walletAddress: "YUJC8BFG6JK55IRFMPR45KTLPERDQRZNH6MSEWXNH6MS2EXWN",
    spins: 500

  },
  {
    id: 4,
    title: "Send Pi",
    price_PI: 20,
    price_STAR: 30,
    price_TON: 2,
    price: 45,
    description: "Copy the Wallet Address and send 45 Pi. Submit your Transaction hash ID below.",
    walletAddress: "XGDS3BIZH7IB55IRFMPR45KTLJQIEDDQRZSHBODD6ARGWXNH6MS2EXWN",
    spins: 500

  },
];

const Shop = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [hash, setHash] = useState("");

  const handleLeftButtonClick = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
    setHash("");
    setSelectedItem(null);
  };

  return (
    <div className="bg-[url('/shop/bg.png')] px-4 pt-10" style={{ height: "calc(100vh - 124px)", overflow: "auto" }}>
      {/* Top Card (Keep as it is) */}
      <div className="mx-4">
        <div className="p-2 rounded-t-xl shadow-lg flex items-center justify-evenly border border-[rgba(255,255,255,0.53)] bg-gradient-to-r from-[rgba(18,18,20,0.25)] via-[rgba(93,96,100,0.25)_71%] to-[rgba(149,153,160,0.25)]">
          <div>
            <img className="rounded-full w-10" src="/icons/spin.svg" alt="" />
            <h1 className="text-white text-center text-2xl font-bold">10k</h1>
          </div>
          <div>
            <img src="/shop/add.svg" alt="" />
          </div>
          <div>
            <img className="w-12" src="/shop/bosta.svg" alt="" />
            <h1 className="text-white text-center text-2xl font-bold">1M</h1>
          </div>
          <div>
            <img src="/shop/add.svg" alt="" />
          </div>
          <div>
            <img className="mx-auto w-12" src="/Premium/premium.png" alt="" />
            <h1 className="text-white text-center text-2xl font-bold">Premium</h1>
          </div>
        </div>
      </div>

      {/* Cards with Dynamic Modal for Left Button */}
      <div className="py-2 grid grid-cols-2 gap-2 px-4">
        {modalData.map((item) => (
          <div key={item.id} className="pb-4">
            <div className="p-2 rounded-t-xl border border-[rgba(255,255,255,0.53)] shadow-lg bg-gradient-to-r from-[rgba(18,18,20,0.25)] via-[rgba(148,153,159,0.25)_27%] to-[rgba(149,153,160,0.25)]">
              <img className="mx-auto rounded-full" src="/icons/spin.svg" alt="/" />
              <p className="text-center text-white">{item.spins} </p>
            </div>
            <div className="p-1 rounded-b-xl gap-1 shadow-md flex items-center justify-center border border-[rgba(255,255,255,0.53)] bg-gradient-to-b from-[rgba(204,232,254,0.4)] via-[rgba(205,160,255,0.4)] to-[rgba(181,145,233,0.4)]">
              {/* Left Button - Opens Modal */}
              <div
                className="flex items-center gap-1 rounded-lg shadow-xl bg-gray-400 py-1 px-1 cursor-pointer"
                onClick={() => handleLeftButtonClick(item)}
              >
                <img className="w-5 h-5" src="/shop/pi.svg" alt="Pi" />
                <p className="text-black text-xs">{item.price_PI}</p>
              </div>
              {/* Middle and Right Buttons - Keep as is */}
              <div className="flex items-center gap-1 rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/star.svg" alt="Star" />
                <p className="text-black text-xs">{item.price_STAR}</p>
              </div>
              <div className="flex items-center gap-1 rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/ton.svg" alt="Ton" />
                <p className="text-black text-xs">{item.price_TON}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      <Modal show={openModal} size="md" onClose={onCloseModal} popup className="mt-44">
        <Modal.Header />
        <Modal.Body>
          {selectedItem && (
            <div className="grid w-full">
              <div className="relative">
                <input
                  id="wallet-address"
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-4 text-sm text-gray-500"
                  value={selectedItem.walletAddress}
                  disabled
                  readOnly
                />
                <Clipboard.WithIconText valueToCopy={selectedItem.walletAddress} />
              </div>
              <div className="space-y-6 mt-10">
                <h3 className="text-md font-medium text-gray-900">
                  {selectedItem.description}
                </h3>
                <div>
                  <TextInput
                    id="hash"
                    placeholder="Enter Transaction Hash ID"
                    value={hash}
                    onChange={(event) => setHash(event.target.value)}
                    required
                  />
                </div>
                <div className="w-full mx-auto">
                  <Button className="mx-auto">Submit</Button>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Shop;
