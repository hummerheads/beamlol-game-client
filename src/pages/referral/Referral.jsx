

const Referral = () => {
  return (
    <div className="bg-[url('/referral/bg.webp')] bg-cover bg-center font-heading-aldrich" style={{ height: 'calc(100vh - 132px)', overflow: 'auto' }}>
      <div className="bg-gray-300 bg-opacity-5 p-4 rounded-lg shadow-lg">
        
        {/* Header */}
        <p className="font-extrabold text-white text-3xl text-center pt-10 pb-6">
          Invite to Earn
        </p>
        
        {/* Referral Image */}
        <img className="mx-auto w-3/5 max-w-[200px] mb-6" src="/referral/referral.svg" alt="Referral" />

        {/* Notification */}
        <div className="flex items-center gap-4 bg-white p-4 mx-4 rounded-lg my-4 border border-[#CCE8FE] shadow-lg">
  <img className="w-10 h-10" src="/referral/avatar.svg" alt="Avatar" />
  <div className="flex flex-col">
    <p className="text-gray-800 text-sm font-medium">
      Mr. Dom earned 
      <span
        className="ml-2 font-bold text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(180deg, #856220 0%, #F4E683 28%, #BF923D 50%, #4E341B 75%, #F1EA82 100%)",
        }}
      >
        +2000
      </span>
    </p>
    <p className="text-xs text-gray-500">by Checking in</p>
  </div>
  <img className="w-8 h-8" src="/referral/balance.gif" alt="Balance Icon" />
  <span className="text-xs text-gray-400 ml-auto">Just now</span>
</div>

{/* Rules Section */}
<div className="p-6 bg-black bg-opacity-70 mx-6 rounded-lg border border-white shadow-lg text-white">
  <div className="mx-auto text-left">
    <h2
      className="text-2xl font-bold bg-clip-text text-transparent mb-6"
      style={{
        backgroundImage: "linear-gradient(180deg, #856220 0%, #F4E683 28%, #BF923D 50%, #4E341B 75%, #F1EA82 100%)",
      }}
    >
      Referral Rules
    </h2>

    <div className="space-y-6 text-sm text-gray-300">
      
      {/* Rule Item */}
      <div>
        <h3 className="text-lg font-bold text-white mb-1">Invite a friend</h3>
        <div className="flex items-center space-x-1">
          <p>You will both get 2000</p>
          <img className="w-5" src="/referral/balance.gif" alt="Balance" />
          <p>and 1</p>
          <img className="w-5" src="/referral/energy.svg" alt="Energy" />
        </div>
      </div>

      {/* Rule Item */}
      <div>
        <h3 className="text-lg font-bold text-white mb-1">Invite a friend with Telegram Premium</h3>
        <div className="flex items-center space-x-1">
          <p>You will both get 20,000</p>
          <img className="w-5" src="/referral/balance.gif" alt="Balance" />
          <p>and 1</p>
          <img className="w-5" src="/referral/energy.svg" alt="Energy" />
        </div>
      </div>

      {/* Rule Item */}
      <div>
        <h3 className="text-lg font-bold text-white mb-1">Additional incentives</h3>
        <div className="flex items-center space-x-1">
          <p>Get 20% of your friend’s</p>
          <img className="w-5" src="/referral/balance.gif" alt="Balance" />
          <p>earnings as rewards</p>
        </div>
      </div>
      
    </div>
  </div>
</div>


        {/* Invite Button */}
        <div className="text-white mt-6 mx-auto text-center p-4 font-bold rounded-full w-3/5 max-w-xs border-2 border-white bg-gradient-to-r from-[#856220] via-[#F4E683] to-[#4E341B] shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer">
          Invite a Friend
        </div>
      </div>
    </div>
  );
};

export default Referral;
