import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import {DarkModeBg} from "@hrbox/shared-templates";
import {LightModeBg} from "@hrbox/shared-templates";
import { useDarkMode } from "@hrbox/shared-templates";
import { useProjectRoutes } from "@hrbox/shared-templates";
export const AppRoutes = () => {
  const location = useLocation();
  const routes = useProjectRoutes();
  const element = useRoutes(routes);

  const { darkMode } = useDarkMode();

  return (
    <>
      <div
        className="relative dark:bg-mobile-bg-dark bg-mobile-bg lg:bg-cover lg:bg-center bg-no-repeat"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: `url(${darkMode ? DarkModeBg : LightModeBg})`,
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.key}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
          transition={{ duration: 0.5 }}
        >
          {element}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
