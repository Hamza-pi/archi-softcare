import { LucideProps } from "lucide-react";

export type ListItem = {
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

export type RegEVVItems = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  href: string;
  description: string;
  imgUrl: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type PricingCard = {
  icon: string;
  title: string;
  price: string;
  includeText: string;
};

export type ContentCard = {
  imgUrl: string;
  title?: string;
  titleP?: string;
  contentHeading?: string;
  listHeading?: string;
  listStyle?: "list-disc" | "list-decimal";
  list?: string[];
  footerBtn: string;
};

export type StoryCard = {
  badgeTitle: string;
  title: string;
  imgUrl: string;
  description: string;
  footerTitle: string;
};
