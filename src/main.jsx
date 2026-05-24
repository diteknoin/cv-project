import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Bio from "./Bio";
import Schools from "./Schools";
import Jobexp from "./Jobexp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main>
      <h1 className="text-2xl font-bold text-center p-10">My CV</h1>
      <Bio />
      <Schools />
      <Jobexp />
    </main>
  </StrictMode>,
);
