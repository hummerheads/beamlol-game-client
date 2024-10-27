import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
      <div className="text-center my-5">
        <div className="flex gap-5 text-xs">
            <NavLink>Premium</NavLink>
            <NavLink>Shop</NavLink>
            <NavLink>Earn</NavLink>
            <NavLink>Invite</NavLink>
            <NavLink>Wallet</NavLink>

        </div>
      </div>
    );
  };
  
  export default Footer;
  