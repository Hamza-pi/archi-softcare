import { RegEVVItems } from "@/lib/types";
import { evvItems } from "@/mock/helpReg";
import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";

const EVV = () => {
  const [activItem, setActiveItem] = useState<RegEVVItems>(evvItems[0]);

  const imageVariants = {
    initial: { scale: 0.5, opacity: 0, zIndex: 0 },
    animate: { scale: 1, opacity: 1, zIndex: 1 },
    exit: { scale: 0.5, opacity: 0, zIndex: 0 },
  };

  return (
    <section className="px-2 sm:px-6 md:px-12 max-w-screen-2xl mx-auto">
      <main className="bg-zinc-800 px-3 pt-6 text-slate-200 rounded-xl space-y-3">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-pretty text-center px-12 font-bold">
          Electronic Visit Verification & Digitized Claims for Long Term Care
          Insurance Carriers
        </h1>
        <p className="text-center">
          Reduce claims cost with our customized carrier branded EVV system. EVV
          is proven to reduce fraud, leakage and abuse.
        </p>
        {/* Tabs */}
        <ul className="p-1 w-full flex md:hidden items-start justify-start text-xs flex-wrap gap-1">
          {evvItems.map((evv) => (
            <li
              key={evv.title}
              className="w-max border border-tertiary rounded-full p-1.5 gap-1"
            >
              <div
                className={`flex items-center justify-start gap-1 font-bold ${
                  activItem.title === evv.title
                    ? "text-tertiary"
                    : "text-primary"
                }`}
                onClick={() => setActiveItem(evv)}
              >
                <evv.icon />
                <Link to={evv.href} className={``}>
                  {evv.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4">
          {/* EVV's */}
          <ul className="p-1 w-1/3 text-sm space-y-3 hidden md:block">
            {evvItems.map((evv) => (
              <li key={evv.title} className="space-y-2">
                <div
                  className={`flex items-center justify-start gap-1 font-bold ${
                    activItem.title === evv.title
                      ? "text-tertiary"
                      : "text-primary"
                  }`}
                  onMouseEnter={() => setActiveItem(evv)}
                >
                  <evv.icon />
                  <Link to={evv.href} className={``}>
                    {evv.title}
                  </Link>
                </div>
                <p>{evv.description}</p>
              </li>
            ))}
          </ul>
          {/* Active Item */}
          <div key={activItem.title} className="space-y-2 block md:hidden">
            <div
              className={`flex items-center justify-start gap-1 font-bold ${"text-tertiary"}`}
            >
              <activItem.icon />
              <Link to={activItem.href} className={``}>
                {activItem.title}
              </Link>
            </div>
            <p>{activItem.description}</p>
          </div>

          {/* Image Container */}
          <div className="relative w-full md:w-2/3 h-[80vh] max-h-[550px]">
            <AnimatePresence mode="wait">
              {evvItems.map((evv) => (
                <motion.div
                  key={evv.title}
                  className="absolute inset-0 flex items-center justify-center"
                  variants={imageVariants}
                  initial="initial"
                  animate={
                    activItem.title === evv.title ? "animate" : "initial"
                  }
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={evv.imgUrl}
                    alt={evv.title}
                    className="w-full h-full object-fill md:object-contain"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </section>
  );
};

export default EVV;
