import React from "react";
import bannerImg from "@/assets/image/evv1.webp";
import compImg from "@/assets/image/evv2.webp";
import FAQ from "./components/FAQ";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
const Comp = React.lazy(() => import("@/components/shared/Comp"));
const Banner = React.lazy(() => import("@/components/shared/Banner"));

const EVV = () => {
  return (
    <main className="space-y-6 sm:space-y-12">
      <Banner
        imgUrl={bannerImg}
        heading="Electronic Visit Verification to Verify Care for You and Your Loved Ones"
        btnVariant="secondary"
        paragraph=""
      />
      <Comp
        heading="fraud, leakage and abuse "
        heading1=" caregivers are at the service address when performing care"
        heading2=" fraudulent claims and decrease claims cost"
        paragraph=""
        footerPara=""
        items={[]}
        img={compImg}
        vectorWord="Eliminate"
        vectorWord1="Ensure"
        vectorWord2="Eliminate"
      />
      <MobileApp />
      <Cards />
      <FAQ />
    </main>
  );
};

export default EVV;
