import IconCard from "@/components/shared/IconCard";
import dol from "@/assets/image/DOL-Compliance.svg";
import grow from "@/assets/image/Grow-Faster.svg";
import free from "@/assets/image/Free-Software.svg";
import evv from "@/assets/image/EVV-1.svg";

const Specification = () => {
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 px-2 md:px-6 lg:px-12 max-w-screen-2xl mx-auto">
      <IconCard
        icon={dol}
        title="Reduce the Risk of DOL Non-Compliance"
        description="Our compliant payment processing reduces the risk of being labeled the employer by the DOL."
        route="/compliance"
      />
      <IconCard
        icon={grow}
        title="Grow Faster"
        description="ArchiSoft Care automates payment processing allowing you to focus on sales and marketing."
        route="/revenue-cycle-billing-payments"
      />
      <IconCard
        icon={free}
        title="Free Software"
        description="Stop paying license fees for your scheduling software. We NEVER charge license fees. Our software is free to home care registries."
        route="/pricing"
      />
      <IconCard
        icon={evv}
        title="Electronic Visit Verification"
        description="Go paperless with our electronic visit system. Our telephony and native mobile app make clocking in and out seamless for caregivers."
        route="/electronic-visit-verification"
      />
    </section>
  );
};

export default Specification;
