import Image from "next/image";

const logos = Array.from({ length: 5 }, (_, index) => index);

const Section1 = () => {
  return (
    <section className="bg-[#E0E4E4]">
      <div className="container mx-auto px-4 py-12 md:py-14">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 lg:gap-14">
          {logos.map((logoIndex) => (
            <Image
              key={logoIndex}
              src="/logo2.svg"
              alt="Logibuy logo"
              width={170}
              height={56}
              className="h-34 w-auto mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
