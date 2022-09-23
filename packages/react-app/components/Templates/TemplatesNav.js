import React, { useContext } from "react";
import { AssetsContext } from "../Contexts/AssetsContext";
import { Tabs, Tab, Box } from "@mui/material";
import { TemplateView } from "./TemplateView";

function TabPanel({ template, index, value }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dashboard-tabpanel-${index}`}
      aria-labelledby={`dashboard-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <TemplateView template={template} index={index} />
        </Box>
      )}
    </div>
  );
}

export function TemplatesNav() {
  const { templates } = useContext(AssetsContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="templates tabs">
          {templates.map((template, index) => {
            return <Tab label={template.templateName} key={index} />;
          })}
        </Tabs>
      </Box>
      {templates.map((template, index) => {
        return <TabPanel key={index} template={template} index={index} value={value} />;
      })}
    </Box>
  );
}
