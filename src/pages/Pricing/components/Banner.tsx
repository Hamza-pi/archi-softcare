import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import evv1 from "@/assets/image/EVV-1.svg";
import evv2 from "@/assets/image/evvcard2.svg";
import evv3 from "@/assets/image/nolicensefee.svg";
import { useEffect, useState } from "react";

const rightListItems = [
  {
    icon: evv1,
    title: "EVV at NO Additional Cost",
  },
  {
    icon: evv2,
    title: "No License Fees",
  },
  {
    icon: evv3,
    title: "No Long Term Commitment",
  },
];

const Banner: React.FC = () => {
  const rightListStyle =
    "flex items-center justify-start gap-4 bg-zinc-900/30 backdrop-blur-sm rounded-lg px-3 py-1.5 text-slate-200";

  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 954);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <header
      className={`h-screen w-full bg-primary bg-[url('@/assets/image/vector.png')] bg-no-repeat bg-cover md:bg-contain bg-center mt-10 md:mt-0 `}
    >
      <main
        className={`h-full w-full max-w-screen-2xl mx-auto flex flex-col-reverse gap-0 md:gap-4 md:flex-row items-center justify-center px-8 py-2 md:py-0 md:px-12`}
      >
        {/* Left Heading */}
        <motion.div
          initial={{ transform: "translateX(-100px)", opacity: 0.5 }}
          animate={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ type: "spring", ease: "easeInOut", duration: 3 }}
          className="space-y-4 w-full md:w-1/3 flex flex-col items-center md:items-start justify-center gap-2"
        >
          <h1
            className={`text-xl xs:text-3xl xl:text-5xl !leading-[1.25] text-center md:text-left font-bold drop-shadow-[10px_0px_10px_rgba(0,0,0,100)] `}
          >
            ArchiSoft Care's pricing includes everything you need. And more
          </h1>
          <p className="text-sm text-center md:text-left">
            We charge a percentage of the payments we process from the client.
            There are NO software license fees, start up fees or implementation
            fees.
          </p>
          <Button variant={"secondary"} size={"lg"} className="">
            Try For Free
          </Button>
        </motion.div>
        {/* Right Section */}
        <ul className="gap-6 md:gap-12 py-2 md:py-0 text-sm md:text-base flex flex-col">
          {rightListItems.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{
                transform: `${
                  isDesktop
                    ? item.title.includes("Fees")
                      ? "translateX(150px)"
                      : "translateX(100px)"
                    : "translateX(0px)"
                }`,
                opacity: 0,
              }}
              animate={{
                transform: `${
                  isDesktop
                    ? item.title.includes("Fees")
                      ? "translateX(80px)"
                      : "translateX(0)"
                    : "translateX(0px)"
                }`,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: index / 3,
              }}
              className={rightListStyle}
            >
              <div className="w-8 h-8">
                <img
                  className="w-full h-full object-contain"
                  src={item.icon}
                  alt=""
                />
              </div>
              <p>{item.title}</p>
            </motion.li>
          ))}
        </ul>
      </main>
    </header>
  );
};

export default Banner;
