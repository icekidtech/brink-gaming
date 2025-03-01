'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";


import "swiper/css";
import "swiper/css/navigation";
import styles from "./hero.module.scss";


function GameCarousel() {
    const gamesData = [
        {
            "id": "1",
            "backgroundImage": "/homepage-Assets/thumbnail-img/caod-back.png",
            "cardimage": "/homepage-Assets/thumbnail-img/Cod-card.png",
            "topname": "CALL OF DUTY:",
            "bottomname": "BLACK OPS 6"
        },
        {
            "id": "2",
            "backgroundImage": "/homepage-Assets/thumbnail-img/the-witcher-3-wild-hunt-card.png",
            "cardimage": "/homepage-Assets/thumbnail-img/the-witcher-3-wild-hunt-card.png",
            "topname": "THE WITCHER:",
            "bottomname": "WILD HUNT 3"
        },
        {
            "id": "3",
            "backgroundImage": "/homepage-Assets/thumbnail-img/mini-royale-nations-season-3-card.png",
            "cardimage": "/homepage-Assets/thumbnail-img/mini-royale-nations-season-3-card.png",
            "topname": "MINI ROYAL:",
            "bottomname": "SEASON 3 HYPERDRIVE"
        },
        {
            "id": "4",
            "backgroundImage": "/homepage-Assets/thumbnail-img/caod-back.png",
            "cardimage": "/homepage-Assets/thumbnail-img/Cod-card.png",
            "topname": "CALL OF DUTY:",
            "bottomname": "BLACK OPS 6"
        },
        {
            "id": "4",
            "backgroundImage": "/homepage-Assets/thumbnail-img/caod-back.png",
            "cardimage": "/homepage-Assets/thumbnail-img/Cod-card.png",
            "topname": "CALL OF DUTY:",
            "bottomname": "BLACK OPS 6"
        },
        {
            "id": "4",
            "backgroundImage": "/homepage-Assets/thumbnail-img/caod-back.png",
            "cardimage": "/homepage-Assets/thumbnail-img/Cod-card.png",
            "topname": "CALL OF DUTY:",
            "bottomname": "BLACK OPS 6"
        }
    ];

    const [bgImage, setBgImage] = useState(gamesData[0].backgroundImage);
    const [selectedGame, setSelectedGame] = useState(gamesData[0]);
    return (
        <div className={`${styles.heroSection}`} style={{ backgroundImage: `linear-gradient(180deg, #07000442, #3b000856,#8e000e8e),url(${bgImage})` }}>
            {selectedGame && (
                <div className={`${styles.herocontent}`}>
                    <p className="game-status">Recently played:</p>
                    <h1>{selectedGame.topname}<span>{selectedGame.bottomname}</span></h1>
                    <button className="play-now">
                        <Image src="/homepage-Assets/motion_play.png" alt="" width={30} height={30} />PLAY
                    </button>
                </div>
            )}
            <div className={styles.thumbnailWrapper}>
                <div className={styles.navigation}>
                    <button id="prevButton">
                        <img src="/homepage-Assets/arrow_left_alt.png" alt="" className={styles.image} />
                    </button>
                    <button id="nextButton">
                        <img src="/homepage-Assets/arrow_forward (1).png" alt="" className={styles.image} />
                    </button>
                </div>
                <Swiper
                    className={styles.gameSwiper}
                    modules={[Navigation, Autoplay]}
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={{
                        nextEl: "#nextButton", 
                        prevEl: "#prevButton",
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.navigation.init();
                            swiper.navigation.update();
                        },100);
                    }}
                    onSlideChange={(swiper) => {
                        setBgImage(gamesData[swiper.realIndex]?.backgroundImage);
                        setSelectedGame(gamesData[swiper.realIndex]);
                    }}
                >
                    {gamesData.map((game) => (
                        <SwiperSlide key={game.id}>
                            <img src={game.cardimage} alt="" className={styles.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default GameCarousel;
