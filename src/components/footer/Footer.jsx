
const Footer = () => {
  return (
    <div className="text-center">

      <div className="bg-[#ff9c17] items-center justify-center w-2/5 gap-2 rounded-full flex  my-3">
        <img className="w-10 h-10 rounded-full" src="/icons/energy.jpg" alt="" />
        <div>
          <p className="font-bold text-lg text-white">0000</p>
          
          <p className="text-[#ffe386]">/0000</p>
        </div>
      </div>


      <div className="bg-[#ff9c17] py-1 rounded-t-xl shadow-2xl grid grid-cols-4 justify-center items-center ">
        <div>
          <img className="w-1/2 rounded-md mx-auto" src="/icons/Premium.png" alt="" />
          <p className="text-white text-xs text-center font-bold">Premium</p>
        </div>
        <div>
          <img className="w-1/2 rounded-md mx-auto" src="/icons/Premium.png" alt="" />
          <p className="text-white text-xs text-center font-bold">Premium</p>
        </div>
        <div>
          <img className="w-1/2 rounded-md mx-auto" src="/icons/Premium.png" alt="" />
          <p className="text-white text-xs text-center font-bold">Premium</p>
        </div>
        <div>
          <img className="w-1/2 rounded-md mx-auto" src="/icons/Premium.png" alt="" />
          <p className="text-white text-xs text-center font-bold">Premium</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
