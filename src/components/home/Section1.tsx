"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const logos = [
  "/logo1.png",
  "/logo3.png",
  "/logo4.png",
  "/logo6.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
];

const Section1 = () => {
  return (
    <section className="bg-[#E0E4E4]">
      <div className="container mx-auto px-4 py-12 md:py-14">
        <Swiper
          modules={[Autoplay]}
          loop
          id="myLinearSwiper"
          speed={4500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 24 },
            768: { slidesPerView: 4, spaceBetween: 28 },
            1024: { slidesPerView: 5, spaceBetween: 32 },
          }}
          className="logos-swiper"
        >
          {logos.map((logoPath) => (
            <SwiperSlide key={logoPath} className="">
              <Image
                src={logoPath}
                alt="Logo aliado"
                width={170}
                height={56}
                className="mx-auto h-70 w-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Section1;
