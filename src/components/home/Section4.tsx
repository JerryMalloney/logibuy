import Image from "next/image";
import Link from "next/link";

const businessPlans = [
  {
    step: "01",
    title: "Plan Yiwu",
    image: "/canton1.jpg",
    description:
      "Programa enfocado en compras estratégicas en Yiwu con acompañamiento logístico, validación de proveedores y coordinación operativa para importadores que buscan iniciar o escalar.",
  },
  {
    step: "02",
    title: "Plan 1 Canton Fair",
    image: "/canton2.jpg",
    description:
      "Ruta diseñada para empresarios que quieren aprovechar Canton Fair con orientación comercial, soporte de traducción y estructura logística para convertir visitas en oportunidades reales.",
  },
  {
    step: "03",
    title: "Plan 2 Canton Fair",
    image: "/canton3.jpg",
    description:
      "Versión premium del plan ferial para delegaciones y empresas con objetivos de expansión, incluyendo planificación avanzada y asistencia integral en destino.",
  },
];

const Section4 = () => {
  return (
    <section className="bg-[#0F242A] px-4 py-14 md:py-20">
      <div className="container mx-auto text-white">
        <h2 className="border-l-5 border-white pl-4 text-4xl font-medium leading-tight lg:text-5xl">
          Planes de Negocio Internacional
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessPlans.map((plan) => (
            <article key={plan.step} className="bg-[#FFFFFF33] p-8 md:p-12">
              <p className="text-5xl font-light leading-none">{plan.step}</p>
              <h3 className="mt-2 text-2xl leading-tight">{plan.title}</h3>
              <Image
                src={plan.image}
                alt={plan.title}
                width={480}
                height={480}
                className="mt-5 aspect-10/7 w-full object-cover "
              />
              <p className="mt-6 text-base leading-relaxed">
                {plan.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 space-y-10">
          <p className="text-base font-semibold uppercase text-brand-secondary">
            Asesoría personalizada para cada tipo de empresa
          </p>
          <p className="max-w-6xl text-base leading-relaxed text-white/90">
            Cada plan se adapta al perfil de tu operación, rubro y objetivos de
            crecimiento. Nuestro equipo te comparte el alcance completo del
            servicio, tiempos y próximos pasos en una asesoría directa.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase text-brand-primary transition hover:bg-white/90"
          >
            Solicitar información de planes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section4;
