import { RouteObject, Navigate } from "react-router-dom";
import Page404 from "@hrbox/shared-components";
import * as React from "react";

interface ProjectComponents {
  Dashboard: React.ComponentType<any>;
  Projects: React.ComponentType<any>;
}
export function createProjectRoutes(
  basePath: string,
  components: ProjectComponents,
  NotFoundPage: React.ComponentType<any> = Page404
): RouteObject[] {
  return [
    {
      path: "/",
      element: <Navigate replace to={basePath} />,
    },
    {
      path: basePath,
      children: [
        {
          index: true,
          element: <Navigate replace to="dashboard" />,
        },
        {
          path: "dashboard",
          element: <components.Dashboard />,
        },
        {
          path: "projects",
          element: <components.Projects />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ];
}
