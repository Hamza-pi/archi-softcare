import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { BannerProps } from "@/lib/interface";
import List from "./List";

const SubBanner: React.FC<BannerProps> = ({
  bg,
  heading,
  btnTitle,
  imgUrl,
  reverse,
  paragraph,
  btnVariant = "primary",
  listItems,
}) => {
  return (
    <header
      className={`w-full max-w-screen-2xl mx-auto px-2 sm:px-8 md:px-12 `}
    >
      <main
        className={`h-full w-full flex  ${
          reverse
            ? "flex-col sm:flex-row"
            : "flex-col-reverse sm:flex-row-reverse"
        } space-y-4  items-center justify-center gap-8 ${
          bg ? "bg-primary rounded-xl" : ""
        } py-2 md:py-6`}
      >
        {/* Left Heading */}
        <motion.div
          initial={{ transform: "translateY(100px)", opacity: 0.5 }}
          whileInView={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ type: "spring", ease: "easeInOut", duration: 3 }}
          viewport={{ once: true }}
          className={`space-y-4 w-full md:w-1/3 flex flex-col items-center md:items-start justify-center gap-2 ${
            bg ? "text-slate-300" : "text-zinc-800"
          } text-center md:text-left`}
        >
          <h1 className="text-xl xs:text-2xl xl:text-3xl !leading-[1.25] font-bold">
            {heading}
          </h1>
          <p className="text-sm sm:text-base">{paragraph}</p>
          {listItems ? (
            <div className="w-4/5 md:w-auto text-sm md:text-base">
              <List items={listItems} />
            </div>
          ) : (
            ""
          )}
          <Button variant={btnVariant} size={"lg"}>
            {btnTitle}&nbsp;&rarr;
          </Button>
        </motion.div>
        {/* Right Image */}
        <motion.div
          initial={{ transform: "translateX(100px)", opacity: 0.5 }}
          whileInView={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ type: "spring", ease: "easeInOut", duration: 3 }}
          viewport={{ once: true }}
          className="xs:w-2/3 md:w-2/5 rounded-lg overflow-hidden"
        >
          <img className="w-full" src={imgUrl} alt="Banner Image" />
        </motion.div>
      </main>
    </header>
  );
};

export default SubBanner;
