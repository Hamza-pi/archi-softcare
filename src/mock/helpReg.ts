import { RegEVVItems } from "@/lib/types";
import { Clock, Coins, MousePointer, TvMinimal } from "lucide-react";
import evvReport from "@/assets/image/EVV-Report.webp";
import claims from "@/assets/image/Claims-Invoice-Aging-Report.webp";
import timesheet from "@/assets/image/Schedule-Calendar.webp";
import manageClaims from "@/assets/image/Manage-Claims.webp";

export const evvItems: RegEVVItems[] = [
  {
    icon: Coins,
    title: "Reduce Claims Cost",
    description:
      "Eliminate fraud leakage and abuse by using our EVV system to verify care via GPS and telephony.",
    href: "#",
    imgUrl: evvReport,
  },
  {
    icon: TvMinimal,
    title: "Digital Claims Submission",
    description:
      "Fully electronic claims that can be sent upstream to a carrier in any format required. Digitize your claims submission process.",
    href: "#",
    imgUrl: manageClaims,
  },
  {
    icon: Clock,
    title: "Eliminate Paper Timesheets",
    description:
      "Eliminate paper timesheets and the labor and inefficiencies associated with them.",
    href: "#",
    imgUrl: timesheet,
  },
  {
    icon: MousePointer,
    title: "Claims Reporting",
    description:
      "Digitized claims allow carriers to have the business intelligence data required to make informed business decisions.",
    href: "#",
    imgUrl: claims,
  },
];
