type ListItem = {
  label: string;
  href: string;
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
