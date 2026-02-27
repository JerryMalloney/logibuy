import Image from "next/image";
import CustomButton1 from "../buttons/CustomButton1";

const Section1 = () => {
  return (
    <section className="">
      <div className="bg-muted">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-20">
          <div className=" space-y-6">
            <h2 className="text-3xl md:text-5xl leading-tight font-medium text-foreground">
              Lorem ipsum dolor sit amet, consec
            </h2>
            <p className="text-xl font-medium uppercase text-brand-secondary">
              Sustainable energy made simple
            </p>
            <p className=" leading-relaxed text-muted-foreground">
              Nam interdum diam condimentum sed augue nunc quam. Mattis dictum
              cras morbi tellus amet. Turpis amet placerat ut lacinia ultricies
              iaculis in scelerisque. Phasellus tellus enim quam interdum diam
              lectus. Vitae porttitor euismod at fermentum.
            </p>
            <div className="pt-4">
              <CustomButton1 text="CONOCE MÁS" link="/" />
            </div>
          </div>

          <div className="justify-self-center lg:justify-self-end">
            <Image
              src="/bg1.jpg"
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
