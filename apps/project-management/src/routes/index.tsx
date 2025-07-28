import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Page404 from "../pages/404";

import {
  Dashboard, Projects
} from "@/routes/components.tsx";


export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate replace to="/project-management" />,
  },
  {
    path: "/project-management",
    children: [
      {
        index: true,
        element: <Navigate replace to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
];
