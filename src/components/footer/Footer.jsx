import {  NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center">

    <div className=" py-1 rounded-t-xl shadow-2xl grid grid-cols-5 justify-center items-center ">
      <NavLink to="/premium">
        <div>
          <img
            className="w-1/2 rounded-md mx-auto"
            src="/icons/Premium.png"
            alt=""
          />
          <p className="text-white text-xs text-center font-bold">
            Premium
          </p>
        </div>
      </NavLink>
      <NavLink to="/shop">
        <div>
          <img
            className="w-1/2 rounded-md mx-auto"
            src="/icons/shop.png"
            alt=""
          />
          <p className="text-white text-xs text-center font-bold">Shop</p>
        </div>
      </NavLink>
      <NavLink to="/earn">
        <div>
          <img
            className="w-1/2 rounded-md mx-auto"
            src="/icons/earn.svg"
            alt=""
          />
          <p className="text-white text-xs text-center font-bold">Earn</p>
        </div>
      </NavLink>
      <div>
        <img
          className="w-1/2 rounded-md mx-auto"
          src="/icons/invite.png"
          alt=""
        />
        <p className="text-white text-xs text-center font-bold">Invite</p>
      </div>
      <div>
        <img
          className="w-1/2 rounded-md mx-auto"
          src="/icons/wallet.svg"
          alt=""
        />
        <p className="text-white text-xs text-center font-bold">Wallet</p>
      </div>
    </div>
  </div>
  );
};

export default Footer;
