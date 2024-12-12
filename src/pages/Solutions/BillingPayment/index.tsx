import React from "react";
import bannerImg from "@/assets/image/billingpayment1.webp";
import compImg from "@/assets/image/billingpayment2.webp";
import subBanner1 from "@/assets/image/billingpayment3.svg";
import subBanner2 from "@/assets/image/billingpayment4.svg";

const SmallBanner = React.lazy(() => import("@/components/shared/SmallBanner"));
const VectorWord = React.lazy(() => import("@/components/shared/VectorWord"));
const SubBanner = React.lazy(() => import("@/components/shared/SubBanner"));
const Comp = React.lazy(() => import("@/components/shared/Comp"));
const Banner = React.lazy(() => import("@/components/shared/Banner"));

const BillingPayment = () => {
  return (
    <main className="space-y-6 sm:space-y-12">
      <Banner
        imgUrl={bannerImg}
        heading="Eliminate Missed Payments and Pay Your Caregivers on Time"
        btnVariant="secondary"
        paragraph=""
      />
      <Comp
        heading="of spending hours every week making sure you’ve collected payments from your customers?"
        paragraph="Frustrated by inaccurate payment reports causing inaccurate caregivers pay? We understand the challenges that you face. Using ArchiSoft Care for your billing and payments will improve accuracy, save you up to 10 hours a week, and put more money in your pocket."
        footerPara=""
        items={[]}
        img={compImg}
        vectorWord="Tired"
      />
      <h1 className="pt-2 text-center text-4xl font-bold text-primary drop-shadow-[0px_0px_10px_rgba(0,0,0,0.6)]">
        Say Goodbye to Billing & Payment <VectorWord title="Frustrations" />
      </h1>
      <p className="text-center text-zinc-800 mx-auto w-9/12">
        Are you billing clients directly, using the two check system, or using a
        third party payment processor? ArchiSoft Care will automate your client
        payments and provide a 40% cost savings on payment processing. Our
        automated weekly process removes the burden on your clients while
        ensuring a healthy cash flow and collection cycle for your registry. Our
        client portal provides clients and their families with full visibility
        of care details so they can see how Mom and Dad are doing 24 / 7 / 365.
      </p>
      <SubBanner
        bg={false}
        btnTitle="Schedule a Demo"
        heading="Billing"
        paragraph=""
        imgUrl={subBanner1}
        reverse={true}
        listItems={[
          "Custom invoices with ArchiSoft Care as the payor of record to maintain compliance",
          "Accounts Receivable management  ",
          "Aging",
          "Powerful Reporting ",
        ]}
      />
      <SubBanner
        bg
        btnTitle="Schedule a Demo"
        heading="Payment Processing"
        paragraph="ArchiSoft Care provides help with:"
        imgUrl={subBanner2}
        reverse={false}
        listItems={[
          "ArchiSoft Care will process all client charges via Credit Card or ACH",
          "ArchiSoft Care's processing insulates the Registry and reduces the risk of being labeled the employer by the DOL",
          "Reposition in house labor from billing to marketing and sales",
          "Easily view all Pending and Completed Charges",
          "Manage credit card expirations",
          "Send and track the status of insurance claims directly through ArchiSoft Care's integrated claims submission platform",
        ]}
        btnVariant="secondary"
      />
      <SmallBanner heading="Ready to learn more?" focuseHeading="" />
    </main>
  );
};

export default BillingPayment;
