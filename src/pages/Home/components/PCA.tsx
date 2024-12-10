import pca from "@/assets/image/PCA.png";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const PCA = () => {
  return (
    <motion.section
      initial={{ scale: 0.4, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", ease: "ease-in-out", duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center text-2xl sm:text-3xl font-bold px-2 sm:px-6 md:px-12"
    >
      <main className="bg-tertiary rounded-lg py-6 space-y-4">
        <div className="max-w-60 mx-auto">
          <img src={pca} className="w-full" alt="PCA Image" />
        </div>
        <h2 className="text-pretty text-slate-200 px-2 xl:w-1/2 mx-auto">
          Official sponsor and recommended software solution of the Private Care
          Association.
        </h2>
        <Button
          variant={"outline"}
          size={"lg"}
          className="font-bold uppercase group"
        >
          Get in touch with us{" "}
          <span className="group-hover:translate-x-2">&rarr;</span>
        </Button>
      </main>
    </motion.section>
  );
};

export default PCA;
