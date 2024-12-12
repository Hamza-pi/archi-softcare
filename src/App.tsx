import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
const Home = React.lazy(() => import("@/pages/Home/index"));
const Registries = React.lazy(() => import("@/pages/WhoHelp/Registries"));
const Compliance = React.lazy(() => import("@/pages/Solutions/Compliance"));
const Scheduling = React.lazy(() => import("@/pages/Solutions/Scheduling"));
const FamilyRoom = React.lazy(() => import("@/pages/Solutions/FamilyRoom"));
const EVV = React.lazy(() => import("@/pages/Solutions/EVV"));
const Pricing = React.lazy(() => import("@/pages/Pricing"));
const Glossary = React.lazy(() => import("@/pages/Resources/Glossary"));
const About = React.lazy(() => import("@/pages/Company/About"));
const Partner = React.lazy(() => import("@/pages/Company/Partner"));
const Schedule = React.lazy(() => import("@/pages/Schedule"));
const Referral = React.lazy(() => import("@/pages/Company/Referral"));

const CustomerStories = React.lazy(
  () => import("@/pages/Resources/CustomerStories")
);

const ContentLibrary = React.lazy(
  () => import("@/pages/Resources/ContentLibrary")
);

const BillingPayment = React.lazy(
  () => import("@/pages/Solutions/BillingPayment")
);

const Layout = React.lazy(() => import("./components/shared/Layout"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="who-we-help" element={<Registries />} />
          <Route path="compliance" element={<Compliance />} />
          <Route
            path="revenue-cycle-billing-payments"
            element={<BillingPayment />}
          />
          <Route path="scheduling" element={<Scheduling />} />
          <Route path="family-room" element={<FamilyRoom />} />
          <Route path="electronic-visit-verification" element={<EVV />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="content-library" element={<ContentLibrary />} />
          <Route path="customer-stories" element={<CustomerStories />} />
          <Route path="caregiver-registry-glossary" element={<Glossary />} />
          <Route path="about" element={<About />} />
          <Route path="partners" element={<Partner />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="eferral-program" element={<Referral />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
