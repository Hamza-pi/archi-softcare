import { Button } from "@/components/ui/button";
import VectorWord from "@/components/shared/VectorWord";
import { motion } from "motion/react";
import { Dot } from "lucide-react";

const Comp: React.FC<{
  items: string[];
  img: string;
  heading: string;
  vectorWord: string;
  paragraph: string;
  footerPara: string;
}> = ({ items, img, heading, vectorWord, paragraph, footerPara }) => {
  return (
    <section className="px-2 xs:px-4 xl:px-12 max-w-screen-2xl mx-auto">
      <motion.main
        initial={{ scale: 0.2 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", ease: "easeInOut", duration: 2 }}
        viewport={{ once: true }}
        className={`lg:max-h-screen overflow-hidden w-full mx-auto flex flex-col md:grid md:grid-cols-2 items-start justify-center bg-secondary rounded-lg shadow-[0px_0px_50px_rgba(0,0,0,0.6)]`}
      >
        {/* Left Image */}
        <div className="w-full h-96 md:h-full">
          <img
            className="w-full h-full rounded-t-lg md:rounded-l-lg object-cover object-top"
            src={img}
            alt="Banner Image"
          />
        </div>
        {/* Right Heading */}
        <div className="space-y-2 lg:space-y-4 p-4 xl:p-12 text-justify">
          <h1 className="text-2xl lg:text-3xl font-bold lg:[word-spacing:-1px] text-primary">
            <VectorWord title={vectorWord} /> {heading}
          </h1>
          <div className="font-bold">
            <p className="drop-shadow-[10px_10px_50px_rgba(0,0,0,100)]">
              {paragraph}
            </p>
            <ul className="pl-1 lg:pl-2 space-y-2 py-2 lg:py-4">
              {items.map((item) => (
                <li className="flex items-center gap-1" key={item}>
                  <div>
                    <Dot size={24} className="text-primary" />
                  </div>
                  <p className="text-tertiary font-semibold">{item}</p>
                </li>
              ))}
            </ul>
            <p className="drop-shadow-[10px_10px_50px_rgba(0,0,0,100)]">
              {footerPara}
            </p>
          </div>
          <Button variant={"primary"} size={"lg"} className="">
            Try For Free
          </Button>
        </div>
      </motion.main>
    </section>
  );
};

export default Comp;
