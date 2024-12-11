import { LucideProps } from "lucide-react";

type ListItem = {
  label: string;
  href: string;
  target?: "_blank" | "";
};
export type ListItems = {
  trigger: string;
  items?: ListItem[];
  singalHref?: string;
  single: boolean;
};

export type CaseStudie = {
  imgUrl: string;
  title: string;
  description: string;
  type: string;
  label: string;
};

export type Efficieny = {
  issue: string;
  solution: string;
  domain: string;
};

export type Tab = {
  value: string;
  title: string;
  items: string[];
  imgUrl: string;
  footerTitle: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};
