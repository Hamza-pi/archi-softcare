import IconCard from "@/components/shared/IconCard";
import { Button } from "@/components/ui/button";
import { pricingCards } from "@/mock/pricing";
import { CheckCircle, CircleX } from "lucide-react";
import { Link } from "react-router";

const PayingCards = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-12 py-2 sm:py-4 md:py-8 space-y-4 md:space-y-8">
      <div className="px-4 md:px-8 text-center space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Your registry is paying 2x more than it should without ArchiSoft Care
        </h1>
        <p className="text-sm text-zinc-800 font-semibold">
          ArchiSoft Care lowers or avoids the below cost items in our simple,
          flat fee.{" "}
        </p>
      </div>
      <main className="grid sm:grid-cols-3 md:grid-cols-4 justify-center gap-4">
        {pricingCards.map((card) => (
          <IconCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            element={
              <div className="flex items-center justify-center">
                <ul className="flex flex-col items-start justify-center gap-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CircleX size={16} className="text-destructive" />
                    <span className="line-through">{card.price}</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs">
                    <CheckCircle size={14} className="text-tertiary" />
                    <span>{card.includeText}</span>
                  </li>
                </ul>
              </div>
            }
            description=""
            showBtn={false}
          />
        ))}
      </main>
      <div className="text-center">
        <Link
          to={
            "https://blog.allyms.com/is-ally-more-or-less-expensive-vs-in-house-processing?hsCtaTracking=df5ce58c-70b7-44a1-8577-485ed2aeafea%7C92f1cc90-cfcc-47b8-a2fa-eb4f19c830f0"
          }
          target="_blank"
        >
          <Button variant={"primary"} size={"lg"} className="h-auto">
            <p className="max-w-full text-wrap text-center !py-1">
              Should a Registry Process Billing and Payments In-House?
            </p>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PayingCards;
