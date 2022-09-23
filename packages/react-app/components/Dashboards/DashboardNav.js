import React, { useContext } from "react";
import { AssetsContext } from "../Contexts/AssetsContext";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { Frame } from "./Frame";

function TabPanel({ dashboard, index, value }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dashboard-tabpanel-${index}`}
      aria-labelledby={`dashboard-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Frame url={dashboard.dashboardUrl} index={index} />
        </Box>
      )}
    </div>
  );
}

export function DashboardNav() {
  const { dashboards } = useContext(AssetsContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="dashboard tabs">
          {dashboards.map((dashboard, index) => {
            return <Tab label={dashboard.dashboardName} key={index} />;
          })}
        </Tabs>
      </Box>
      {dashboards.map((dashboard, index) => {
        return <TabPanel key={index} dashboard={dashboard} index={index} value={value} />;
      })}
    </Box>
  );
}
