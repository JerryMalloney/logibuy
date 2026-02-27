const stats = [
  {
    value: "China + LATAM",
    label: "Operación internacional conectada",
    description:
      "Gestionamos compras, consolidación y despacho para empresas que importan desde China hacia mercados de alto crecimiento.",
  },
  {
    value: "60 días",
    label: "Tránsito marítimo referencial LCL",
    description:
      "Coordinamos rutas eficientes, documentación y seguimiento para mantener visibilidad logística en cada etapa.",
  },
  {
    value: "End-to-End",
    label: "Supply chain y aduanas",
    description:
      "Integramos warehousing en China, inspecciones técnicas y nacionalización en destino para una operación sin fricciones.",
  },
];

const Section2 = () => {
  return (
    <section className="bg-brand-primary px-4 py-16 md:py-20">
      <div className="container mx-auto text-white">
        <h2 className="font-medium text-3xl lg:text-5xl border-l-5 border-white pl-4 max-w-4xl leading-tight">
          Logística internacional para escalar tus importaciones con control y
          trazabilidad
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {stats.map((stat) => (
            <article key={stat.label} className="bg-muted-foreground/80 p-10">
              <h3 className="text-5xl font-medium">{stat.value}</h3>
              <p className="mt-3 text-2xl">{stat.label}</p>
              <p className="mt-14 text-lg leading-relaxed">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
