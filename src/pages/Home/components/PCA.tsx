import pca from "@/assets/image/PCA.png";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Link } from "react-router";

const PCA = () => {
  return (
    <motion.section
      initial={{ scale: 0.4, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", ease: "ease-in-out", duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center text-2xl sm:text-3xl font-bold px-2 sm:px-6 md:px-12 max-w-screen-2xl mx-auto"
    >
      <main className="bg-tertiary rounded-3xl py-6 space-y-4">
        <div className="max-w-60 mx-auto">
          <img src={pca} className="w-full" alt="PCA Image" />
        </div>
        <h2 className="text-pretty text-slate-200 px-2 sm:px-0 xl:w-1/2 mx-auto">
          Official sponsor and recommended software solution of the Private Care
          Association.
        </h2>
        <Link to={"/schedule"}>
          <Button
            variant={"outline"}
            size={"lg"}
            className="font-bold uppercase group"
          >
            Get in touch with us{" "}
            <span className="group-hover:translate-x-2">&rarr;</span>
          </Button>
        </Link>
      </main>
    </motion.section>
  );
};

export default PCA;
