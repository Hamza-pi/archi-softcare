import IconCard from "@/components/shared/IconCard";
import card1 from "@/assets/image/DOL-Compliance.svg";
import card2 from "@/assets/image/pricingc5.svg";
import card4 from "@/assets/image/pricingc1.svg";
import card5 from "@/assets/image/EVV-1.svg";
import card6 from "@/assets/image/Grow-Faster.svg";
import SmallBanner from "@/components/shared/SmallBanner";

const About = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-12 py-2 sm:py-4 md:py-8 space-y-4 md:space-y-8">
      <div className="text-center text-3xl md:text-4xl w-full md:w-4/5 mx-auto text-primary mt-20 space-y-4">
        <span className="text-base font-bold">WHY ArchiSoft Care?</span>
        <h1 className="font-bold">
          Compliance is at the heart of what we do - while helping you
          supercharge your growth.
        </h1>
      </div>
      <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        <IconCard
          icon={card1}
          title="Mitigate Worker Classification Audits"
          description="Protect your business against workers' classification audits with Ally."
          showBtn={false}
        />
        <IconCard
          icon={card2}
          title="Registry-Specific Language and Processes"
          description="Utilize a system equipped with registry-specific language and processes tailored to your needs."
          showBtn={false}
        />
        <IconCard
          icon={card4}
          title="Streamlined Payments with Direct Caregiver Payouts"
          description="Ally provides an extra layer of separation by facilitating direct payments to caregivers."
          showBtn={false}
        />
        <IconCard
          icon={card5}
          title="Empower Caregivers and Clients with Shift Editing Tools"
          description="Save time and enhance flexibility by enabling caregivers and clients to edit their own shifts seamlessly."
          showBtn={false}
        />
        <IconCard
          icon={card6}
          title="Maximize Efficiency for Business Growth"
          description="Enhance efficiency with Ally, freeing up resources and allowing you to focus on business expansion and competitiveness."
          showBtn={false}
        />
      </main>
      <SmallBanner
        heading="Questions? We've got you covered.
We're here to answer any questions you have about Ally."
        focuseHeading=""
      />
    </section>
  );
};

export default About;
