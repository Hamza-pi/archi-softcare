import { useLayoutEffect, useRef } from "react";
import { animate, useInView } from "motion/react";
import { AnimatedCounterProps } from "@/lib/interface";
import { Card, CardContent, CardFooter } from "../ui/card";

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from,
  to,
  animationOptions,
  cardTitle,
  type,
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || !inView) return;
    element.textContent = String(from);
    const controls = animate(from, to, {
      duration: 2,
      ease: "easeInOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to, animationOptions]);

  return (
    <Card
      className={`w-60 bg-primary h-60 text-center shadow-2xl rounded-3xl shadow-green-950 border-none ${className}`}
    >
      <CardContent className="text-4xl flex items-center justify-center text-foreground pt-6">
        <div className="w-32 h-32 flex items-center justify-center gap-0.5 bg-tertiary font-mono rounded-full border-8 border-white">
          <span ref={ref} />
          {type}
        </div>
      </CardContent>
      <CardFooter className="justify-center uppercase tracking-normal font-bold text-sm">
        {cardTitle}
      </CardFooter>
    </Card>
  );
};

export default AnimatedCounter;
