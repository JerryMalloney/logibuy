const businessPlans = [
  {
    step: "01",
    title: "Opciones de Traslado",
    description:
      "Morbi neque volutpat commodo fames nulla aliquam quam. Morbi nisi ultrices quis elementum. Augue potenti viverra nec sit a malesuada eget. Morbi neque volutpat commodo fames nulla aliquam quam. Morbi nisi ultrices quis elementum. Augue potenti viverra nec sit a malesuada eget.",
  },
  {
    step: "02",
    title: "Servicios y costos Totales",
    description:
      "Morbi neque volutpat commodo fames nulla aliquam quam. Morbi nisi ultrices quis elementum. Augue potenti viverra nec sit a malesuada eget. Morbi neque volutpat commodo fames nulla aliquam quam. Morbi nisi ultrices quis elementum. Augue potenti viverra nec sit a malesuada eget.",
  },
  {
    step: "03",
    title: "Alojamiento 6 Noches",
    description:
      "Morbi neque volutpat commodo fames nulla aliquam quam. Morbi nisi ultrices quis elementum. Augue potenti viverra nec sit a malesuada eget. Morbi neque volutpat commodo fames nulla aliquam quam. Morbi nisi ultrices quis elementum. Augue potenti viverra nec sit a malesuada eget.",
  },
];

const Section4 = () => {
  return (
    <section className="bg-[#0F242A] px-4 py-14 md:py-20">
      <div className="container mx-auto text-white">
        <h2 className="border-l-5 border-white pl-4 text-4xl font-medium leading-tight lg:text-5xl">
          Plan de Negocios
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessPlans.map((plan) => (
            <article key={plan.step} className="bg-[#FFFFFF33] p-8 md:p-12">
              <p className="text-5xl font-light leading-none">{plan.step}</p>
              <h3 className="mt-2 text-2xl leading-tight">{plan.title}</h3>
              <div className="mt-5 aspect-square w-full bg-[#C4E0E9]" />
              <p className="mt-6 text-sm leading-relaxed">{plan.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 space-y-10">
          <p className="text-sm font-semibold uppercase text-brand-secondary">
            Beneficios comunes y personalización
          </p>
          <p className="max-w-6xl text-base leading-relaxed text-white/90">
            Morbi neque volutpat commodo fames nulla aliquam quam. Morbi nisi
            ultrices quis elementum. Augue potenti viverra nec sit a malesuada
            eget. Morbi neque volutpat commodo fames nulla aliquam quam. Morbi
            nisi ultrices quis elementum. Augue potenti viverra nec sit a
            malesuada eget.
          </p>
          <a
            href="#"
            className="inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase text-brand-primary transition hover:bg-white/90"
          >
            Contactanos y conoce más
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section4;
