import { useEffect, useState } from 'react';
import { useLocation, RouteObject } from 'react-router-dom';
import { ProjectRoutesMap, DefaultRoutesLoader } from './routesMaps';
import { RoutesProvider } from '@hrbox/shared-templates';
import { AppRoutes } from '@hrbox/shared-components';
import {AppLoader} from '@hrbox/shared-components';

export const RootRouterLoader = () => {
  const location = useLocation();
  const [currentRoutes, setCurrentRoutes] = useState<RouteObject[] | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const loadRoutes = () => {
      setHasError(false);
      setCurrentRoutes(null);
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const basePath = pathSegments.length > 0 ? `/${pathSegments[0]}` : '/';

      const routesLoader = ProjectRoutesMap[basePath] || DefaultRoutesLoader;

      try {
        const module = routesLoader();
        if (module && module.routes) {
          setCurrentRoutes(module.routes);
        } else {
          console.error(`Routes module for ${basePath} is malformed or missing 'routes' export.`);
          setHasError(true);
        }
      } catch (error) {
        console.error(`Failed to load routes for ${basePath}:`, error);
        setHasError(true);
      }
    };

    loadRoutes();
  }, [location.pathname]);

  if (hasError) {
    return <div>Error loading application routes. Please try again.</div>;
  }

  if (!currentRoutes) {
    return <AppLoader />;
  }

  return (
    <RoutesProvider routes={currentRoutes}>
      <AppRoutes />
    </RoutesProvider>
  );
};
