import { NavLink } from "react-router-dom";
import { SiBoosty } from "react-icons/si";
import { GiSpinningTop } from "react-icons/gi";

const RightBar = () => {
  return (
    <div className="text-center ">
      <div className="text-xs grid gap-5">
        <NavLink>Spin <GiSpinningTop />
        </NavLink>
        <NavLink className="grid">
          <span>
            <SiBoosty className="bg-red" />
          </span>
          <span>Boost</span>
        </NavLink>
        <NavLink>Airdrop</NavLink>
        <NavLink>Daily Transaction</NavLink>
      </div>
    </div>
  );
};

export default RightBar;
