import Image from "next/image";
import CustomButton1 from "../buttons/CustomButton1";

const Section1 = () => {
  return (
    <section className="">
      <div className="bg-muted">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-20">
          <div className=" space-y-6">
            <h2 className="text-3xl md:text-5xl leading-tight font-medium text-foreground">
              Conexión directa con fabricantes y proveedores en China
            </h2>
            <p className="text-base font-medium uppercase text-brand-secondary">
              Compra internacional con estrategia y control
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Diseñamos rutas de abastecimiento eficientes para que tu empresa
              encuentre mejores oportunidades de compra, valide proveedores y
              tome decisiones comerciales con datos, experiencia local y soporte
              continuo en origen.
            </p>
            <div className="pt-4">
              <CustomButton1 text="CONOCER PROCESO" link="/contact" />
            </div>
          </div>

          <div className="justify-self-center lg:justify-self-end">
            <Image
              src="/guangzhou-1.jpg"
              alt="City and modern building"
              width={500}
              height={600}
              className="h-auto w-full max-w-xl mx-auto aspect-10/8 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
