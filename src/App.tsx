import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { HomePage } from "./pages";
const Layout = React.lazy(() => import("./components/shared/Layout"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
