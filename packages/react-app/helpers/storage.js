const serviceConfigKey = "SERVICE_CONFIG";
const dashboardKey = "DASHBOARDS";
const templatesKey = "TEMPLATES";
const segmentsKey = "SEGMENTS";

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

export const getTemplates = () => {
  return getObject(templatesKey);
};

export const setTemplates = templates => {
  localStorage.setItem(templatesKey, JSON.stringify(templates));
};

export const addTemplate = template => {
  let templates = getTemplates();
  if (!Array.isArray(templates)) {
    templates = [];
  }
  templates.push(template);
  setTemplates(templates);
};

export const clearTemplates = () => {
  localStorage.removeItem(templatesKey);
};

export const getSegments = () => {
  return getObject(segmentsKey);
};

export const setSegments = segments => {
  localStorage.setItem(segmentsKey, JSON.stringify(segments));
};

export const addSegment = segment => {
  let segments = getSegments();
  if (!Array.isArray(segments)) {
    segments = [];
  }
  segments.push(segment);
  setSegments(segments);
};

export const clearSegments = () => {
  localStorage.removeItem(segmentsKey);
};
