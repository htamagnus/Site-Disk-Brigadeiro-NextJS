import styles from "./Presenteaveis.module.scss";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import { EffectFade, Autoplay, Pagination } from "swiper";
import Texto from "../Texto/Texto";
import ButtonBackToTop from "../ButtonBackToTop/ButtonBackToTop";

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
                src="/FotosPresenteaveis/Presenteaveis1.png"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 12 doces sortidos
              </p>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src="/FotosPresenteaveis/Presenteaveis2.png"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 12 doces sortidos
              </p>
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
                src="/FotosPresenteaveis/Presenteaveis3.png"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 24 doces sortidos
              </p>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src="/FotosPresenteaveis/Presenteaveis4.png"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 24 doces sortidos
              </p>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src="/FotosPresenteaveis/Presenteaveis5.png"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 24 doces sortidos
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src="/FotosPresenteaveis/Presenteaveis6.png"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 24 doces sortidos
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <ButtonBackToTop />
    </>
  );
}
