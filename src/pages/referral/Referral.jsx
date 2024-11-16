import  { useState, useEffect } from 'react';
import { Modal } from "flowbite-react";
import { useUser } from '../../context/UserContext';
import QRCode from 'react-qr-code';

const Referral = () => {
  const [openModal, setOpenModal] = useState(false);
  const [referredUsers, setReferredUsers] = useState([]);

  const context = useUser();

  const {
    telegram_ID,
    referralLink
  } = context;

  useEffect(() => {
    const fetchReferredUsers = async () => {
      try {
        const response = await fetch("https://pcooogcck4k8kkksk4s80g8k.92.112.181.229.sslip.io/allusers");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        const filteredUsers = data.filter(user => user.referredBy === telegram_ID);
        setReferredUsers(filteredUsers);
        console.log("Filtered referred users:", filteredUsers);
      } catch (error) {
        console.error("Failed to fetch referred users:", error);
      }
    };

    fetchReferredUsers();
  }, [telegram_ID]);

  const copyToClipboard = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        console.log("Text copied to clipboard");
      }).catch((err) => {
        console.error("Failed to copy text: ", err);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";  // Avoid scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        console.log("Text copied to clipboard");
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
      document.body.removeChild(textArea);
    }
  };

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
                +1000000
              </span>
            </p>
            <p className="text-xs text-gray-500">by Checking in</p>
          </div>
          <img className="w-8 h-8" src="/referral/balance.gif" alt="Balance Icon" />
          <span className="text-xs text-gray-400 ml-auto">Just now</span>
        </div>

        <div className="flex items-center gap-4 bg-gradient-to-r from-[#856220] via-[#F4E683] to-[#4E341B]  p-4 mx-4 rounded-lg my-4 border border-[#CCE8FE] shadow-lg">
          <div className="">
            <p className="text-white text-2xl font-medium">
              Your Total Referees:
              <span
                className="ml-2 font-bold text-white text-2xl"

              >
                {referredUsers.length}
              </span>
            </p>
          </div>
        </div>

        {/* Rules Section */}
        <div className="p-4 bg-black bg-opacity-70 mx-2 rounded-lg border border-white shadow-lg text-white">
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
                  <p>You will both get 100000</p>
                  <img className="w-5" src="/referral/balance.gif" alt="Balance" />
                  <p>and 100</p>
                  <img className="w-6" src="/icons/spin.png" alt="Energy" />
                </div>
              </div>

              {/* Rule Item */}
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Invite a friend with Telegram Premium</h3>
                <div className="flex items-center">
                  <p>You will both get 1000000</p>
                  <img className="w-5" src="/referral/balance.gif" alt="Balance" />
                  <p>and 200</p>
                  <img className="w-6" src="/icons/spin.png" alt="Energy" />
                </div>
              </div>

              {/* Rule Item */}
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Additional incentives</h3>
                <p>Get 20% of your friend’s earnings as rewards</p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Invite Button */}
        <div onClick={() => setOpenModal(true)} className="text-white mt-6 mx-auto text-center p-4 font-bold rounded-full w-3/5 max-w-xs border-2 border-white bg-gradient-to-r from-[#856220] via-[#F4E683] to-[#4E341B] shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer">
          Invite a Friend
        </div>
        
        <Modal className='pt-20' show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
          <Modal.Header className='bg-gradient-to-r from-[#856220] via-[#F4E683] to-[#4E341B]' />
          <Modal.Body className='bg-gradient-to-r from-[#856220] via-[#F4E683] to-[#4E341B]'>
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-white">
                Scan this QR code for getting your Referral Link
              </h3>
              <QRCode className='mx-auto pb-8' value={referralLink} size={256} level="H" includeMargin={true} /> 
              <div className='relative'>
                <input
                  id="wallet-address"
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-4 text-sm text-gray-500"
                  value={referralLink}
                  disabled
                  readOnly
                />
                <button
                  onClick={() => copyToClipboard(referralLink)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
                >
                  Copy
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Referral;
