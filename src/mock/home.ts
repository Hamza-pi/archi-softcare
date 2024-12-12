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
        href: "who-we-help",
      },
      {
        label: "Home care agencies",
        href: "https://caretime.us/?__hstc=41066109.50714eeedd38a2fb4537753f4f316d10.1733557561830.1733905090599.1733907655156.28&__hssc=41066109.1.1733907655156&__hsfp=604681892",
        target: "_blank",
      },
    ],
    single: false,
  },
  {
    trigger: "Solutions",
    items: [
      {
        label: "Compliance",
        href: "compliance",
      },
      {
        label: "Revenue Cycle: Billing & Payments",
        href: "revenue-cycle-billing-payments",
      },
      {
        label: "Scheduling",
        href: "scheduling",
      },
      {
        label: "Family Room",
        href: "family-room",
      },
      {
        label: "EVV & Mobile App",
        href: "electronic-visit-verification",
      },
    ],
    single: false,
  },
  {
    trigger: "Pricing",
    singalHref: "pricing",
    single: true,
  },
  {
    trigger: "Resources",
    items: [
      {
        label: "Read Our Blog",
        href: "https://blog.allyms.com",
        target: "_blank",
      },
      {
        label: "Content Library",
        href: "content-library",
      },
      {
        label: "Customer Stories",
        href: "customer-stories",
      },
      {
        label: "Caregiver Registry Glossary",
        href: "caregiver-registry-glossary",
      },
    ],
    single: false,
  },
  {
    trigger: "Company",
    items: [
      {
        label: "About ArchiSoft Care",
        href: "about",
      },
      {
        label: "Partners & Integrations",
        href: "partners",
      },
      {
        label: "Referral Program",
        href: "eferral-program",
      },
    ],
    single: false,
  },
  {
    trigger: "Support",
    singalHref:
      "https://caretime.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fsupport.allyms.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=5927484162075&auth_origin=5927484162075%2Ctrue%2Ctrue",
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
    route: "/scheduling",
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
    route: "/electronic-visit-verification",
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
    route: "/revenue-cycle-billing-payments",
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
    route: "/revenue-cycle-billing-payments",
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
    route: "/family-room",
  },
];
