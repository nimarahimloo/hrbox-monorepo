import { RouteObject, Navigate } from 'react-router-dom';
import * as React from 'react';

interface ProjectComponents {
  [key: string]: React.ComponentType<any>;
}

export function createProjectRoutes(
  basePath: string,
  components: ProjectComponents,
  indexRedirect?: string
): RouteObject[] {
  const children: RouteObject[] = Object.entries(components).map(([path, Component]) => ({
    path,
    element: React.createElement(Component),
  }));

  if (indexRedirect) {
    children.unshift({
      index: true,
      element: <Navigate replace to={indexRedirect} />,
  });
  }

  return [
    {
      path: basePath,
      children,
    },
    {
      path: '/',
      element: <Navigate replace to={basePath} />,
},
  {
    path: '*',
      element: <div>404 - Not Found</div>,
  },
];
}
