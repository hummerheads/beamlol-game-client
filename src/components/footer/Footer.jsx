
const Footer = () => {
  return (
    <div className="text-center">

      <div className="bg-[#ff9c17] my-5 items-center justify-center w-2/5 gap-2 rounded-full flex">
        <img className="w-10 h-10 rounded-full" src="/icons/energy.svg" alt="" />
        <div>
          <p className="font-bold text-lg text-white">0000</p>
          
          <p className="text-[#ffe386]">/0000</p>
        </div>
      </div>


      <div className="bg-[#ff9c17] py-1 rounded-t-xl shadow-2xl grid grid-cols-5 justify-center items-center ">
        <div>
          <img className="w-1/2 rounded-md mx-auto" src="/icons/Premium.png" alt="" />
          <p className="text-white text-xs text-center font-bold">Premium</p>
        </div>
        <div>
          <img className="w-1/2 rounded-md mx-auto" src="/icons/shop.png" alt="" />
          <p className="text-white text-xs text-center font-bold">Shop</p>
        </div>
        <div>
          <img className="w-1/2 rounded-md mx-auto" src="/icons/earn.svg" alt="" />
          <p className="text-white text-xs text-center font-bold">Earn</p>
        </div>
        <div>
          <img className="w-1/2 rounded-md mx-auto" src="/icons/invite.png" alt="" />
          <p className="text-white text-xs text-center font-bold">Invite</p>
        </div>
        <div>
          <img className="w-1/2 rounded-md mx-auto" src="/icons/wallet.svg" alt="" />
          <p className="text-white text-xs text-center font-bold">Wallet</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
