import { RouteObject } from 'react-router-dom';
import { apps } from './moduleList.js';

type LazyRoutesLoader = () => Promise<{ routes: RouteObject[] }>;

export const ProjectRoutesMap: Record<string, LazyRoutesLoader> = Object.fromEntries(
  apps.map(app => [
    `/${app}`,
    () => import(`@hrbox-apps/${app}/src/routes`)
  ])
);

