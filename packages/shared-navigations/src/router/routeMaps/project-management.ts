import { createProjectRoutes } from '../index.js';
import { lazyLoad } from '../lazyLoad.js';

const Dashboard = lazyLoad(() => import('@hrbox-apps/project-management/src/pages/Dashboard/index.js'));
const Projects = lazyLoad(() => import('@hrbox-apps/project-management/src/pages/Projects/index.js'));

const basePath = '/project-management';

export const routes = createProjectRoutes(basePath, {
  Dashboard,
  Projects,
});
