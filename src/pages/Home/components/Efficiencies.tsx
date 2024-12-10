import VectorWord from "@/components/shared/VectorWord";
import { efficiencies } from "@/mock/home";
import { motion } from "motion/react";

const Efficiencies = () => {
  return (
    <section className="px-12 space-y-4">
      <h1 className="text-primary text-4xl text-center drop-shadow-[1px_5px_10px_rgba(0,0,0,0.5)] font-bold">
        Why <VectorWord title="Ally?" />
      </h1>
      <p className="text-center text-zinc-800 font-medium">
        We help maintain compliance, in addition to all your billing and
        administrative needs.
      </p>
      <main className="bg-black/70 rounded-3xl py-8">
        <div className="w-3/5 mx-auto space-y-4">
          <div className="grid grid-cols-3 text-sm text-secondary text-center font-bold">
            <h3>Without Ally your registry may face:</h3>
            <div></div>
            <h3>With Ally you can:</h3>
          </div>
          {efficiencies.map((item, index) => (
            <div
              className="grid grid-cols-3 text-center pb-4"
              key={item.domain}
            >
              <motion.p
                initial={{ scale: 0.25, opacity: 0.25 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: "easeInOut",
                  duration: 0.4,
                }}
                className="p-6 bg-zinc-800 text-white text-center rounded-lg"
              >
                {item.issue}
              </motion.p>
              <p className="relative flex flex-col items-center justify-center">
                {item.domain}
                {index < efficiencies.length - 1 && (
                  <div
                    className={`absolute ${
                      index === 0
                        ? "h-[calc(100%-25px)]"
                        : " h-[calc(100%-15px)]"
                    }  translate-y-[calc(100%-15px)] left-1/2 w-24  max-h-24  border-l-2 border-dashed border-l-zinc-800`}
                  ></div>
                )}
              </p>
              <motion.p
                initial={{ scale: 0.25, opacity: 0.25 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: "easeInOut",
                  duration: 0.4,
                }}
                className="p-6 bg-tertiary text-white text-center rounded-lg"
              >
                {item.solution}
              </motion.p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Efficiencies;
