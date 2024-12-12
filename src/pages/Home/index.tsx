import React from "react";
import whatdoes from "@/assets/image/whatdoes.webp";
import wedo from "@/assets/image/wedo.svg";
import paying from "@/assets/image/paying.svg";

const Banner = React.lazy(() => import("./components/Banner"));
const Compliance = React.lazy(() => import("./components/Compliance"));
const TrustReg = React.lazy(() => import("./components/TrustReg"));
const Counter = React.lazy(() => import("./components/Counter"));
const KnownReg = React.lazy(() => import("./components/KnownReg"));
const Effeciencies = React.lazy(() => import("./components/Efficiencies"));
const PCA = React.lazy(() => import("./components/PCA"));
const Features = React.lazy(() => import("./components/Features"));
const SubBanner = React.lazy(() => import("@/components/shared/SubBanner"));

const Home: React.FC = () => {
  return (
    <main className="space-y-6 sm:space-y-12">
      <Banner />
      <Compliance />
      <Counter />
      <KnownReg />
      <TrustReg />
      <Effeciencies />
      <PCA />
      <Features />
      <SubBanner
        imgUrl={whatdoes}
        bg={false}
        reverse={false}
        heading="If (or when!) the DOL comes knocking, you've got a trusted partner by your side."
        btnTitle="Maintain Compliance with Ease"
        route="compliance"
        paragraph="We provide a software platform that takes care of your general workflow and administrative needs while at the same time providing services that help mitigate the chance of being classified as an employer."
      />
      <SubBanner
        imgUrl={wedo}
        bg
        reverse
        heading="What We Do"
        btnTitle="Get Started"
        btnVariant="secondary"
        listItems={[
          "Win more referrals with CRM",
          "Safely stores client and caregiver schedules & records",
          "Collect payments from clients via timeclock/EVV",
          "Pays caregivers under our entity (not yours!), and submits tax reporting",
        ]}
        paragraph="We provide a software platform that takes care of your general workflow and administrative needs while at the same time providing services that help mitigate the chance of being classified as an employer."
      />
      <SubBanner
        imgUrl={paying}
        bg={false}
        reverse={false}
        heading="Potential Labor Savings"
        btnTitle="Check Out the Calculator"
        btnVariant="link"
        paragraph="Easily calculate employee hours related to non-medical that can be reinvested when you switch to ArchiSoft Care."
      />
    </main>
  );
};

export default Home;
