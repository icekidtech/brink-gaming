"use client"; // Ensure it's a client component

import { useEffect, useState } from 'react';
import { useCurrentWallet } from '@mysten/dapp-kit'; // Use useCurrentWallet
import { SuiClient, getFullnodeUrl } from '@mysten/sui/client';

function WalletBalance() {
  const { connectionStatus, currentWallet } = useCurrentWallet();
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    if (connectionStatus === "connected" && currentWallet) {
      const client = new SuiClient({ url: getFullnodeUrl("mainnet") });
      const address = currentWallet.accounts?.[0]?.address; 

      if (address) {
        client.getBalance({ owner: address }).then((balance) => {
          setBalance(balance.totalBalance);
        }).catch((error) => console.error("Error fetching balance:", error));
      }
    }
  }, [connectionStatus, currentWallet]);

  return (
    <div className="balance">
      {connectionStatus === "connected" ? (
        <p>Your balance: {balance} SUI</p>
      ) : (
        <p className="wallet-prompt">Connect your wallet to view your balance.</p>
      )}
    </div>
  );
}

export default WalletBalance;
