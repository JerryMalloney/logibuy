"use client";

import EmailForm from "./EmailForm";

const Section1 = () => {
  return (
    <section className="bg-muted px-4 py-14 md:py-20">
      <div className="container mx-auto max-w-6xl space-y-10 md:space-y-14">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-5">
            <h2 className="max-w-xl border-l-4 border-brand-secondary pl-4 text-4xl font-medium leading-tight text-foreground md:text-5xl">
              Contáctanos para impulsar tu operación internacional
            </h2>
            <p className="text-base font-medium uppercase text-brand-secondary">
              Asesoría logística y comercial personalizada
            </p>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Nuestro equipo te ayuda a estructurar importaciones desde China,
              planificar tu cadena de suministro y tomar decisiones operativas
              con mayor control, visibilidad y acompañamiento experto.
            </p>
          </div>

          <div className="overflow-hidden">
            <iframe
              title="Mapa de ubicación"
              src="https://maps.google.com/maps?q=8095%20NW%208TH%20ST%20MIAMI%20FLORIDA%2033126&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="h-72 w-full border-0 md:h-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <EmailForm className="space-y-4" />
      </div>
    </section>
  );
};

export default Section1;
