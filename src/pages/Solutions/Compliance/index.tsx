import React from "react";
import bannerImg from "@/assets/image/compliance1.webp";
import compImg from "@/assets/image/compliance2.webp";
import subBanner1 from "@/assets/image/compliance3.webp";
import subBanner2 from "@/assets/image/wedo.svg";

const SmallBanner = React.lazy(() => import("@/components/shared/SmallBanner"));
const VectorWord = React.lazy(() => import("@/components/shared/VectorWord"));
const SubBanner = React.lazy(() => import("@/components/shared/SubBanner"));
const Comp = React.lazy(() => import("@/components/shared/Comp"));
const Banner = React.lazy(() => import("@/components/shared/Banner"));

const Compliance = () => {
  return (
    <main className="space-y-6 sm:space-y-12">
      <Banner
        imgUrl={bannerImg}
        heading="If (or When!) the DOL Comes Knocking, You've Got a Trusted Partner by Your Side"
        btnVariant="secondary"
        paragraph=""
        className="xl:!text-[36px]"
      />
      <Comp
        heading="the challenges you face in running a registry. "
        paragraph="Too often you find yourself balancing carefully between your business needs and ensuring that you are adhering to the workers classification regulations."
        footerPara="You don’t have to manage this alone. With Ally you have a trusted partner that understands the registry model. We don’t just understand, we actively help protect you in the event of workers classification audits. "
        items={[]}
        img={compImg}
        vectorWord="We understand "
      />
      <h1 className="py-2 text-center text-4xl font-bold text-primary drop-shadow-[0px_0px_10px_rgba(0,0,0,0.6)]">
        Maintaining Compliance with <VectorWord title="Ease" />
      </h1>
      <SubBanner
        bg={false}
        btnTitle="Try For Free"
        heading="Peace of Mind Before an Audit"
        paragraph="Ally provides help with:"
        imgUrl={subBanner1}
        reverse={true}
        listItems={[
          "Ally will 1099-K under our company name, not yours since we are the payor of record.",
          "Ally uses registry language and workflows that help reinforce the contractor model.",
          "Ally will collect all fees from the families as well as disperse funds to caregivers and to you.",
          "Ally keeps you compliant by allowing families to negotiate rates, approve timecards, and handle support requests from caregivers.",
        ]}
      />
      <SubBanner
        bg
        btnTitle="Try For Free"
        heading="I've Been Audited — What Now?"
        paragraph="Ally provides help with:"
        imgUrl={subBanner2}
        reverse={false}
        listItems={[
          "Audit Assistance",
          "Expert advice and witnesses to reinforce the idea that you are working with contractors rather employees.",
        ]}
        btnVariant="secondary"
      />
      <SmallBanner
        heading="Registries that use Ally in the way it was designed, and adhere to state regulations correctly can increase their chances of"
        focuseHeading=" passing a workers classification audit by over 50%."
      />
    </main>
  );
};

export default Compliance;
