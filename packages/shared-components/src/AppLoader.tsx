import React from "react";

const Lottie = (await import('lottie-react')).default as React.FC<any>;

import {loader} from "@hrbox/shared-templates";

export const AppLoader = () => {
  return (
    <div className="bg-white dark:bg-black w-full h-full z-50 absolute">
      <div className="w-8 h-8 absolute left-1/2 top-1/2">
        <Lottie animationData={loader} loop={true} />
      </div>
    </div>
  );
};
