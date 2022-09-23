import React, { createContext } from "react";

const defaultAssetsContext = {
  services: {},
  setServices: () => {},
  clearServices: () => {},
  hasServices: () => {},
  dashboards: [],
  setDashboards: () => {},
  addDashboard: () => {},
  hasDashboards: () => {},
  clearDashboards: () => {},
};

export const AssetsContext = createContext(defaultAssetsContext);
