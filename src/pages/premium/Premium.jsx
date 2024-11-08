
const Premium = () => {


  return (
    <>
      <div
        className="bg-[url('/Premium/bg.gif')] h-[800px] pt-10"
        style={{ height: "calc(100vh - 124px)", overflow: "auto" }}
      >
        {/* <Topbar></Topbar> */}
        <div className=" flex gap-2 items-center text-lg font-black mx-auto rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white w-1/2 justify-center">
          <img src="/Premium/Avatar Stack.svg" alt="" />
          <h1 className="text-gray-800 ">890,357 Joined</h1>
        </div>
        <div>
          <h1 className="text-4xl text-[#FBE67B] mb-4 font-bold text-center shadow-2xl">
            Get access to BeamLol Premium
          </h1>
        </div>
        <div className="mx-4 p-2 rounded-lg bg-gray-500 border border-[rgba(255,255,255,0.53)] shadow-inner grid gap-2">
          <div className="flex items-center gap-4">
            <img src="/Premium/achievement.png" alt="" />
            <p className="text-base text-white font-medium">
              To achieve permanent eligibility for the Grand Giveaway, an
              exclusive series of events for BeamLol premium holders featuring
              substantial USDT and luxury item prizes.
            </p>
            <hr />
          </div>
          <div className="flex items-center gap-4">
            <img src="/Premium/priority.png" alt="" />
            <p className="text-base text-white font-medium">
              Ensure that your transaction is prioritized in the airdrop claim
              queue.
            </p>
            <hr />
          </div>
          <div className="flex items-center gap-4">
            <img src="/Premium/bonus.png" alt="" />
            <p className="text-base text-white font-medium">
              Receive a one-time bonus of 100,000,000 coins along with 1,000
              spins.
            </p>
            <hr />
          </div>
          <div className="flex items-center gap-4">
            <img src="/Premium/specific.svg" alt="" />
            <p className="text-base text-white font-medium">
              Enhance your profile presentation with a distinctive design
              specifically crafted for premium users.
            </p>
            <hr />
          </div>
        </div>
        <div className="mx-auto flex justify-center gap-2">
          <button className="text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
            500
          </button>
          <button className="text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
            500
          </button>
          <button className="text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
            500
          </button>
        </div>
        <div className="py-5 text-center">
          <h1 className="text-white text-2xl font-bold">Premium Features</h1>
          <button className="btn btn-secondary mt-4" >
            Pay 1 TON for Premium
          </button>
        </div>
      </div>
    </>
  );
};

export default Premium;
