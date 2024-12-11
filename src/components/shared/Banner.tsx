import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { BannerProps2 } from "@/lib/interface";

const Banner: React.FC<BannerProps2> = ({
  heading,
  imgUrl,
  btnVariant,
  paragraph,
}) => {
  return (
    <header
      className={`h-screen w-full bg-primary bg-[url('@/assets/image/vector.png')] bg-no-repeat bg-cover md:bg-contain bg-center mt-10 md:mt-0`}
    >
      <main
        className={`h-full w-full max-w-screen-2xl mx-auto flex flex-col gap-0 md:gap-4 sm:flex-row items-center justify-end md:justify-center px-8 py-2 md:py-0 md:px-12`}
      >
        {/* Left Heading */}
        <motion.div
          initial={{ transform: "translateY(100px)", opacity: 0.5 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ type: "spring", ease: "easeInOut", duration: 3 }}
          className="space-y-4 w-full md:w-1/3 flex flex-col items-center md:items-start justify-center gap-2"
        >
          <h1 className="text-xl xs:text-3xl xl:text-5xl !leading-[1.25] text-center md:text-left font-bold drop-shadow-[10px_0px_10px_rgba(0,0,0,100)]">
            {heading}
          </h1>
          <p className="text-sm text-center md:text-left">{paragraph}</p>
          <Button variant={btnVariant} size={"lg"} className="">
            Try For Free
          </Button>
        </motion.div>
        {/* Right Image */}
        <motion.div
          initial={{ transform: "translateX(100px)", opacity: 0.5 }}
          animate={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ type: "spring", ease: "easeInOut", duration: 3 }}
          className="xs:w-2/3 md:w-2/5"
        >
          <img className="w-full" src={imgUrl} alt="Banner Image" />
        </motion.div>
      </main>
    </header>
  );
};

export default Banner;
