import Image from "next/image";
import CustomButton1 from "../buttons/CustomButton1";

const highlights = [
  "Envío marítimo LCL y FCL con coordinación integral",
  "Envío aéreo por kilogramo para cargas urgentes",
  "Inspecciones técnicas y control de calidad en origen",
  "Warehousing en China y gestión de inventario",
  "Servicios aduanales y nacionalización en destino",
];

const Section5 = () => {
  return (
    <section className="bg-brand-primary px-4 py-4">
      <div className="bg-muted">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <h2 className="max-w-xl border-l-4 border-brand-secondary pl-6 text-3xl md:text-5xl font-medium leading-tight text-foreground">
              Servicios logísticos diseñados para importadores exigentes
            </h2>

            <Image
              src="/image3.jpg"
              alt="Industrial building exterior"
              width={620}
              height={430}
              className="h-auto w-full max-w-155 object-cover"
            />
          </div>

          <div className="space-y-7 self-center">
            <p className="text-base font-medium uppercase text-brand-secondary">
              Soluciones completas de comercio internacional
            </p>

            <p className="text-xl leading-relaxed text-muted-foreground">
              Integramos operación marítima, aérea, aduanal y de supply chain
              para que tu empresa importe con mayor control, menos riesgos y
              mejor planificación comercial.
            </p>

            <ul className="space-y-3 pl-5 text-lg text-muted-foreground list-disc">
              {highlights.map((highlight, index) => (
                <li key={`${highlight}-${index}`}>{highlight}</li>
              ))}
            </ul>

            <div className="pt-2">
              <CustomButton1 text="SOLICITAR COTIZACIÓN" link="/about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
