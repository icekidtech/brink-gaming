'use client'
import React from "react";
import Header from "../components/Header/header";
import GameCarousel from "../components/heroSection/hero";
import styles from '../styles/page.module.scss';



export default function Home() {
  const headerActions = [
    {
      title: 'play'
    },
    {
      title: 'matches'
    },
    {
      title: 'chats'
    },
    {
      title: 'menu'
    }
  ]
  return (
    <div className={styles.mainContainer}>
      <Header actions={headerActions} />
      <GameCarousel/>
    </div>
  );
}
