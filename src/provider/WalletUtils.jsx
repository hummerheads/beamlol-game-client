// walletUtils.js
import { TonConnect } from "@tonconnect/sdk";

export const initializeTonConnect = () => {
  return new TonConnect({ manifestUrl: "/tonconnect-manifest.json" });
};
