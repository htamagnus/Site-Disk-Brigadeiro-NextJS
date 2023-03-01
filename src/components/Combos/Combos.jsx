import React from "react";
import Texto from "../Texto/Texto";
import styles from "./Combos.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import { EffectFade, Autoplay, Pagination } from "swiper";
import ButtonBackToTop from "../ButtonBackToTop/ButtonBackToTop";

export default function Combos() {
  return (
    <>
      <Texto texto="Combos" />
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
                src="/FotosPresenteaveis/Presenteaveis3.jpeg"
                width={450}
                height={480}
                alt="descricao"
              />
              <p className={styles.slide__texto}>
                Opções com 30 doces sortidos
              </p>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src="/FotosPresenteaveis/Presenteaveis3.jpeg"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 30 doces sortidos
              </p>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src="/FotosPresenteaveis/Presenteaveis3.jpeg"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 30 doces sortidos
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
                src="/FotosPresenteaveis/Presenteaveis3.jpeg"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 50 doces sortidos
              </p>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src="/FotosPresenteaveis/Presenteaveis3.jpeg"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 50 doces sortidos
              </p>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src="/FotosPresenteaveis/Presenteaveis3.jpeg"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 50 doces sortidos
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
                src="/FotosPresenteaveis/Presenteaveis3.jpeg"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 30 doces sortidos
              </p>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src="/FotosPresenteaveis/Presenteaveis3.jpeg"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 30 doces sortidos
              </p>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image
                className={styles.slide__imagem}
                src="/FotosPresenteaveis/Presenteaveis3.jpeg"
                alt="descricao"
                width={450}
                height={480}
              />
              <p className={styles.slide__texto}>
                Opções com 30 doces sortidos
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <ButtonBackToTop />
    </>
  );
}
