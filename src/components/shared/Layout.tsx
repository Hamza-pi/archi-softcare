import React, { useState } from "react";
import { Outlet } from "react-router";
const Footer = React.lazy(() => import("./Footer"));
const NavBar = React.lazy(() => import("./NavBar"));

const Layout = () => {
  const [disp, setDisp] = useState<boolean>(false);

  return (
    <main className={`${disp ? "max-h-screen overflow-hidden" : ""}`}>
      <NavBar disp={disp} setDisp={setDisp} />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
