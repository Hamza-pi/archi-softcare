import React, { useState } from "react";
import { Outlet } from "react-router";
const NavBar = React.lazy(() => import("./NavBar"));

const Layout = () => {
  const [disp, setDisp] = useState<boolean>(false);

  return (
    <main className={`${disp ? "max-h-screen overflow-hidden" : ""}`}>
      <NavBar disp={disp} setDisp={setDisp} />
      <Outlet />
    </main>
  );
};

export default Layout;
