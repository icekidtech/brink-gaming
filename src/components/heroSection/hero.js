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
            "backgroundImage": "/homepage-Assets/thumbnail-img/bushi-background.png",
            "cardimage": "/homepage-Assets/thumbnail-img/bushi the-serpent-card.png",
            "topname": "BUSHI:",
            "bottomname": "THE SERPENT RAGE"
        },
        {
            "id": "2",
            "backgroundImage": "/homepage-Assets/thumbnail-img/panzar-dogs-background.png",
            "cardimage": "/homepage-Assets/thumbnail-img/panzar-dogs-card.jpg",
            "topname": "PANZAR DOGS",
            "bottomname": "  "
        },
        {
            "id": "3",
            "backgroundImage": "/homepage-Assets/thumbnail-img/playground-background.jpg",
            "cardimage": "/homepage-Assets/thumbnail-img/playground-card.png",
            "topname": "PLAYGROUNDS:",
            "bottomname": "WORLDS BEYOND"
        },
        {
            "id": "4",
            "backgroundImage": "/homepage-Assets/thumbnail-img/run-legends-background.png",
            "cardimage": "/homepage-Assets/thumbnail-img/run-legends-card.jpeg",
            "topname": "RUN LEGENDS:",
            "bottomname": "MAKE FITNESS FUN!"
        },
        {
            "id": "5",
            "backgroundImage": "/homepage-Assets/thumbnail-img/symphony-background.jpeg",
            "cardimage": "/homepage-Assets/thumbnail-img/symphony-card.jpeg",
            "topname": "STAR SYMPHONY",
            "bottomname": "  "
        },
        {
            "id": "6",
            "backgroundImage": "/homepage-Assets/thumbnail-img/xociety-background.webp",
            "cardimage": "/homepage-Assets/thumbnail-img/xociety-card.webp",
            "topname": "XOCIETY",
            "bottomname": "  "
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
                        <Image src="/homepage-Assets/arrow_left_alt.png" alt="" fill />
                    </button>
                    <button id="nextButton">
                        <Image src="/homepage-Assets/arrow_forward (1).png" alt="" fill />
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
                        }, 100);
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
