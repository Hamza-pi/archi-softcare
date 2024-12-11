import React from "react";
import bannerImg from "@/assets/image/family1.webp";
import compImg from "@/assets/image/family2.webp";
import subBanner1 from "@/assets/image/family3.svg";

const SmallBanner = React.lazy(() => import("@/components/shared/SmallBanner"));
const SubBanner = React.lazy(() => import("@/components/shared/SubBanner"));
const Comp = React.lazy(() => import("@/components/shared/Comp"));
const Banner = React.lazy(() => import("@/components/shared/Banner"));

const FamilyRoom = () => {
  return (
    <main className="space-y-6 sm:space-y-12">
      <Banner
        imgUrl={bannerImg}
        heading="Your Secret Weapon to Client Satisfaction"
        btnVariant="secondary"
        paragraph=""
      />
      <Comp
        heading="your clients the visibility and control they need in order to manage their care."
        heading1="Family Room, your clients can feel secure that they have full access to the functionality they need."
        paragraph=""
        footerPara=""
        items={[]}
        img={compImg}
        vectorWord="Give"
        vectorWord1="With ArchiSoft Care"
      />

      <SubBanner
        bg={false}
        btnTitle="Try For Free"
        heading="With Ally's Family Room, your clients can:"
        paragraph=""
        imgUrl={subBanner1}
        reverse={true}
        listItems={[
          "View, edit, modify and confirm shifts",
          "View invoice history",
          "View payment history  ",
          "Get year end summaries",
          "Edit their personal demographic information",
          "Can see who their caregivers are",
          "Access to knowledge base ",
        ]}
      />
      <SmallBanner heading="Reach out below to learn more." focuseHeading="" />
    </main>
  );
};

export default FamilyRoom;
