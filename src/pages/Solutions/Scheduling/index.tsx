import React from "react";
import bannerImg from "@/assets/image/scheduling1.webp";
import compImg from "@/assets/image/scheduling2.webp";
import subBanner1 from "@/assets/image/scheduling3.svg";

const SmallBanner = React.lazy(() => import("@/components/shared/SmallBanner"));
const SubBanner = React.lazy(() => import("@/components/shared/SubBanner"));
const Comp = React.lazy(() => import("@/components/shared/Comp"));
const Banner = React.lazy(() => import("@/components/shared/Banner"));

const Scheduling = () => {
  return (
    <main className="space-y-6 sm:space-y-12">
      <Banner
        imgUrl={bannerImg}
        heading="Say Goodbye to Complex Scheduling"
        btnVariant="secondary"
        paragraph=""
      />
      <Comp
        heading="should be simple"
        heading1=" should be easy."
        heading2="intuitive and effortless interface gives you unmatched efficiency and organization in your day-to-day tasks."
        paragraph=""
        footerPara=""
        items={[]}
        img={compImg}
        vectorWord="Scheduling"
        vectorWord1="Scheduling"
        vectorWord2="ArchiSoft Care"
      />

      <SubBanner
        bg={false}
        btnTitle="Try For Free"
        heading="Ally’s scheduling includes:"
        paragraph=""
        imgUrl={subBanner1}
        reverse={true}
        listItems={[
          "Color coded status schedules",
          "Multiple filters include location, client and caregivers",
          "Bulk editing",
          "Day, week and month views",
          "No click visibility of shift details ",
        ]}
      />

      <SmallBanner
        heading="Get back up to 10 hours a week just in improved scheduling workflow!"
        focuseHeading=""
      />
    </main>
  );
};

export default Scheduling;
