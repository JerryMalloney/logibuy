import { CheckCircle2 } from "lucide-react";

const services = [
  "Envío marítimo LCL (consolidado)",
  "Envío marítimo FCL 20 pies (contenedor completo)",
  "Envío marítimo FCL 40 HQ (contenedor completo)",
  "Envío aéreo (tarifa por kg, desde 5kg)",
  "Supply Chain (logística local en China + gestión)",
  "Warehousing en China (almacenaje gratis bajo condiciones)",
  "Inspecciones técnicas",
  "Cuentas en China para manejo de carteras/inversión (según volumen, metodos de pagos locales en todos los paises que laboramos)",
  "Recepción de pagos en USDT",
  "Asesoría en procura / supply chain (según proyecto)",
  "Warehousing y oficinas en destino (Chile, Colombia, Panama, España, US y Venezuela: Maracaibo, Caracas, Barquisimeto, Maracay, Lecheria y Puerto Piritu)",
  "Estimación de costos (por hora o por tarea)",
  "Servicios aduanales y nacionalización (Maiquetía y La Guaira)",
];

const ServicesSection = () => {
  return (
    <section className="bg-brand-primary px-4 py-14 md:py-20">
      <div className="container mx-auto space-y-10">
        <div className="text-white">
          <h2 className="max-w-4xl border-l-4 border-white pl-4 text-3xl font-medium leading-tight md:text-5xl">
            Servicios logísticos y soluciones integrales
          </h2>
          <p className="mt-4 max-w-4xl text-sm uppercase tracking-wide text-brand-secondary md:text-base">
            Cobertura marítima, aérea, aduanal y supply chain
          </p>
        </div>

        <div className="rounded-xl bg-white/5 p-5 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
                <p className="text-sm leading-relaxed text-white md:text-base">
                  {service}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
