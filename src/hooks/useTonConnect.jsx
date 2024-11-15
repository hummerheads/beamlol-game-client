import { useTonConnectUI } from '@tonconnect/ui-react';
import { useState, useEffect } from 'react';

const useTonConnect = () => {
  const [tonConnectUI] = useTonConnectUI();
  const [connected, setConnected] = useState(false);

  const saveWalletAddress = async (telegram_ID, ton_address) => {
    try {
      const response = await fetch('https://beamlol-server.onrender.com/allusers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ telegram_ID, ton_address }),
    });
    

      const data = await response.json();
      if (!response.ok) {
        console.error('Failed to save wallet address:', data.error);
      } else {
        console.log('Wallet address saved:', data.message);
      }
    } catch (error) {
      console.error('Error saving wallet address:', error);
    }
  };

  useEffect(() => {
    if (tonConnectUI.connected) {
      const telegram_ID = new URLSearchParams(window.location.search).get('user_id');
      const ton_address = tonConnectUI.wallet?.address;
      saveWalletAddress(telegram_ID, ton_address);
    }
  }, [tonConnectUI.connected]);

  useEffect(() => {
    const handleConnection = () => {
      setConnected(tonConnectUI.connected);
    };

    const unsubscribe = tonConnectUI.onStatusChange(handleConnection);
    handleConnection();

    return () => {
      unsubscribe();
    };
  }, [tonConnectUI]);


  const sender = {
    send: async (to, amount) => {
      try {
        const nanoTON = BigInt(Math.floor(parseFloat(amount) * 1e9));
  
        if (nanoTON <= 0) {
          throw new Error("Amount must be greater than zero.");
        }
  
        console.log("Sending transaction:", { to, amount: nanoTON.toString() });
  
        const response = await tonConnectUI.sendTransaction({
          messages: [{ address: to, amount: nanoTON.toString() }],
          validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes validity
        });
  
        console.log("Transaction Response:", response);
        return response;
      } catch (error) {
        console.error("Transaction Error:", error);
        throw error;
      }
    },
  };
  

  return { sender, connected };
};

export default useTonConnect;
