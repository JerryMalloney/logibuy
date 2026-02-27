import Image from "next/image";
import CustomButton1 from "../buttons/CustomButton1";

const Section2 = () => {
  return (
    <section className="">
      <div className="bg-muted">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-20">
          <div className="justify-self-center lg:justify-self-end">
            <Image
              src="/guangzhou.jpg"
              alt="City and modern building"
              width={500}
              height={600}
              className="h-auto w-full max-w-xl mx-auto aspect-10/8 object-cover"
            />
          </div>
          <div className=" space-y-6">
            <h2 className="text-3xl md:text-5xl leading-tight font-medium text-foreground">
              Operación logística puerta a puerta con enfoque empresarial
            </h2>
            <p className="text-base font-medium uppercase text-brand-secondary">
              Soluciones marítimas, aéreas y aduanales
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Coordinamos envíos internacionales, inspecciones técnicas,
              warehousing y procesos de nacionalización para que tu cadena de
              suministro sea más estable, trazable y preparada para escalar.
            </p>
            <div className="pt-4">
              <CustomButton1 text="SOLICITAR DIAGNÓSTICO" link="/contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
