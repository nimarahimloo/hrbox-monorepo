import { RouteObject } from 'react-router-dom';

type LazyRoutesLoader = () => Promise<{ routes: RouteObject[] }>;

export const routesMap: Record<string, LazyRoutesLoader> = {
  '/project-management': () => "@hrbox-apps/project-management",
};
