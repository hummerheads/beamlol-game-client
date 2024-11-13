import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center bg-gray-800 fixed">
      <div className=" py-1 rounded-t-xl shadow-2xl grid grid-cols-6 justify-center items-center ">
        <NavLink to="/">
          <div>
            <img className="w-1/2 rounded-md mx-auto" src="/home.svg" alt="" />
            <p className="text-white text-xs text-center font-bold">Home</p>
          </div>
        </NavLink>
        <NavLink to="/premium">
          <div>
            <img
              className="w-1/2 rounded-md mx-auto"
              src="/icons/Premium.png"
              alt=""
            />
            <p className="text-white text-xs text-center font-bold">Premium</p>
          </div>
        </NavLink>
        <NavLink to="/shop">
          <div>
            <img
              className="w-1/2 rounded-md mx-auto"
              src="/icons/shop.svg"
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
        <NavLink to="/referral">
          <div>
            <img
              className="w-1/2 rounded-md mx-auto"
              src="/icons/referral.svg"
              alt=""
            />
            <p className="text-white text-xs text-center font-bold">Invite</p>
          </div>
        </NavLink>

        <NavLink to="/wallet">
          <div>
            <img
              className="w-1/2 rounded-md mx-auto"
              src="/icons/wallet.svg"
              alt=""
            />
            <p className="text-white text-xs text-center font-bold">Wallet</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
