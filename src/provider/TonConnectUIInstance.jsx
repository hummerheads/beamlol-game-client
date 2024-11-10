// src/provider/TonConnectUIInstance.jsx
import { TonConnectUI } from "@tonconnect/ui-react";

if (!window._tonConnectUIInstance) {
  window._tonConnectUIInstance = new TonConnectUI({ manifestUrl: "/tonconnect-manifest.json" });
}
console.log("TonConnectUI instance created");

const tonConnectUI = window._tonConnectUIInstance;

export default tonConnectUI;
