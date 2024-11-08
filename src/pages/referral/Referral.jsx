const Referral = () => {
    return (
      <div className="bg-[url('/referral/bg.png')]" style={{ height: 'calc(100vh - 124px)', overflow: 'auto'}}>
        <div className="bg-custom-image bg-gray-300 bg-opacity-10 bg-center bg-cover bg-no-repeat ">
          <p className="font-extrabold text-white text-2xl text-center pb-6 pt-10">
            Invite to earn
          </p>
          <img className="mx-auto" src="/referral/referral.svg" alt="" />
          <div className="flex gap-1 items-center py-3 bg-white mx-2 px-2 rounded-2xl my-4 border-2 border-[#CCE8FE]">
            <img className="w-6 h-6" src="/referral/avatar.svg" alt="" />
            <p className="text-black">
              Mr.Dom got
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #856220 0%, #F4E683 28%, #BF923D 50%, #4E341B 75%, #F1EA82 100%)",
                }}
              >
                +2000
              </span>
            </p>
            <img
              className="rounded-full w-8 h-8"
              src="/referral/balance.gif"
              alt=""
            />
            <p>by Checking in</p>
            <p className="text-[#9599A0]">Just now</p>
          </div>
          <div className="p-2 bg-black bg-opacity-60 mx-16 rounded-xl border-2 border-white shadow-2xl">
            <div className="text-center mx-auto">
              <span
                className="bg-clip-text text-transparent text-xl font-bold"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #856220 0%, #F4E683 28%, #BF923D 50%, #4E341B 75%, #F1EA82 100%)",
                }}
              >
                Referel Rules
              </span>
              <div className="pt-4">
                <div>
                  <h1 className="text-white font-bold text-left">
                    Invite a friend
                  </h1>
                  <div className="flex text-[#D1DBE6] items-center text-xs text-md">
                    <div>
                      <p className="py-2"> You will both get 2000 </p>
                    </div>
                    <img className="w-5" src="/referral/balance.gif" alt="" />
                    <p>and 1 </p>
                    <img className="w-5" src="/referral/energy.svg" alt="" />
                  </div>
                </div>
                <div>
                  <h1 className="text-white font-bold text-left">
                    Invite a friend with a Telegram Premium account
                  </h1>
                  <div className="flex text-[#D1DBE6] text-xs  items-center text-md">
                    <div>
                      <p className="py-2"> You will both get 20,000 </p>
                    </div>
                    <img className="w-5" src="/referral/balance.gif" alt="" />
                    <p>and 1 </p>
                    <img className="w-5" src="/referral/energy.svg" alt="" />
                  </div>
                </div>
                <div>
                  <h1 className="text-white font-bold text-left">
                    Additional incentives
                  </h1>
                  <div className="flex text-[#D1DBE6] text-xs  items-center text-md">
                    <div>
                      <p className="py-2"> Get 20% of your friend’s </p>
                    </div>
                    <img className="w-5" src="/referral/balance.gif" alt="" />
                    <p>yeilds in rewards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white mt-4 w-1/2 mx-auto text-center p-4 font-bold rounded-[20px] border-[2.3px] border-white/[.53] bg-gradient-to-r from-[#856220] via-[#F4E683] via-[#BF923D] via-[#4E341B] to-[#F1EA82] shadow-inner shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          Invite a Friend
          </div>
        </div>
      </div>
    );
  };
  
  export default Referral;
  