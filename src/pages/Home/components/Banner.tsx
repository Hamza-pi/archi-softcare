import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/image/bannerImg.png";
import { motion } from "motion/react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <header
      className={`h-screen w-full bg-primary bg-[url('@/assets/image/vector.png')] bg-no-repeat bg-cover md:bg-contain bg-center`}
    >
      <main
        className={`h-full w-full max-w-screen-2xl mx-auto flex flex-col space-y-4 sm:flex-row items-center justify-center px-8 md:px-12`}
      >
        {/* Left Heading */}
        <motion.div
          initial={{ transform: "translateY(100px)", opacity: 0.5 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ type: "spring", ease: "easeInOut", duration: 3 }}
          className="space-y-4 w-full md:w-1/3 flex flex-col items-center md:items-start justify-center gap-2"
        >
          <h1 className="text-xl xs:text-3xl xl:text-5xl !leading-[1.25] text-center md:text-left font-bold drop-shadow-[10px_0px_10px_rgba(0,0,0,100)]">
            Software & Billing Services Designed for Your Caregiver Registry
          </h1>
          <Link to={"/schedule"}>
            <Button variant={"secondary"} size={"lg"} className="">
              Schedule a Demo
            </Button>
          </Link>
        </motion.div>
        {/* Right Image */}
        <motion.div
          initial={{ transform: "translateX(100px)", opacity: 0.5 }}
          animate={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ type: "spring", ease: "easeInOut", duration: 3 }}
          className="xs:w-2/3 md:w-1/2"
        >
          <img className="w-full" src={bannerImage} alt="Banner Image" />
        </motion.div>
      </main>
    </header>
  );
};

export default Banner;
