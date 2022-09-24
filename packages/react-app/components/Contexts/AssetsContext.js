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
  templates: [],
  setTemplates: () => {},
  addTemplate: () => {},
  hasTemplates: () => {},
  clearTemplates: () => {},
  segments: [],
  setSegments: () => {},
  addSegment: () => {},
  hasSegments: () => {},
  clearSegments: () => {},
  campaigns: [],
  setCampaigns: () => {},
  addCampaign: () => {},
  hasCampaigns: () => {},
  clearCampaigns: () => {},
};

export const AssetsContext = createContext(defaultAssetsContext);
