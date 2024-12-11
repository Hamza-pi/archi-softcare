import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/mock/home";

const KnownReg: React.FC = () => {
  return (
    <section className="px-8 space-y-8 md:px-12 py-4 md:py-8 bg-primary">
      <h1 className="text-slate-50 md:text-3xl text-center font-bold">
        We Know Caregiver Registries
      </h1>
      <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8 max-w-screen-2xl mx-auto">
        {caseStudies.map((study) => (
          <Card
            key={study.title}
            className="p-0 cursor-pointer border-none bg-white/40 backdrop-blur-lg rounded-xl overflow-hidden"
          >
            <CardHeader className="w-full p-0 col-span-2 relative">
              <img
                src={study.imgUrl}
                alt={study.title}
                className="w-full h-full rounded-b-2xl object-cover"
              />
              <span
                className={`absolute -top-1 right-0.5 uppercase bg-slate-300 shadow-md text-primary rounded-xl p-2 text-sm font-bold`}
              >
                {study.label}
              </span>
            </CardHeader>
            <CardContent className="p-4  flex flex-col items-start justify-center col-span-3 overflow-hidden space-y-2 relative">
              <h3 className="text-primary text-xl xl:text-2xl font-bold">
                {study.title}
              </h3>
              <p className="text-zinc-800 text-sm text-left">
                {study.description}
              </p>
              <Button variant={"primary"} size={"lg"} className="!rounded-full">
                <div className="flex items-center justify-center uppercase gap-2">
                  <p>{study.type}</p>
                  <ChevronRightCircle />
                </div>
              </Button>
            </CardContent>
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-slate-500/10 via-[#5a843b]/30 to-[#deb742]/40 rounded-xl blur-2xl "></div>
          </Card>
        ))}
      </main>
    </section>
  );
};

export default KnownReg;
