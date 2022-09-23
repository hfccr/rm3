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
  useEffect(() => {
    const defaultServices = getServicesFromStorage();
    const setInitialServices = typeof defaultServices === "object" ? defaultServices : {};
    setServices(setInitialServices);

    const defaultDashboards = getDashboardsFromStorage();
    const setInitialDashboards = Array.isArray(defaultDashboards) ? defaultDashboards : [];
    setDashboards(setInitialDashboards);
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
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
}
