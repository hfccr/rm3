import React, { useEffect, useState } from "react";
import { AssetsContext } from "./AssetsContext";
import {
  getServices as getServicesFromStorage,
  saveServices as setServicesToStorage,
  clearServices as clearServicesFromStorage,
  getDashboards as getDashboardsFromStorage,
  setDashboards as setDashboardsToStorage,
  addDashboard as addDashboardToStorage,
  clearDashboards as clearDashboardsFromStorage,
  getTemplates as getTemplatesFromStorage,
  setTemplates as setTemplatesToStorage,
  addTemplate as addTemplateToStorage,
  clearTemplates as clearTemplatesFromStorage,
  getSegments as getSegmentsFromStorage,
  setSegments as setSegmentsToStorage,
  addSegment as addSegmentToStorage,
  clearSegments as clearSegmentsFromStorage,
  getCampaigns as getCampaignsFromStorage,
  setCampaigns as setCampaignsToStorage,
  addCampaign as addCampaignToStorage,
  clearCampaigns as clearCampaignsFromStorage,
} from "../../helpers/storage";

export function AssetsContextProvider({ children }) {
  const [services, setServices] = useState({});
  const setServicesInSync = services => {
    setServicesToStorage(services);
    setServices(services);
  };
  const clearServices = () => {
    clearServicesFromStorage();
    setServices({});
  };
  const hasServices = () => {
    return typeof services === "object" && Object.keys(services).length > 0;
  };

  const [dashboards, setDashboards] = useState([]);
  const setDashboardsInSync = dashboards => {
    setDashboardsToStorage(dashboards);
    setDashboards(dashboards);
  };
  const addDashboard = dashboard => {
    addDashboardToStorage(dashboard);
    setDashboards([...dashboards, dashboard]);
  };
  const hasDashboards = () => {
    return Array.isArray(dashboards) && dashboards.length > 0;
  };
  const clearDashboards = () => {
    clearDashboardsFromStorage();
    setDashboards([]);
  };

  const [templates, setTemplates] = useState([]);
  const setTemplatesInSync = templates => {
    setTemplatesToStorage(templates);
    setTemplates(templates);
  };
  const addTemplate = template => {
    addTemplateToStorage(template);
    setTemplates([...templates, template]);
  };
  const hasTemplates = () => {
    return Array.isArray(templates) && templates.length > 0;
  };
  const clearTemplates = () => {
    clearTemplatesFromStorage();
    setTemplates([]);
  };

  const [segments, setSegments] = useState([]);
  const setSegmentsInSync = segments => {
    setSegmentsToStorage(segments);
    setSegments(segments);
  };
  const addSegment = segment => {
    addSegmentToStorage(segment);
    setSegments([...segments, segment]);
  };
  const hasSegments = () => {
    return Array.isArray(segments) && segments.length > 0;
  };
  const clearSegments = () => {
    clearSegmentsFromStorage();
    setSegments([]);
  };

  const [campaigns, setCampaigns] = useState([]);
  const setCampaignsInSync = campaigns => {
    setCampaignsToStorage(campaigns);
    setCampaigns(campaigns);
  };
  const addCampaign = campaign => {
    addCampaignToStorage(campaign);
    setCampaigns([...campaigns, campaign]);
  };
  const hasCampaigns = () => {
    return Array.isArray(campaigns) && campaigns.length > 0;
  };
  const clearCampaigns = () => {
    clearCampaignsFromStorage();
    setCampaigns([]);
  };

  useEffect(() => {
    const defaultServices = getServicesFromStorage();
    const setInitialServices = typeof defaultServices === "object" ? defaultServices : {};
    setServices(setInitialServices);
    const defaultDashboards = getDashboardsFromStorage();
    const setInitialDashboards = Array.isArray(defaultDashboards) ? defaultDashboards : [];
    setDashboards(setInitialDashboards);
    const defaultTemplates = getTemplatesFromStorage();
    const setInitialTemplates = Array.isArray(defaultTemplates) ? defaultTemplates : [];
    setTemplates(setInitialTemplates);
    const defaultSegments = getSegmentsFromStorage();
    const setInitialSegments = Array.isArray(defaultSegments) ? defaultSegments : [];
    setSegments(setInitialSegments);
    const defaultCampaigns = getCampaignsFromStorage();
    const setInitialCampaigns = Array.isArray(defaultCampaigns) ? defaultCampaigns : [];
    setCampaigns(setInitialCampaigns);
  }, []);
  return (
    <AssetsContext.Provider
      value={{
        services,
        setServices: setServicesInSync,
        clearServices,
        hasServices,
        dashboards,
        setDashboards: setDashboardsInSync,
        addDashboard,
        hasDashboards,
        clearDashboards,
        templates,
        setTemplates: setTemplatesInSync,
        addTemplate,
        hasTemplates,
        clearTemplates,
        segments,
        setSegments: setSegmentsInSync,
        addSegment,
        hasSegments,
        clearSegments,
        campaigns,
        setCampaigns: setCampaignsInSync,
        addCampaign,
        hasCampaigns,
        clearCampaigns,
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
}
