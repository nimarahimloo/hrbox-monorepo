import { createProjectRoutes } from "@hrbox/shared/utils/createProjectRoutes";
import { createProjectPaths } from "@hrbox/shared-navigations";
import {App404} from "@hrbox/shared-components";

import { Dashboard, Projects } from "./lazyComponents";

const ROOTS_PROJECT_MANAGEMENT = "/project-management";

export const PATH_PROJECT_MANAGEMENT = createProjectPaths(ROOTS_PROJECT_MANAGEMENT);

export const routes = createProjectRoutes(
  ROOTS_PROJECT_MANAGEMENT,
  {
    Dashboard: Dashboard,
    Projects: Projects,
  },
  App404
);
