import Image from "next/image";
import CustomButton1 from "../buttons/CustomButton1";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        alt="Logística internacional e importación desde China"
        fill
        src={"/hero.jpg"}
        className="object-cover"
      />
      <div className="relative py-[40%] md:py-[30%] lg:py-[25%] xl:py-[13%] bg-black/50 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl text-white space-y-5">
            <h1 className="font-medium text-4xl lg:text-6xl border-l-5 border-white pl-4">
              Expertos en importación y supply chain internacional
            </h1>
            <p className="pl-5 text-base">
              En LOGIBUY ayudamos a empresas a importar desde China con una
              operación integral: procura estratégica, coordinación logística,
              cumplimiento documental y acompañamiento comercial para crecer en
              mercados de Latinoamérica y Europa.
            </p>
            <div className="pl-5">
              <CustomButton1 link="/contact" text="HABLAR CON UN ASESOR" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
