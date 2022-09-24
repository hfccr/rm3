import React, { useContext } from "react";
import { AssetsContext } from "../Contexts/AssetsContext";
import { Tabs, Tab, Box } from "@mui/material";
import { SegmentView } from "./SegmentView";

function TabPanel({ segment, index, value }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dashboard-tabpanel-${index}`}
      aria-labelledby={`dashboard-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <SegmentView segment={segment} index={index} />
        </Box>
      )}
    </div>
  );
}

export function SegmentsNav() {
  const { segments } = useContext(AssetsContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="segments tabs">
          {segments.map((segment, index) => {
            return <Tab label={segment.segmentName} key={index} />;
          })}
        </Tabs>
      </Box>
      {segments.map((segment, index) => {
        return <TabPanel key={index} segment={segment} index={index} value={value} />;
      })}
    </Box>
  );
}
