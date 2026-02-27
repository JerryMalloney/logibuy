"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    rating: "5.0",
    text: "LOGIBUY nos ayudó a estructurar nuestra importación desde China con proveedores verificados y una operación marítima clara de principio a fin.",
    author: "Director de Compras, Retail LATAM",
  },
  {
    rating: "4.9",
    text: "Mejoramos tiempos de respuesta con su esquema de envío aéreo y soporte aduanal. Hoy tenemos más control sobre costos operativos.",
    author: "Gerente General, E-commerce Regional",
  },
  {
    rating: "5.0",
    text: "Su acompañamiento en inspecciones técnicas y supply chain nos permitió escalar inventario sin comprometer calidad.",
    author: "Fundador, Marca de Consumo",
  },
  {
    rating: "4.9",
    text: "Necesitábamos una solución puerta a puerta para La Guaira y el resultado fue una cadena logística mucho más predecible.",
    author: "Líder de Operaciones, Importadora Caribe",
  },
];

const Section7 = () => {
  return (
    <section className="bg-muted">
      <div className="container mx-auto px-4 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <h2 className="max-w-xl border-l-4 border-brand-secondary pl-6 text-3xl md:text-5xl font-medium leading-tight text-foreground">
              Testimonios de importadores y empresas en expansión
            </h2>

            <p className="text-base font-semibold uppercase text-brand-secondary">
              Experiencias reales en logística internacional
            </p>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Empresas de distintos sectores confían en nuestro equipo para
              coordinar importaciones desde China, optimizar su supply chain y
              ejecutar operaciones aduanales con acompañamiento continuo.
            </p>
          </div>

          <Image
            src="/image2.png"
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
                <p className="mt-6 text-base leading-relaxed">
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
