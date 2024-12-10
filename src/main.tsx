import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FallBack from "./components/shared/FallBack.tsx";
const App = React.lazy(() => import("./App.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<FallBack />}>
      <App />
    </Suspense>
  </StrictMode>
);
