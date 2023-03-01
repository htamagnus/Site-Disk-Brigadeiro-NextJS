import styles from "./Presenteaveis.module.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import Presenteaveis1 from "./Fotos/Presenteaveis1.jpeg";
import Presenteaveis2 from "./Fotos/Presenteaveis2.jpeg";
import Presenteaveis3 from "./Fotos/Presenteaveis3.jpeg";
// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";
import Texto from "../Texto/Texto";

export default function Presenteaveis() {
  return (
    <>
      <div id="presenteaveis">
      <Texto texto="Caixas Presenteáveis" />
      </div>
      <div className={styles.carrossel}>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles.carrossel__card}
        >
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade, Pagination]}
            className={styles.mySwiper}
          >
            <SwiperSlide className={styles.slide}>
              <Image
                priority
                className={styles.slide__imagem}
                src={Presenteaveis1}
                alt="descricao"
              />
              <div className={styles.slide__texto}>
                <p>Opções com 12 doces sortidos</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src={Presenteaveis2}
                alt="descricao"
              />
              <div className={styles.slide__texto}>
                <p>Opções com 12 doces sortidos</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src={Presenteaveis3}
                alt="descricao"
              />
              <div className={styles.slide__texto}>
                <p>Opções com 12 doces sortidos</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles.carrossel__card}
        >
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade, Pagination]}
            className={styles.mySwiper}
          >
            <SwiperSlide className={styles.slide}>
              <Image
                priority
                className={styles.slide__imagem}
                src={Presenteaveis1}
                alt="descricao"
              />
              <div className={styles.slide__texto}>
                <p>Opções com 24 doces sortidos</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src={Presenteaveis2}
                alt="descricao"
              />
              <div className={styles.slide__texto}>
                <p>Opções com 24 doces sortidos</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src={Presenteaveis3}
                alt="descricao"
              />
              <div className={styles.slide__texto}>
                <p>Opções com 24 doces sortidos</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
