import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
const Home = React.lazy(() => import("@/pages/Home/index"));
const Registries = React.lazy(() => import("@/pages/WhoHelp/Registries"));
const Compliance = React.lazy(() => import("@/pages/Solutions/Compliance"));
const Scheduling = React.lazy(() => import("@/pages/Solutions/Scheduling"));
const FamilyRoom = React.lazy(() => import("@/pages/Solutions/FamilyRoom"));
const EVV = React.lazy(() => import("@/pages/Solutions/EVV"));

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
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
