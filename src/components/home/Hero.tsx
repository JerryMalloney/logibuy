import Image from "next/image";
import CustomButton1 from "../buttons/CustomButton1";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        alt="Importación y logística internacional desde China"
        fill
        src={"/hero.jpg"}
        className="object-cover"
      />
      <div className="relative py-[40%] md:py-[30%] lg:py-[25%] xl:py-[13%] bg-black/50 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl text-white space-y-5">
            <h1 className="font-medium text-4xl lg:text-6xl border-l-5 border-white pl-4">
              Importación desde China y logística internacional puerta a puerta
            </h1>
            <p className="pl-5 text-base">
              Conectamos tu negocio con fabricantes y centros de abastecimiento
              en China mediante soluciones de envío marítimo LCL/FCL, envío
              aéreo, gestión aduanal y asesoría estratégica de supply chain para
              Latinoamérica y Europa.
            </p>
            <div className="pl-5">
              <CustomButton1 link="/contact" text="SOLICITAR ASESORÍA" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
