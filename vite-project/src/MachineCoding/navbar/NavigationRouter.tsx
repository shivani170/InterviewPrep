import { Route, Routes } from "react-router-dom";
import { NAVIGATION_CONFIG } from "./navigationConfig";

const NavigationRouter = () => {
  return (
    <div className="py-4 bg-gray-100">
      <Routes>
        {NAVIGATION_CONFIG.map((config) => {
          const Element = config.component;
          return (
            <Route key={config.href} path={config.href} element={<Element />} />
          );
        })}
      </Routes>
    </div>
  );
};

export default NavigationRouter;
