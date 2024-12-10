import t1 from "@/assets/image/t1.webp";
import t2 from "@/assets/image/t2.webp";
import t3 from "@/assets/image/t3.webp";
import t4 from "@/assets/image/t4.webp";
import VectorWord from "@/components/shared/VectorWord";

const companyLogos: string[] = [t1, t2, t3, t4];

const TrustReg = () => {
  const duplicatedLogos = [...companyLogos, ...companyLogos];
  return (
    <section className="text-center font-bold tracking-tighter space-y-8 px-6">
      <h1 className="text-2xl md:text-3xl text-primary drop-shadow-[10px_10px_10px_rgba(0,0,0,0.7)]">
        Top Home Care <VectorWord title="Registries" /> Trust ArchiSoft Care
      </h1>
      <div className="relative mx-auto w-full sm:w-1/2 overflow-hidden">
        <div className="flex items-center justify-between animate-marquee">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo}${index}`}
              className="flex-shrink-0 mx-4 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={logo}
                className="w-44 md:w-48 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustReg;
