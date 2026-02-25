"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    rating: "4.8",
    text: "Nam interdum diam condimentum sed augue nunc quam. Mattis dictum cras morbi tellus amet. Turpis amet placerat ut lacinia ultricies iaculis in scelerisque phasellus tellus enim.",
    author: "Michael Reed, CEO GreenTech Solutions",
  },
  {
    rating: "4.8",
    text: "Nam interdum diam condimentum sed augue nunc quam. Mattis dictum cras morbi tellus amet. Turpis amet placerat ut lacinia ultricies iaculis in scelerisque phasellus tellus enim.",
    author: "Michael Reed, CEO GreenTech Solutions",
  },
  {
    rating: "4.8",
    text: "Nam interdum diam condimentum sed augue nunc quam. Mattis dictum cras morbi tellus amet. Turpis amet placerat ut lacinia ultricies iaculis in scelerisque phasellus tellus enim.",
    author: "Michael Reed, CEO GreenTech Solutions",
  },
  {
    rating: "4.8",
    text: "Nam interdum diam condimentum sed augue nunc quam. Mattis dictum cras morbi tellus amet. Turpis amet placerat ut lacinia ultricies iaculis in scelerisque phasellus tellus enim.",
    author: "Michael Reed, CEO GreenTech Solutions",
  },
];

const Section7 = () => {
  return (
    <section className="bg-muted">
      <div className="container mx-auto px-4 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <h2 className="max-w-xl border-l-4 border-brand-secondary pl-6 text-3xl md:text-5xl font-medium leading-tight text-foreground">
              Testimonios
            </h2>

            <p className="text-base font-semibold uppercase text-brand-secondary">
              Lorem ipsum dolor sit amet, consec
            </p>

            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Nam interdum diam condimentum sed augue nunc quam. Mattis dictum
              cras morbi tellus amet. Turpis amet placerat ut lacinia. Nam
              interdum diam condimentum sed augue nunc quam. Mattis dictum cras
              morbi tellus amet. Turpis amet placerat ut lacinia.
            </p>
          </div>

          <Image
            src="/bg1.jpg"
            alt="Busy city exhibition center"
            width={560}
            height={420}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      <div className="pb-16 md:pb-20">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          modules={[Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2.1, spaceBetween: 24 },
            1024: { slidesPerView: 3.1, spaceBetween: 24 },
          }}
          loop
          autoplay
          className="px-4! md:px-8!"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={`${testimonial.author}-${index}`}>
              <article className="h-full min-h-60 bg-white p-8 text-muted-foreground">
                <p className="text-3xl font-medium text-foreground">
                  {testimonial.rating}
                  <span className="ml-3 text-yellow-400">★★★★★</span>
                </p>
                <p className="mt-6 text-lg leading-relaxed">
                  {testimonial.text}
                </p>
                <p className="mt-8 text-base text-brand-secondary">
                  {testimonial.author}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Section7;
