import FAQ from "@/components/shared/FAQ";
import Banner from "./components/Banner";
import Calculator from "./components/Calculator";
import PayingCards from "./components/PayingCards";
import { pricingFAQ } from "@/mock/pricing";

const Pricing: React.FC = () => {
  return (
    <main className="space-y-6 sm:space-y-12">
      <Banner />
      <PayingCards />
      <Calculator />
      <FAQ faqs={pricingFAQ} />
    </main>
  );
};

export default Pricing;
