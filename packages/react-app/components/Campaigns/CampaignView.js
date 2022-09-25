import React, { useRef, useState, useContext } from "react";
import { Container, Stack } from "@mui/material";
import { useGraph } from "../../hooks/useGraph";
import { AssetsContext } from "../Contexts/AssetsContext";
import { parseGraphOutput } from "../../helpers/parseGraphOutput";
import { Grid } from "../Grid";

export const CampaignView = ({ campaign, index }) => {
  const { campaignName, campaignGraphId, campaignQuery } = campaign;
  const { services } = useContext(AssetsContext);
  const { graph } = services;
  const { loading, success, error, data: graph } = useGraph(campaignGraphId, campaignQuery, graph);
  let graphView = "";
  let gridData = [];
  if (graph) {
    graphView = JSON.stringify(graph);
    gridData = parseGraphOutput(graph);
  }
  const grids = gridData.map((item, index) => <Grid title={item.title} dataList={item.dataList} key={index} />);
  return (
    <Container maxWidth="xl">
      <Stack>{grids}</Stack>
    </Container>
  );
};
