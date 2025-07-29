import { Suspense, lazy } from "react";
import {App} from "@hrbox/app-shell";
import {AppLoader} from "@hrbox/shared-components";
import * as React from "react";

export const createLoadableComponent = (Component: React.ComponentType<any>) => (props: any) => {
  return (
    <App
      props={{
        children: (
          <Suspense fallback={<AppLoader />}>
            <Component {...props} />
          </Suspense>
        ),
      }}
    />
  );
};
export const lazyLoad = (importFunc: () => Promise<{ default: React.ComponentType<any> }>) => {
  return createLoadableComponent(lazy(importFunc));
};
