import { Button, Clipboard, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const modalData = [
  {
    id: 1,
    title: "Send Pi",
    price_PI: 5,
    price_STAR: 30,
    price_TON: 0.5,
    description:
      "Copy the Wallet Address and send 5 Pi. Submit your Transaction hash ID below.",
    walletAddress: "GAJS3BIZH7IB55IRFMPR45KTLJQIEDDQRZSHBODD6ARGWXNH6MS2EXWN",
    spins: 500,
  },
  {
    id: 2,
    title: "Send Pi",
    price_PI: 10,
    price_STAR: 3,
    price_TON: 1,
    description:
      "Copy the Wallet Address and send 10 Pi. Submit your Transaction hash ID below.",
    walletAddress: "GAJS3BIZH7IB55IRFMPR45KTLJQIEDDQRZSHBODD6ARGWXNH6MS2EXWN",
    spins: 1500,
  },
  {
    id: 3,
    title: "Send Pi",
    price_PI: 30,
    price_STAR: 3,
    price_TON: 3,
    description:
      "Copy the Wallet Address and send 30 Pi. Submit your Transaction hash ID below.",
    walletAddress: "GAJS3BIZH7IB55IRFMPR45KTLJQIEDDQRZSHBODD6ARGWXNH6MS2EXWN",
    spins: 6000,
  },
  {
    id: 4,
    title: "Send Pi",
    price_PI: 50,
    price_STAR: 30,
    price_TON: 5,
    price: 45,
    description:
      "Copy the Wallet Address and send 50 Pi. Submit your Transaction hash ID below.",
    walletAddress: "GAJS3BIZH7IB55IRFMPR45KTLJQIEDDQRZSHBODD6ARGWXNH6MS2EXWN",
    spins: 15000,
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

  const handleSubmit = () => {
    if (hash.trim() === "") {
      toast.error("Please enter a valid transaction hash!", {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    toast.success("🦄 Transaction Hash submitted successfully! Please wait for 24 hours to get manual confirmation by our Team. Once your payment is confirmed, your assets will automatically be added into your account.", {
      position: "top-center",
      autoClose: 5000,
      theme: "light",
      transition: Bounce,
    });
    onCloseModal();
    document.getElementById("my_modal_1").close();
  };

  return (
    <div
      className="bg-[url('/shop/bg.webp')] bg-cover font-heading-aldrich px-4 pt-10"
      style={{ height: "calc(100vh - 132px)", overflow: "auto" }}
    >
      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
      {/* Top Card (Keep as it is) */}
      <div className="mx-4 mt-10 mb-10">
        <div className="p-2 rounded-t-xl shadow-lg flex items-center justify-evenly border border-[rgba(255,255,255,0.53)] bg-gradient-to-r from-[rgba(18,18,20,0.25)] via-[rgba(93,96,100,0.25)_71%] to-[rgba(149,153,160,0.25)]">
          <div>
            <img className="rounded-full w-16" src="/icons/spin.png" alt="" />
            <h1 className="text-white text-center text-2xl font-bold">10k</h1>
          </div>
          <div>
            <img src="/shop/add.svg" alt="" />
          </div>
          <div>
            <img className="w-12" src="/shop/bosta.svg" alt="" />
            <h1 className="text-white text-center text-2xl font-bold">10M</h1>
          </div>
          <div>
            <img src="/shop/add.svg" alt="" />
          </div>
          <div>
            <img className="mx-auto w-12" src="/Premium/premium.png" alt="" />
            <h1 className="text-white text-center text-2xl font-bold">
              Premium
            </h1>
          </div>
        </div>
        <div>
          <div className="p-1 rounded-b-xl gap-5 shadow-md flex items-center justify-center border border-[rgba(255,255,255,0.53)] bg-gradient-to-b from-[rgba(204,232,254,0.4)] via-[rgba(205,160,255,0.4)] to-[rgba(181,145,233,0.4)]">
            {/* Left Button - Opens Modal */}
            <div
              className="flex items-center gap-2 px-2 rounded-lg shadow-xl bg-gray-400 py-1  cursor-pointer"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <img className="w-5 h-5" src="/shop/pi.svg" alt="Pi" />
              <p className="text-black text-xs">50</p>
            </div>
            {/* Middle and Right Buttons - Keep as is */}
            <div className="hidden flex items-center gap-1 rounded-lg shadow-xl bg-gray-400 py-1 px-1">
              <img className="w-5 h-5" src="/shop/star.svg" alt="Star" />
              <p className="text-black text-xs"></p>
            </div>
            <div className="flex  gap-2 px-2 items-center gap-1 rounded-lg shadow-xl bg-gray-400 py-1 px-1">
              <img className="w-5 h-5" src="/shop/ton.svg" alt="Ton" />
              <p className="text-black text-xs">5</p>
            </div>
          </div>
        </div>
      </div>

      <dialog
        id="my_modal_1"
        className="modal backdrop:bg-black/50 rounded-lg shadow-2xl p-4 w-full"
      >
        <div className="modal-box bg-white rounded-lg p-6 shadow-lg border border-gray-300">
          {/* Modal Header */}
          <div className="relative">
            <input
              id="wallet-address"
              type="text"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-4 text-sm text-gray-500"
              value="GAJS3BIZH7IB55IRFMPR45KTLJQIEDDQRZSHBODD6ARGWXNH6MS2EXWN"
              disabled
              readOnly
            />
            <Clipboard.WithIconText valueToCopy="GAJS3BIZH7IB55IRFMPR45KTLJQIEDDQRZSHBODD6ARGWXNH6MS2EXWN" />
          </div>
          <h3 className="font-bold text-md text-justify text-gray-800 my-4">
            Copy the above Wallet Address and send 50 Pi. Submit your
            Transaction hash ID below.
          </h3>
          <TextInput
            id="hash"
            placeholder="Enter Your Transaction Hash ID"
            value={hash}
            onChange={(event) => setHash(event.target.value)}
            required
          />
          <div className="w-full mx-auto my-2">
            <Button className="mx-auto">Submit</Button>
          </div>

          {/* Modal Action (Close Button) */}
          <div className="modal-action mt-6 mx-auto">
            <button
              className="btn bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg px-4 py-2"
              onClick={() => document.getElementById("my_modal_1").close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>

      {/* Cards with Dynamic Modal for Left Button */}
      <div className="py-2 grid grid-cols-2 gap-5 mb-5 px-4">
        {modalData.map((item) => (
          <div key={item.id} className="pb-4">
            <div className="p-2 rounded-t-xl border border-[rgba(255,255,255,0.53)] shadow-lg bg-gradient-to-r from-[rgba(18,18,20,0.25)] via-[rgba(148,153,159,0.25)_27%] to-[rgba(149,153,160,0.25)]">
              <img
                className="mx-auto w-16 rounded-full"
                src="/icons/spin.png"
                alt="/"
              />
              <p className="text-center text-white">{item.spins} </p>
            </div>
            <div className="p-1 rounded-b-xl gap-2 shadow-md flex items-center justify-center border border-[rgba(255,255,255,0.53)] bg-gradient-to-b from-[rgba(204,232,254,0.4)] via-[rgba(205,160,255,0.4)] to-[rgba(181,145,233,0.4)]">
              {/* Left Button - Opens Modal */}
              <div
                className="flex items-center gap-2 px-2 rounded-lg shadow-xl bg-gray-400 py-1  cursor-pointer"
                onClick={() => handleLeftButtonClick(item)}
              >
                <img className="w-5 h-5" src="/shop/pi.svg" alt="Pi" />
                <p className="text-black text-xs">{item.price_PI}</p>
              </div>
              {/* Middle and Right Buttons - Keep as is */}
              <div className=" hidden flex items-center gap-1 rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/star.svg" alt="Star" />
                <p className="text-black text-xs">{item.price_STAR}</p>
              </div>
              <div className="flex items-center gap-2 px-2 rounded-lg shadow-xl bg-gray-400 py-1 ">
                <img className="w-5 h-5" src="/shop/ton.svg" alt="Ton" />
                <p className="text-black text-xs">{item.price_TON}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      <Modal
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
        className="mt-44"
      >
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
                <Clipboard.WithIconText
                  valueToCopy={selectedItem.walletAddress}
                />
              </div>
              <div className="space-y-6 mt-10">
                <h3 className="text-md font-medium text-white">
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
                  <Button onClick={handleSubmit} className="mx-auto">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
      <div className="font-bold w-11/12 mx-auto rounded-md p-2 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
        <p className="text-[#201b1b] text-xl">NFT&apos;s </p>
      </div>
      <div className="mx-auto flex gap-5 my-5">
        <div className="1/2">
          <img className="w-full" src="/nft/nft1.png" alt="" />
          <div className=" bg-gray-800 bg-opacity-90 text-white rounded-b-xl shadow-2xl">
            <p className="text-white text-center py-2">1 NFT(Random) </p>
            <div className="flex justify-center gap-5 py-2">
              <div className="flex items-center gap-2 px-2 rounded-lg shadow-xl bg-gray-400 py-1">
                <img className="w-5 h-5" src="/shop/pi.svg" alt="Pi" />
                <p className="text-black">5</p>
              </div>
              <div className="flex bg-gray-400 p-1 rounded-lg items-center gap-2">
                <img className="w-5 h-5" src="/shop/ton.svg" alt="Pi" />
                <p className="text-black text-md">0.5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="1/2">
          <img className="w-full" src="/nft/nft2.png" alt="" />
          <div className=" bg-gray-800 bg-opacity-90 text-white rounded-b-xl shadow-2xl">
            <p className="text-white text-center py-2">7 NFT (Random)</p>
            <div className="flex justify-center gap-5 py-2">
              <div className="flex items-center gap-2 px-2 rounded-lg shadow-xl bg-gray-400 py-1">
                <img className="w-5 h-5" src="/shop/pi.svg" alt="Pi" />
                <p className="text-black">30</p>
              </div>
              <div className="flex bg-gray-400 p-1 rounded-lg items-center gap-2">
                <img className="w-5 h-5" src="/shop/ton.svg" alt="Pi" />
                <p className="text-black text-md">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
