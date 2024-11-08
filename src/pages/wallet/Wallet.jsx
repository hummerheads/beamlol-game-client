import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const Wallet = () => {
  return (
    <div
      className="bg-[url('/referral/bg.png')] py-5"
      style={{ height: "calc(100vh - 124px)", overflow: "auto" }}
    >
      <div className="mx-16">
        <h1 className="text-white text-center text-2xl font-black">
          Get real crypto.
          <br />
          Earn and buy any tokens{" "}
        </h1>
      </div>
      <div className="text-white mt-4 w-1/2 mx-auto text-center p-4 font-bold rounded-[20px] border-[2.3px] border-white/[.53] bg-gradient-to-r from-[#856220]  to-[#F1EA82]  shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        Connect Wallet
      </div>
      <div className="mx-auto">
        <Tabs aria-label="Default tabs" variant="default" className="mx-auto my-2">
          <Tabs.Item active title="Balances" icon={HiUserCircle}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Profile tab&apos;s associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </Tabs.Item>
          <Tabs.Item title="History" icon={MdDashboard}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard tab&apos;s associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default Wallet;
