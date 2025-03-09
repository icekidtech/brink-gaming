"use client";
import { SuiClientProvider, WalletProvider, ConnectButton } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WalletBalance from "./walletBalance/balance";
import styles from "./wallet.module.scss";

const queryClient = new QueryClient();

function WalletConnect({ onClose }) {
  return (
    <SuiClientProvider networks={{ mainnet: { url: getFullnodeUrl("mainnet") } }} defaultNetwork="mainnet">
      <QueryClientProvider client={queryClient}>
        <WalletProvider>
          {/* Modal Overlay */}
          <div className={styles.walletPopupBackground} onClick={onClose}>
            <div className={styles.walletPopup} onClick={(e) => e.stopPropagation()}>
              <h1>Sui Wallet Connection</h1>
              <ConnectButton className={`${styles.Connectbutton} connect-button`} />
              <WalletBalance />
              <button onClick={onClose} className={styles.closeButton}>Close</button>
            </div>
          </div>
        </WalletProvider>
      </QueryClientProvider>
    </SuiClientProvider>
  );
}

export default WalletConnect;
