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

export interface BannerProps {
  bg: boolean;
  heading: string;
  btnTitle: string;
  imgUrl: string;
  reverse: boolean;
  paragraph?: string;
  btnVariant?: "primary" | "secondary" | "outline" | "link";
  listItems?: string[];
  className?: string;
}

export type BannerProps2 = Pick<
  BannerProps,
  "heading" | "imgUrl" | "paragraph" | "btnVariant" | "className"
>;

export interface ListProps {
  items: string[];
}

export interface SmallBannerProps {
  heading: string;
  focuseHeading: string;
}
