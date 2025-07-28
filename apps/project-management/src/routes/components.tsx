import { lazy } from "react";

import { Loadable } from "./Loadable";

export const Dashboard = Loadable(
  lazy(() => import("@/pages/Dashboard")),
);

export const Projects = Loadable(
  lazy(() => import("@/pages/Projects")),
);