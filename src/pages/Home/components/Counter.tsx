import VectorWord from "@/components/shared/VectorWord";
import React from "react";

const AnimatedCounter = React.lazy(
  () => import("@/components/shared/AnimatedCounter")
);

const Counter = () => {
  return (
    <section className="text-center font-bold tracking-tighter space-y-10  px-6 md:px-12">
      <h1 className="text-2xl leading-10 text-primary drop-shadow-[10px_10px_10px_rgba(0,0,0,0.7)]">
        <VectorWord title="All-in-one " /> software designed specifically for
        registries gives you:
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8">
        <AnimatedCounter
          from={0}
          to={40}
          cardTitle="hours saved of admin work each month"
        />
        <div>
          <AnimatedCounter
            from={0}
            to={20}
            type="%"
            cardTitle="increase in productivity"
          />
        </div>
        <AnimatedCounter
          from={0}
          to={100}
          type="%"
          cardTitle="more peace of mind with your compliance"
        />
      </div>
    </section>
  );
};

export default Counter;
