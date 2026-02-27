import Image from "next/image";
import CustomButton1 from "../buttons/CustomButton1";

const Section3 = () => {
  return (
    <section className="">
      <div className="bg-muted">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[2fr_1fr] lg:gap-20">
          <div className=" space-y-6">
            <h2 className="text-3xl md:text-5xl leading-tight font-medium text-foreground">
              Deja de depender de intermediarios y compra directo en China
            </h2>
            <p className="text-xl font-medium uppercase text-brand-secondary">
              Procura internacional con visión comercial
            </p>
            <p className=" leading-relaxed text-muted-foreground">
              Te acompañamos desde la búsqueda de proveedores y validación de
              fábrica hasta la coordinación logística de origen a destino.
              Nuestro enfoque combina ahorro operativo, cumplimiento documental
              y acompañamiento experto para importadores que buscan crecer con
              seguridad.
            </p>
            <div className="pt-4">
              <CustomButton1 text="VER SERVICIOS" link="/about" />
            </div>
          </div>

          <div className="justify-self-center lg:justify-self-end">
            <Image
              src="/bg1.jpg"
              alt="City and modern building"
              width={500}
              height={600}
              className="h-auto w-full max-w-lg mx-auto aspect-9/10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
