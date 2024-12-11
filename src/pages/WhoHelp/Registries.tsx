import React from "react";
const Banner = React.lazy(() => import("@/components/shared/Banner"));
const Comp = React.lazy(() => import("@/components/shared/Comp"));
const CalendarSection = React.lazy(
  () => import("@/components/shared/Calendar")
);
const Specification = React.lazy(() => import("./components/Specification"));
import payments from "@/assets/image/Automate-Payments-1.webp";
import registry from "@/assets/image/registries1.webp";

const Registries = () => {
  return (
    <section className="space-y-12">
      <Banner
        heading="Grow Your Registry Confidently with ArchiSoft Care"
        paragraph="All-in-one software platform that includes scheduling, payment processing, caregiver payments and claims submission."
        imgUrl={registry}
        btnVariant="secondary"
      />
      <Specification />

      <Comp
        items={[
          "Electronic Visit Verification - Verify that your caregiver is taking care of your loved ones when they say they are.",
          "Automate Payments - Pay for care via credit card or ACH. ArchiSoft Care will pay your caregivers for you and handle all tax documents required. No more sending paper checks each week!",
          "Family Portal - Get access to our family portal to view all visit details to make sure your loved ones are receiving the care they deserve!",
          "Eliminate the Possibility of Fraud - Our electronic visit system will eliminate the possibility of fraud and ensure you are not paying any more $ than you should.",
        ]}
        img={payments}
        heading="payments to your caregivers & verify care for your loved ones!"
        vectorWord="Automate"
        footerPara=""
        paragraph="Get access to our electronic visit system to verify care and protect you from fraud. ArchiSoft Care will automate payments to your caregivers."
      />
      <CalendarSection />
    </section>
  );
};

export default Registries;
