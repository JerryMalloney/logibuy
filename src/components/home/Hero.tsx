import Image from "next/image";
import CustomButton1 from "../buttons/CustomButton1";

const Hero = () => {
  return (
    <div className="relative">
      <Image alt="" fill src={"/hero.jpg"} className="object-cover" />
      <div className="relative py-[40%] md:py-[30%] lg:py-[25%] xl:py-[10%] bg-black/50 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl text-white space-y-5">
            <h1 className="font-medium text-4xl lg:text-6xl border-l-5 border-white pl-4">
              Lorem ipsum dolor sit amet, consec
            </h1>
            <p className="pl-5">
              Morbi neque volutpat commodo fames nulla aliquam quam. Morbi nisi
              ultrices quis elementum. Augue potenti viverra nec sit a malesuada
              eget.Morbi neque volutpat commodo fames nulla aliquam quam. Morbi
              nisi ultrices quis elementum. Augue potenti viverra nec sit a
              malesuada eget.
            </p>
            <div className="pl-5">
              <CustomButton1 link="/" text="GET STARTED" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
