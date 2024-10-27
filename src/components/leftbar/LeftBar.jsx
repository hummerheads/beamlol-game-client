import { NavLink } from "react-router-dom";

const LeftBar = () => {
    return (
      <div className="text-center ">
        <div className="text-xs grid gap-5">
            <NavLink>Binance</NavLink>
            <NavLink>Bitget</NavLink>
            <NavLink>Bybit</NavLink>
            <NavLink>Gate.io</NavLink>

        </div>
      </div>
    );
  };
  
  export default LeftBar;
  