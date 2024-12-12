import { PricingCard } from "@/lib/types";
import icon1 from "@/assets/image/pricingc1.svg";
import icon2 from "@/assets/image/pricingc2.svg";
import icon3 from "@/assets/image/pricingc3.svg";
import icon4 from "@/assets/image/pricingc4.svg";
import icon5 from "@/assets/image/pricingc5.svg";
import icon6 from "@/assets/image/pricingc6.svg";
import icon7 from "@/assets/image/pricingc7.svg";
import icon8 from "@/assets/image/DOL-Compliance.svg";
import { FAQ } from "@/lib/types";

export const pricingCards: PricingCard[] = [
  {
    icon: icon1,
    title: "Payroll",
    price: "$5-7/month per caregiver",
    includeText: "Included in ArchiSoft Care flat rate",
  },
  {
    icon: icon2,
    title: "Software",
    price: "$12-$15/client per month",
    includeText: "Included in ArchiSoft Care flat rate",
  },
  {
    icon: icon3,
    title: "Credit Card Processing",
    price: "3-5% on invoices paid",
    includeText: "Included in ArchiSoft Care flat rate",
  },
  {
    icon: icon4,
    title: "Human Billers",
    price: "1 biller/50 clients @ $50k",
    includeText: "Included in ArchiSoft Care flat rate",
  },
  {
    icon: icon8,
    title: "Audit Protection",
    price: "$75,000k per Wage-Hour defense ",
    includeText: "Included in ArchiSoft Care flat rate",
  },
  {
    icon: icon5,
    title: "Timecard Changes",
    price: "25% of $50k FTE @ $50k",
    includeText: "Included in ArchiSoft Care flat rate",
  },
  {
    icon: icon6,
    title: "Caregiver Payment Support",
    price: "15% of $50k FTE @ $50k",
    includeText: "Included in ArchiSoft Care flat rate",
  },
  {
    icon: icon7,
    title: "Chargeback Protection",
    price: " 1% of transactions @ $3k each",
    includeText: "Included in ArchiSoft Care flat rate",
  },
];

export const pricingFAQ: FAQ[] = [
  {
    question: "How does your pricing model work? ",
    answer:
      "Our pricing is based on the amount of billing and receivables you do each month.",
  },
  {
    question: "How competitive is your pricing?",
    answer:
      "We are proud to say that we have the most competitive pricing in the industry for this model of home care.",
  },
  {
    question: "What size registries do you work with?",
    answer:
      "We work with all sizes of registries, from start up to enterprise.",
  },
  {
    question: "What type of payors can ArchiSoft Care handle?",
    answer:
      "All types of payors including medicaid, veterans administration, long term care insurance, and private pay.",
  },
];
