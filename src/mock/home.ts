import { CaseStudie, Efficieny, ListItems, Tab } from "@/lib/types";
import kr1 from "@/assets/image/kr1.webp";
import kr2 from "@/assets/image/kr2.webp";
import kr3 from "@/assets/image/kr3.webp";
import tab1 from "@/assets/image/tab1.webp";
import tab2 from "@/assets/image/tab2.webp";
import tab3 from "@/assets/image/tab3.webp";
import tab4 from "@/assets/image/tab4.webp";
import tab5 from "@/assets/image/tab5.webp";
import {
  BadgeCheck,
  Cable,
  CalendarDays,
  CircleDollarSign,
  HandCoins,
} from "lucide-react";

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
        label: "About ArchiSoft Care",
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
      "Caregiver Registry gets Ahead of Compliance with ArchiSoft Care as their Technology Partner",
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

export const tabs: Tab[] = [
  {
    value: "schedule",
    title: "Schedule Care",
    items: [
      "Complete Scheduling System",
      "Assign and Manage Care Plans",
      "Manage Recurring Visits",
      "Drag and Drop Schedule Changes",
      "Easily Filter Clients & Caregivers",
      "Customize Rates for Specific Schedules",
      "Search Caregiver Availability",
    ],
    imgUrl: tab1,
    footerTitle: "More on Scheduling",
    icon: CalendarDays,
  },
  {
    title: "Verify Care",
    value: "verify",
    items: [
      "Electronic Visit Verification via GPS and Telephony",
      "Eliminates Fraud, Fudging and Leakage",
      "Manage Recurring Visits",
      "Simple, clean user interface",
      "Easily Filter Clients & Caregivers",
      "No Unique ID Codes for Caregivers to Memorize",
      "Easy for Caregivers to Learn and Use",
      "Video Tutorials & Documentation Available",
    ],
    imgUrl: tab2,
    footerTitle: "More on EVV & Mobile App",
    icon: BadgeCheck,
  },
  {
    title: "Process Payments",
    value: "process",
    items: [
      "ArchiSoft Care will process all client charges via Credit Card or ACH",
      "ArchiSoft Care's processing insulates the Registry and reduces the risk of being labeled the employer by the DOL",
      "Manage Recurring VisitReposition in house labor from billing to marketing and sales",
      "Easily view all Pending and Completed Charges",
      "Easily Filter Clients & Caregivers",
      "Manage credit card expirations",
      "Send and track the status of insurance claims directly through ArchiSoft Care's integrated claims submission platform",
    ],
    imgUrl: tab3,
    footerTitle: "More on Revenue Cycle: Payments",
    icon: CircleDollarSign,
  },
  {
    title: "Pay Caregivers & Registry",
    value: "pay",
    items: [
      "Complete Scheduling System",
      "Assign and Manage Care Plans",
      "Manage Recurring Visits",
      "Drag and Drop Schedule Changes",
      "Easily Filter Clients & Caregivers",
      "Customize Rates for Specific Schedules",
      "Search Caregiver Availability",
    ],
    imgUrl: tab4,
    footerTitle: "More on Revenue Cycle: Billing",
    icon: HandCoins,
  },
  {
    title: "Stay Connected",
    value: "stay",
    items: [
      "Client portal to view all care details and pay statements",
      "Caregiver portal to see all shifts worked and all payments received",
      "Call and text message support for registries to stay connected to their clients and caregivers",
      "Prebuilt reports for state and federal audits",
      "Activity reports to see all care details and empowering the registry owner to make more informed business decisions",
    ],
    imgUrl: tab5,
    footerTitle: "More on Family Room",
    icon: Cable,
  },
];
