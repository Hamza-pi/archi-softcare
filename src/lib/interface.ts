import { KeyframeOptions } from "motion/react";

export interface SideBarProps {
  disp: boolean;
  setDisp: (state: boolean) => void;
}

export interface VectorWordProps {
  title: string;
  className?: string;
}

export interface AnimatedCounterProps {
  from: number;
  to: number;
  cardTitle: string;
  animationOptions?: KeyframeOptions;
  type?: string;
  className?: string;
}
