const stats = [
  {
    value: "10K +",
    label: "Installations Completed",
    description:
      "Morbi neque volutpat commodo fames nulla aliquam quam. Morbi nisi ultrices quis elementum. Augue potenti viverra nec sit a malesuada eget.",
  },
  {
    value: "15 +",
    label: "Years of Experience",
    description:
      "Morbi neque volutpat commodo fames nulla aliquam quam. Morbi nisi ultrices quis elementum. Augue potenti viverra nec sit a malesuada eget.",
  },
  {
    value: "25K +",
    label: "Satisfied Customers",
    description:
      "Morbi neque volutpat commodo fames nulla aliquam quam. Morbi nisi ultrices quis elementum. Augue potenti viverra nec sit a malesuada eget.",
  },
];

const Section2 = () => {
  return (
    <section className="bg-brand-primary px-4 py-16 md:py-20">
      <div className="container mx-auto text-white">
        <h2 className="font-medium text-4xl lg:text-6xl border-l-5 border-white pl-4 max-w-4xl leading-tight">
          Lorem ipsum dolor sit amet, conseclorem ipsum dolor sit amet, consec
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
