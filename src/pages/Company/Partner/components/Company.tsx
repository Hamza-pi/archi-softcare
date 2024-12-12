import { Card, CardContent, CardHeader } from "@/components/ui/card";
import c1 from "@/assets/image/Nexa.webp";
import c2 from "@/assets/image/Polsinelli-3.webp";
import { Link } from "react-router";

const Company = () => {
  return (
    <section className="max-w-screen-2xl  mx-auto px-2 sm:px-4 md:px-20 py-2 sm:py-4 md:py-8 space-y-4 md:space-y-8">
      <Card className="flex flex-col md:flex-row md:max-h-screen items-center mx-auto text-zinc-800">
        <CardHeader>
          <div className="w-56 md:w-96 h-44 md:h-auto">
            <img className="w-full h-full object-contain" src={c1} alt="" />
          </div>
        </CardHeader>
        <CardContent className="md:w-1/2 space-y-2 md:space-y-4 mx-auto py-2 md:p-0 rounded-3xl !bg-zinc-800 md:!bg-inherit">
          <h3 className="text-primary text-lg font-bold uppercase">
            Featured Partner
          </h3>
          <h2 className="text-slate-200 md:text-zinc-800 font-bold text-2xl">
            NEXA
          </h2>
          <p className="text-secondary md:text-zinc-800">
            Healthcare professionals choose Nexa because they offer more than
            just an answering service. Nexa provides a comprehensive solution
            that improves operational efficiency, enhances client satisfaction,
            and supports your home care businesses's growth. Their commitment to
            excellence, coupled with our enterprise technology platform and
            compassionate team, makes them the preferred choice for home care
            owners looking to elevate their client's care.
          </p>
          <h4 className="font-bold text-sm">
            Experience the Nexa difference and see how it can transform
            caregiver communication and support services.
          </h4>
          <br />
          <Link
            to={"https://try.nexa.com/livtech-partner/"}
            target="_blank"
            className="text-primary py-4 hover:underline"
          >
            Talk to NEXA Today &rarr;
          </Link>
        </CardContent>
      </Card>
      <Card className="flex flex-col md:flex-row md:max-h-screen items-center mx-auto text-zinc-800">
        <CardHeader>
          <div className="w-56 md:w-96 h-44 md:h-auto">
            <img className="w-full h-full object-contain" src={c2} alt="" />
          </div>
        </CardHeader>
        <CardContent className="md:w-1/2 space-y-2 md:space-y-4 mx-auto py-2 md:p-0 rounded-3xl !bg-zinc-800 md:!bg-inherit">
          <h3 className="text-primary text-lg font-bold uppercase">
            Featured Partner
          </h3>
          <h2 className="text-slate-200 md:text-zinc-800 font-bold text-2xl">
            POLSINELLI
          </h2>
          <p className="text-secondary md:text-zinc-800">
            Polsinelli Law Firm is a national law firm that offers comprehensive
            legal services tailored to the unique needs of the home care
            industry. With deep expertise in healthcare regulations, compliance,
            employment law, and risk management, Polsinelli provides home care
            agencies and registries with the guidance needed to navigate complex
            legal landscapes. Their proactive approach helps businesses stay
            compliant, protect their interests, and thrive in an evolving
            regulatory environment.
          </p>

          <br />
          <Link
            to={"/content-library"}
            className="text-primary py-4 hover:underline"
          >
            Check out Our Collection of Webinars With Polsinelli in Our Content
            Library &rarr;
          </Link>
        </CardContent>
      </Card>
    </section>
  );
};

export default Company;
