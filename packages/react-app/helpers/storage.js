const serviceConfigKey = "SERVICE_CONFIG";
const dashboardKey = "DASHBOARDS";

const getObject = localStorageKey => {
  let config;
  const configJson = localStorage.getItem(localStorageKey);
  if (configJson === null) {
    return undefined;
  }
  try {
    config = JSON.parse(configJson);
  } catch (e) {
    return undefined;
  }
  return config;
};

export const saveServices = async config => {
  const configJson = JSON.stringify(config);
  localStorage.setItem(serviceConfigKey, configJson);
};

export const getServices = () => {
  return getObject(serviceConfigKey);
};

export const clearServices = () => {
  localStorage.removeItem(serviceConfigKey);
};

export const hasServices = () => {
  const services = getServices();
  return typeof services === "object";
};

export const getDashboards = () => {
  return getObject(dashboardKey);
};

export const setDashboards = dashboards => {
  localStorage.setItem(dashboardKey, JSON.stringify(dashboards));
};

export const addDashboard = dashboard => {
  let dashboards = getDashboards();
  if (!Array.isArray(dashboards)) {
    dashboards = [];
  }
  dashboards.push(dashboard);
  setDashboards(dashboards);
};

export const clearDashboards = () => {
  localStorage.removeItem(dashboardKey);
};
