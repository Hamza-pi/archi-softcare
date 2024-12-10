import React from "react";
const Banner = React.lazy(() => import("./components/Banner"));
const Compliance = React.lazy(() => import("./components/Compliance"));
const TrustReg = React.lazy(() => import("./components/TrustReg"));
const Counter = React.lazy(() => import("./components/Counter"));
const KnownReg = React.lazy(() => import("./components/KnownReg"));
const Effeciencies = React.lazy(() => import("./components/Efficiencies"));

const Home: React.FC = () => {
  return (
    <main className="space-y-12">
      <Banner />
      <Compliance />
      <Counter />
      <TrustReg />
      <KnownReg />
      <Effeciencies />
    </main>
  );
};

export default Home;
