import React, { useContext } from "react";
import { AssetsContext } from "../Contexts/AssetsContext";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { CampaignView } from "./CampaignView";

function TabPanel({ campaign, index, value }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`campaign-tabpanel-${index}`}
      aria-labelledby={`campaign-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <CampaignView campaign={campaign} index={index} />
        </Box>
      )}
    </div>
  );
}

export function CampaignNav() {
  const { campaigns } = useContext(AssetsContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="campaign tabs">
          {campaigns.map((campaign, index) => {
            return <Tab label={campaign.campaignName} key={index} />;
          })}
        </Tabs>
      </Box>
      {campaigns.map((campaign, index) => {
        return <TabPanel key={index} campaign={campaign} index={index} value={value} />;
      })}
    </Box>
  );
}
