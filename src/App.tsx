import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
const Home = React.lazy(() => import("@/pages/Home/index"));
const Registries = React.lazy(() => import("@/pages/WhoHelp/Registries"));

const Layout = React.lazy(() => import("./components/shared/Layout"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="who-we-help" element={<Registries />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
