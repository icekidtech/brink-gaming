'use client';
import React, { useState } from "react";
import Header from "../components/Header/header";
import GameCarousel from "../components/heroSection/hero";
import styles from '../styles/page.module.scss';
import WalletConnect from '../components/walletConnect/wallet';

export default function Home() {
  const [isWalletPopupOpen, setIsWalletPopupOpen] = useState(false);

  const toggleWalletPopup = () => {
    setIsWalletPopupOpen(!isWalletPopupOpen);
  };

  const headerActions = [
    { title: 'play' },
    { title: 'matches' },
    { title: 'chats' },
    { title: 'menu' }
  ];

  return (
    <div className={styles.mainContainer}>
      <Header actions={headerActions} onWalletConnect={toggleWalletPopup} />
      <GameCarousel />
      {isWalletPopupOpen && <WalletConnect onClose={toggleWalletPopup} />}
    </div>
  );
}
