"use client";
import { useState } from "react";
import { SuiClientProvider, WalletProvider, ConnectButton } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WalletBalance from "./walletBalance/balance";
import styles from "./wallet.module.scss";

const queryClient = new QueryClient();

function WalletConnect() {
  const [isWalletPopupOpen, setIsWalletPopupOpen] = useState(false);

  // Function to toggle wallet popup visibility
  const toggleWalletPopup = () => {
    setIsWalletPopupOpen(!isWalletPopupOpen);
  };

  return (
    <SuiClientProvider networks={{ mainnet: { url: getFullnodeUrl("mainnet") } }} defaultNetwork="mainnet">
      <QueryClientProvider client={queryClient}>
        <WalletProvider>
          {/* Button to open wallet connection */}
          <button onClick={toggleWalletPopup} className={styles.openWalletButton}>
            Open Wallet
          </button>

          {/* Modal-like popup for Wallet Connection */}
          {isWalletPopupOpen && (
            <div className={styles.walletPopupBackground} onClick={toggleWalletPopup}>
              <div className={styles.walletPopup} onClick={(e) => e.stopPropagation()}>
                <h1>Sui Wallet Connection</h1>
                <ConnectButton className={`${styles.Connectbutton} connect-button`} />
                <WalletBalance />
                <button onClick={toggleWalletPopup} className={styles.closeButton}>Close</button>
              </div>
            </div>
          )}
        </WalletProvider>
      </QueryClientProvider>
    </SuiClientProvider>
  );
}

export default WalletConnect;
