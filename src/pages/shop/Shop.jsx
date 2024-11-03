import Footer from "../../components/footer/Footer";
import Topbar from "../../components/topbar/Topbar";

const Shop = () => {
  return (
    <div className="bg-[url('/shop/bg.png')]">
      <Topbar></Topbar>

      <div className="py-4">
        <div className="p-2  rounded-t-xl shadow-[0px_4px_6px_rgba(255,255,255,0.6)] flex items-center justify-evenly border border-[rgba(255,255,255,0.53)] bg-gradient-to-r from-[rgba(18,18,20,0.25)] via-[rgba(93,96,100,0.25)_71%] to-[rgba(149,153,160,0.25)]">
          <div>
            <img className="w-10" src="/icons/spin.svg" alt="" />
            <h1 className="text-white text-center text-2xl font-bold">10k</h1>
          </div>
          <div>
            <img src="/shop/add.svg" alt="" />
          </div>
          <div>
            <img src="/shop/bosta.png" alt="" />
            <h1 className="text-white text-center text-2xl font-bold">1M</h1>
          </div>
          <div>
            <img src="/shop/add.svg" alt="" />
          </div>
          <div>
            <img className="mx-auto" src="/shop/star.svg" alt="" />
            <h1 className="text-white text-center text-2xl font-bold">
              Premium
            </h1>
          </div>
        </div>

        <div className=" p-2 rounded-b-xl gap-2 shadow-[0px_4px_6px_rgba(255,255,255,0.6)] flex items-center justify-center border border-[rgba(255,255,255,0.53)] bg-gradient-to-b from-[rgba(204,232,254,0.4)] via-[rgba(205,160,255,0.4)] to-[rgba(181,145,233,0.4)]">
          <div className="flex rounded-lg shadow-xl bg-gray-400 py-2 px-3">
            <img className="w-6" src="/shop/pi.jpg" alt="" />
            <p className="text-black">20</p>
          </div>
          <div className="flex rounded-lg shadow-xl bg-gray-400 py-2 px-3">
            <img className="w-6" src="/shop/perk.webp" alt="" />
            <p className="text-black">1199</p>
          </div>
          <div className="flex rounded-lg shadow-xl bg-gray-400 py-2 px-3">
            <img className="w-6" src="/shop/ton-token.png" alt="" />
            <p className="text-black">4</p>
          </div>
        </div>
      </div>
      <div className="py-4 grid grid-cols-2 gap-2 px-4">
        <div className="pb-4">
          <div className="p-2 rounded-t-xl border border-[rgba(255,255,255,0.53)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-[rgba(18,18,20,0.25)] via-[rgba(148,153,159,0.25)_27%] via-[rgba(33,33,36,0.25)_40%] via-[rgba(93,96,100,0.25)_71%] to-[rgba(149,153,160,0.25)]">
            <img className="mx-auto" src="/icons/spin.svg" alt="/" />
            <p className="text-center text-white">50</p>
          </div>
          <div>
            <div className=" p-1 rounded-b-xl gap-1 shadow-[0px_4px_6px_rgba(255,255,255,0.6)] flex items-center justify-center border border-[rgba(255,255,255,0.53)] bg-gradient-to-b from-[rgba(204,232,254,0.4)] via-[rgba(205,160,255,0.4)] to-[rgba(181,145,233,0.4)]">
              <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/pi.jpg" alt="" />
                <p className="text-black text-xs">1</p>
              </div>
              <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/perk.webp" alt="" />
                <p className="text-black  text-xs">50</p>
              </div>
              <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/ton-token.png" alt="" />
                <p className="text-black  text-xs">0.15</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <div className="p-2 rounded-t-xl border border-[rgba(255,255,255,0.53)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-[rgba(18,18,20,0.25)] via-[rgba(148,153,159,0.25)_27%] via-[rgba(33,33,36,0.25)_40%] via-[rgba(93,96,100,0.25)_71%] to-[rgba(149,153,160,0.25)]">
            <img className="mx-auto" src="/icons/spin.svg" alt="/" />
            <p className="text-center text-white">100</p>
          </div>
          <div>
            <div className=" p-1 rounded-b-xl gap-1 shadow-[0px_4px_6px_rgba(255,255,255,0.6)] flex items-center justify-center border border-[rgba(255,255,255,0.53)] bg-gradient-to-b from-[rgba(204,232,254,0.4)] via-[rgba(205,160,255,0.4)] to-[rgba(181,145,233,0.4)]">
              <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/pi.jpg" alt="" />
                <p className="text-black text-xs">1.8</p>
              </div>
              <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/perk.webp" alt="" />
                <p className="text-black  text-xs">95</p>
              </div>
              <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/ton-token.png" alt="" />
                <p className="text-black  text-xs">0.28</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <div className="p-2 rounded-t-xl border border-[rgba(255,255,255,0.53)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-[rgba(18,18,20,0.25)] via-[rgba(148,153,159,0.25)_27%] via-[rgba(33,33,36,0.25)_40%] via-[rgba(93,96,100,0.25)_71%] to-[rgba(149,153,160,0.25)]">
            <img className="mx-auto" src="/icons/spin.svg" alt="/" />
            <p className="text-center text-white">500</p>
          </div>
          <div>
            <div className=" p-1 rounded-b-xl gap-1 shadow-[0px_4px_6px_rgba(255,255,255,0.6)] flex items-center justify-center border border-[rgba(255,255,255,0.53)] bg-gradient-to-b from-[rgba(204,232,254,0.4)] via-[rgba(205,160,255,0.4)] to-[rgba(181,145,233,0.4)]">
              <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/pi.jpg" alt="" />
                <p className="text-black text-xs">8.5</p>
              </div>
              <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/perk.webp" alt="" />
                <p className="text-black  text-xs">445</p>
              </div>
              <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/ton-token.png" alt="" />
                <p className="text-black  text-xs">1.2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <div className="p-2 rounded-t-xl border border-[rgba(255,255,255,0.53)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-[rgba(18,18,20,0.25)] via-[rgba(148,153,159,0.25)_27%] via-[rgba(33,33,36,0.25)_40%] via-[rgba(93,96,100,0.25)_71%] to-[rgba(149,153,160,0.25)]">
            <img className="mx-auto" src="/icons/spin.svg" alt="/" />
            <p className="text-center text-white">5000</p>
          </div>
          <div>
            <div className=" p-1 rounded-b-xl gap-1 shadow-[0px_4px_6px_rgba(255,255,255,0.6)] flex items-center justify-center border border-[rgba(255,255,255,0.53)] bg-gradient-to-b from-[rgba(204,232,254,0.4)] via-[rgba(205,160,255,0.4)] to-[rgba(181,145,233,0.4)]">
              <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/pi.jpg" alt="" />
                <p className="text-black text-xs">45</p>
              </div>
              <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/perk.webp" alt="" />
                <p className="text-black  text-xs">2000</p>
              </div>
              <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                <img className="w-5 h-5" src="/shop/ton-token.png" alt="" />
                <p className="text-black  text-xs">6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
          <p className="text-[#201b1b] text-xl">NFT&apos;s Coming Soon</p>
        </div>
        <div className="py-4 grid grid-cols-2 gap-2 px-4 hidden">
          <div className="pb-4">
            <div className="p-2 rounded-t-xl border border-[rgba(255,255,255,0.53)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-[rgba(18,18,20,0.25)] via-[rgba(148,153,159,0.25)_27%] via-[rgba(33,33,36,0.25)_40%] via-[rgba(93,96,100,0.25)_71%] to-[rgba(149,153,160,0.25)]">
              <img className="mx-auto" src="/icons/spin.svg" alt="/" />
              <p className="text-center text-white">50</p>
            </div>
            <div>
              <div className=" p-1 rounded-b-xl gap-1 shadow-[0px_4px_6px_rgba(255,255,255,0.6)] flex items-center justify-center border border-[rgba(255,255,255,0.53)] bg-gradient-to-b from-[rgba(204,232,254,0.4)] via-[rgba(205,160,255,0.4)] to-[rgba(181,145,233,0.4)]">
                <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                  <img className="w-5 h-5" src="/shop/pi.jpg" alt="" />
                  <p className="text-black text-xs">1</p>
                </div>
                <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                  <img className="w-5 h-5" src="/shop/perk.webp" alt="" />
                  <p className="text-black  text-xs">50</p>
                </div>
                <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                  <img className="w-5 h-5" src="/shop/ton-token.png" alt="" />
                  <p className="text-black  text-xs">0.15</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-4">
            <div className="p-2 rounded-t-xl border border-[rgba(255,255,255,0.53)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-[rgba(18,18,20,0.25)] via-[rgba(148,153,159,0.25)_27%] via-[rgba(33,33,36,0.25)_40%] via-[rgba(93,96,100,0.25)_71%] to-[rgba(149,153,160,0.25)]">
              <img className="mx-auto" src="/icons/spin.svg" alt="/" />
              <p className="text-center text-white">100</p>
            </div>
            <div>
              <div className=" p-1 rounded-b-xl gap-1 shadow-[0px_4px_6px_rgba(255,255,255,0.6)] flex items-center justify-center border border-[rgba(255,255,255,0.53)] bg-gradient-to-b from-[rgba(204,232,254,0.4)] via-[rgba(205,160,255,0.4)] to-[rgba(181,145,233,0.4)]">
                <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                  <img className="w-5 h-5" src="/shop/pi.jpg" alt="" />
                  <p className="text-black text-xs">1.8</p>
                </div>
                <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                  <img className="w-5 h-5" src="/shop/perk.webp" alt="" />
                  <p className="text-black  text-xs">95</p>
                </div>
                <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                  <img className="w-5 h-5" src="/shop/ton-token.png" alt="" />
                  <p className="text-black  text-xs">0.28</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-4">
            <div className="p-2 rounded-t-xl border border-[rgba(255,255,255,0.53)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-[rgba(18,18,20,0.25)] via-[rgba(148,153,159,0.25)_27%] via-[rgba(33,33,36,0.25)_40%] via-[rgba(93,96,100,0.25)_71%] to-[rgba(149,153,160,0.25)]">
              <img className="mx-auto" src="/icons/spin.svg" alt="/" />
              <p className="text-center text-white">500</p>
            </div>
            <div>
              <div className=" p-1 rounded-b-xl gap-1 shadow-[0px_4px_6px_rgba(255,255,255,0.6)] flex items-center justify-center border border-[rgba(255,255,255,0.53)] bg-gradient-to-b from-[rgba(204,232,254,0.4)] via-[rgba(205,160,255,0.4)] to-[rgba(181,145,233,0.4)]">
                <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                  <img className="w-5 h-5" src="/shop/pi.jpg" alt="" />
                  <p className="text-black text-xs">8.5</p>
                </div>
                <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                  <img className="w-5 h-5" src="/shop/perk.webp" alt="" />
                  <p className="text-black  text-xs">445</p>
                </div>
                <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                  <img className="w-5 h-5" src="/shop/ton-token.png" alt="" />
                  <p className="text-black  text-xs">1.2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-4">
            <div className="p-2 rounded-t-xl border border-[rgba(255,255,255,0.53)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-[rgba(18,18,20,0.25)] via-[rgba(148,153,159,0.25)_27%] via-[rgba(33,33,36,0.25)_40%] via-[rgba(93,96,100,0.25)_71%] to-[rgba(149,153,160,0.25)]">
              <img className="mx-auto" src="/icons/spin.svg" alt="/" />
              <p className="text-center text-white">5000</p>
            </div>
            <div>
              <div className=" p-1 rounded-b-xl gap-1 shadow-[0px_4px_6px_rgba(255,255,255,0.6)] flex items-center justify-center border border-[rgba(255,255,255,0.53)] bg-gradient-to-b from-[rgba(204,232,254,0.4)] via-[rgba(205,160,255,0.4)] to-[rgba(181,145,233,0.4)]">
                <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                  <img className="w-5 h-5" src="/shop/pi.jpg" alt="" />
                  <p className="text-black text-xs">45</p>
                </div>
                <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                  <img className="w-5 h-5" src="/shop/perk.webp" alt="" />
                  <p className="text-black  text-xs">2000</p>
                </div>
                <div className="flex items-center rounded-lg shadow-xl bg-gray-400 py-1 px-1">
                  <img className="w-5 h-5" src="/shop/ton-token.png" alt="" />
                  <p className="text-black  text-xs">6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shop;
