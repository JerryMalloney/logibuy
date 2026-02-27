import Image from "next/image";
import CustomButton1 from "../buttons/CustomButton1";

const Section8 = () => {
  return (
    <section className="">
      <div className="relative isolate overflow-hidden">
        <Image
          src="/image4.jpeg"
          alt="Exhibition center facade"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/70" />

        <div className="relative container mx-auto px-4 py-20 text-center text-white md:py-28 lg:py-32">
          <div className="mx-auto max-w-6xl space-y-8">
            <h2 className="text-3xl font-medium leading-tight md:text-5xl lg:text-6xl">
              ¿Listo para importar desde China con una estrategia profesional?
            </h2>

            <p className="mx-auto text-base leading-relaxed text-white/90">
              Nuestro equipo diseña contigo una ruta logística eficiente para
              compras, consolidación, transporte internacional y nacionalización
              en destino. Agenda una asesoría y lleva tu operación al siguiente
              nivel.
            </p>

            <div className="flex justify-center pt-2">
              <CustomButton1 text="CONTACTANOS" link="/contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
