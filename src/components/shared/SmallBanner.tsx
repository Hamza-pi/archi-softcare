import { SmallBannerProps } from "@/lib/interface";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";

const SmallBanner: React.FC<SmallBannerProps> = ({
  heading,
  focuseHeading,
}) => {
  return (
    <section className="max-w-screen-2xl mx-auto px-2 sm:px-6 md:px-12">
      <main className="bg-zinc-800 text-slate-200 text-center text-xl md:text-2xl font-bold rounded-xl py-6 space-y-6">
        <h1 className="w-11/12 md:w-2/3 mx-auto text-justify md:text-center">
          {heading} <span className="text-primary">{focuseHeading}</span>
        </h1>
        <Link to={"/schedule"}>
          <Button variant={"primary"} size={"lg"}>
            Schedule a Demo
          </Button>
        </Link>
      </main>
    </section>
  );
};

export default SmallBanner;
