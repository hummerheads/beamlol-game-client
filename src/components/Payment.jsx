import { useState } from 'react';
import useTonConnect from '../hooks/useTonConnect';

const Payment = () => {
  const { sender, connected } = useTonConnect();
  const [amount, setAmount] = useState('');
  const [starsAmount, setStarsAmount] = useState('');
  const [status, setStatus] = useState('');

  const handlePayment = async () => {
    if (!connected) {
      setStatus('Please connect your wallet first.');
      return;
    }

    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber) || amountNumber < 0.001) {
      setStatus('Please enter a valid amount (minimum is 0.001 TON).');
      return;
    }

    const contractAddress = 'UQAXP55KXVCUp-kTYQ7nuST3YNcvipJ8JSet9F7COb6EjMJF';

    try {
      setStatus('Sending payment...');
      await sender.send(contractAddress, amountNumber.toString());
      setStatus('Payment sent successfully!');
    } catch (error) {
      console.error('Payment Error:', error);
      setStatus('Payment failed. Please try again.');
    }
  };

  const handleSendStars = async () => {
    if (!connected) {
      setStatus('Please connect your wallet first.');
      return;
    }

    const starsAmountNumber = parseFloat(starsAmount);
    if (isNaN(starsAmountNumber) || starsAmountNumber <= 0) {
      setStatus('Please enter a valid amount of stars.');
      return;
    }

    try {
      setStatus('Sending stars payment...');
      await sender.sendStars(starsAmountNumber);
      setStatus('Stars payment sent successfully!');
    } catch (error) {
      console.error('Stars Payment Error:', error);
      setStatus('Stars payment failed. Please try again.');
    }
  };

  return (
    <div className="container py-10 mb-10 mx-auto p-6">
      <h1 className="text-2xl text-white font-bold mb-4">Make a <span className='text-yellow-400'>TON Payment</span></h1>

      <input
        type="number"
        step="0.001"
        min="0.001"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount in TON"
        className="input mb-4 p-2 border rounded w-full"
      />
      <button
        onClick={handlePayment}
        disabled={!connected}
        className={`button ${connected ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 cursor-not-allowed'} text-white font-bold py-2 px-4 rounded`}
      >
        {connected ? 'Send Payment' : 'Connect Wallet'}
      </button>

      <h1 className="text-2xl font-bold text-white mb-4 mt-8">Send <span className='text-yellow-400'>Telegram Stars</span></h1>
      <input
        type="number"
        step="1"
        min="1"
        value={starsAmount}
        onChange={(e) => setStarsAmount(e.target.value)}
        placeholder="Enter amount of stars"
        className="input mb-4 p-2 border rounded w-full"
      />
      <button
        onClick={handleSendStars}
        disabled={!connected}
        className={`button ${connected ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 cursor-not-allowed'} text-white font-bold py-2 px-4 rounded`}
      >
        {connected ? 'Send Stars' : 'Connect Wallet'}
      </button>

      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default Payment;
