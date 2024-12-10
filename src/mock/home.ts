import { CaseStudie, Efficieny, ListItems } from "@/lib/types";
import kr1 from "@/assets/image/kr1.webp";
import kr2 from "@/assets/image/kr2.webp";
import kr3 from "@/assets/image/kr3.webp";

export const navList: ListItems[] = [
  {
    trigger: "Who We Help",
    items: [
      {
        label: "Home care registries",
        href: "#",
      },
      {
        label: "Home care agencies",
        href: "#",
      },
    ],
    single: false,
  },
  {
    trigger: "Solutions",
    items: [
      {
        label: "Compliance",
        href: "#",
      },
      {
        label: "Revenue Cycle: Billing & Payments",
        href: "#",
      },
      {
        label: "Scheduling",
        href: "#",
      },
      {
        label: "Family Room",
        href: "#",
      },
      {
        label: "EVV & Mobile App",
        href: "#",
      },
    ],
    single: false,
  },
  {
    trigger: "Pricing",
    singalHref: "#",
    single: true,
  },
  {
    trigger: "Resources",
    items: [
      {
        label: "Read Our Blog",
        href: "#",
      },
      {
        label: "Content Library",
        href: "#",
      },
      {
        label: "Customer Stories",
        href: "#",
      },
      {
        label: "Caregiver Registry Glossary",
        href: "#",
      },
    ],
    single: false,
  },
  {
    trigger: "Company",
    items: [
      {
        label: "About Ally",
        href: "#",
      },
      {
        label: "Partners & Integrations",
        href: "#",
      },
      {
        label: "Referral Program",
        href: "#",
      },
    ],
    single: false,
  },
  {
    trigger: "Support",
    singalHref: "#",
    single: true,
  },
];

export const caseStudies: CaseStudie[] = [
  {
    imgUrl: kr1,
    title: "Jeff Mannel, Founder & CEO of Atlee Care",
    type: `read the story`,
    description: `Read the story about Jeff Mannel who runs a caregiver registry
              focused on referring quality care to seniors in the Denver area.
              He'll share with you a bit about his success and tricks of the
              trade.`,
    label: "Home care insider series",
  },
  {
    imgUrl: kr2,
    title:
      "Caregiver Registry gets Ahead of Compliance with Ally as their Technology Partner",
    type: `read the case study`,
    description: `Read about Ashley Skipper from VIP America and learn about their implementation of a system that brought them to a stronger state of compliance.`,
    label: "case study",
  },
  {
    imgUrl: kr3,
    title: "Breaking Down the Different Models of HomeCare",
    type: `webinar`,
    description: `Watch this on-demand webinar and learn about the different models of home care delivery (W-2, Registry (1099) and Consumer Directed. This webinar shares licensing requirements and local regulations you'll want to be familiar with!`,
    label: "watch the webinar",
  },
];

export const efficiencies: Efficieny[] = [
  {
    issue: "Workers classification audits",
    solution: "Protect against workers classification audits",
    domain: "Audits",
  },
  {
    issue: "Inefficiencies due to using non-registry software",
    solution: "You have registry specific language and processes",
    domain: "Efficiency",
  },
  {
    issue:
      "Risk of being labeled an employer by collecting payment and paying the caregivers",
    solution:
      "You do not collect payments from clients nor pay the caregivers, adding a layer of separation.",
    domain: "Worker Classification",
  },
  {
    issue:
      "Additional admin hours due to manual approval and editing of shifts at the registry level.",
    solution: "Your caregivers and clients can edit their own shifts",
    domain: "Time Saving",
  },
  {
    issue:
      "Higher operating costs impacting your rates, directly impacting your referrals",
    solution:
      "You have a more efficient registry requiring less staffing, giving you more margin to be competitive. ",
    domain: "Cash Flow",
  },
];
