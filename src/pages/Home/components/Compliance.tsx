import { Button } from "@/components/ui/button";
import compliance from "../../../assets/image/compliance.webp";
import VectorWord from "@/components/shared/VectorWord";
import { motion } from "motion/react";
import { Dot } from "lucide-react";
import { Link } from "react-router";

const complianceItems: string[] = [
  "Scheduling",
  `EVV mobile app`,
  `Payment processing`,
  `Powerful functionality that helps protect you in the event of a potential DOL audit`,
];

const Compliance = () => {
  return (
    <section className="px-2 xs:px-4 xl:px-12 max-w-screen-2xl mx-auto">
      <motion.main
        initial={{ scale: 0.2 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", ease: "easeInOut", duration: 2 }}
        viewport={{ once: true }}
        className={`h-full w-full mx-auto flex flex-col md:grid md:grid-cols-2 items-start justify-center bg-secondary rounded-lg shadow-[0px_0px_50px_rgba(0,0,0,0.6)]`}
      >
        {/* Left Image */}
        <div className="w-full h-80 md:h-full">
          <img
            className="w-full h-full rounded-t-lg md:rounded-l-lg object-cover object-top"
            src={compliance}
            alt="Banner Image"
          />
        </div>
        {/* Right Heading */}
        <div className="space-y-2 lg:space-y-4 p-4 xl:p-12 text-justify">
          <h1 className="text-2xl lg:text-3xl font-bold lg:[word-spacing:-1px] text-primary">
            <VectorWord title="Compliance" /> is at the heart of what we do -
            while helping you supercharge your growth.
          </h1>
          <div className="font-bold">
            <p className="drop-shadow-[10px_10px_50px_rgba(0,0,0,100)]">
              ArchiSoft Care has it all:
            </p>
            <ul className="pl-1 lg:pl-2 space-y-2 py-2 lg:py-4">
              {complianceItems.map((item) => (
                <li className="flex items-center gap-1" key={item}>
                  <div>
                    <Dot size={24} className="text-primary" />
                  </div>
                  <p className="text-tertiary font-semibold">{item}</p>
                </li>
              ))}
            </ul>
            <p className="drop-shadow-[10px_10px_50px_rgba(0,0,0,100)]">
              We collect all payments and disperse to caregivers, helping you
              maintain compliance.
            </p>
          </div>
          <Link to={"/schedule"}>
            {" "}
            <Button variant={"primary"} size={"lg"} className="">
              Schedule a Demo
            </Button>
          </Link>
        </div>
      </motion.main>
    </section>
  );
};

export default Compliance;
