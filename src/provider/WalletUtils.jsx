// import tonConnectUI from "./TonConnectUIInstance"; // Import tonConnect instance

export const promptPayment = async (amount, recipient) => {
  try {
    // Configure the TON payment transaction
    const transaction = {
      amount, // 0.2 TON to pay
      recipient, // Recipient wallet address
    };

    // Initiate TON payment via TonConnect
    // const paymentResult = await tonConnectUI.sendTransaction(transaction);

    return { success: paymentResult.success };
  } catch (error) {
    console.error("Payment error:", error);
    return { success: false };
  }
};
